---
title: Install
tags: [en]
slug_title: install
keywords: en, install
sidebar: main_sidebar
permalink: dev/install.html
---


#Install Jeyser CRM !

Jeyser could be frightening to install. **It is not !** With only basics computer science knowledge and 5 commands, you can safely deploy it on your server. The Docker install even set a SSL certificate (https) for you !

There are 2 ways to install Jeyser : 

 - **The easy :** suited for beginners or non technical people, Docker
 - **The custom :** requires some correct Linux and Apache knowledge.

## Hardware requirements

To run Jeyser you need a server meeting the following requirements : 

 - 1 vCPU
 - 2 GB of RAM
 - 10 Go of hard disk space
 - a subdomain pointing to your server (see [FAQ](/dev/faq) if you need more informations)
 
 
We recommend the use of Ubuntu as your server Operating System. Our automatic install scripts are only tested on Ubuntu.
 
 
## Docker
 
Docker is a virtualization system that isolates applications into containers. If you don't get that definition, don't worry. As for us, we use it to have a standard environnment.
 
Using the docker install will give you many benefits : Automatic install, automatic SSL certificate (using Letsencrypt), already configured server and software. It is the best for non tech people. However, it is not designed to get along with other running systems. 
 
We can't make installation more easy than that. The only requirement is to know how to connect to a linux server with [SSH](https://doc.ubuntu-fr.org/ssh) and how to use [vim](https://doc.ubuntu-fr.org/vim) or nano.
 
```
   #Create a directory for jeyser
   mkdir -p /var/www
   cd /var/www
   # clone Jeyser code source
   git clone https://github.com/n7consulting/Incipio.git
   cd Incipio
   # get the latest release number on https://github.com/n7consulting/Incipio/releases
   git checkout v2.3.1
   #run the docker installer
   chmod u+x var/install/initial-setup_ubuntu16.sh
   ./var/install/initial-setup_ubuntu16.sh
```

That's all ! Jeyser is now installing itself. Don't be afraid, that can take some time. At the end of the installation process, if go to https://crm.yourdomain.com (first connection can take several seconds) you should have a working login page. Connect with the credentials admin/admin  and don't forget to change them right after it.


## Custom Install

Use the Custom Install only if you know what you do. 

What about a bloated install script ? Here it is ! Use it only if you have nothing already running on your server. Otherwise, set a LAMP (Linux Apache Mysql PHP) stack and run only
install_composer` and `install_jeyser` functions. That script doesn't secure your server, thus installing fail2ban and changing SSH default port could be a good idea.


```
    #!/bin/sh

    #That script :
    # 1. Defines the main steps through functions. 
    # 2. Calls them

   #
   # Initialize the environnment by updating server and installing apache2, php and several requirements
   #
   init() {

       apt-get update
       apt-get -y upgrade
       apt-get install -y git apache2 unzip
       #Install php
       apt-get install -y php libapache2-mod-php php-mcrypt php-mysql php-xml

   }


   #
   # Create a new user and register Jeyser's subdomain.
   #
   configure_user(){

       echo "For security reasons, we will create a new user and avoid root login through SSH.
        New user's name ?"
       read new_user

       while [ $new_password != $new_password_confirmation ] || [ $new_password == "" ];  do
           echo "Mot de passe du nouvel utilisateur ?"
           read new_password
           echo "Confirmation du mot de passe ?"
           read new_password_confirm
           if  [ $new_password != $new_password_confirm ]; then
               echo "Passwords don't match, retry. "
           fi
       done

       useradd -m -d "/home/$new_user/" -s /bin/bash $new_user
       echo $new_password | passwd $new_user
       adduser $new_user sudo
       adduser $new_user www-data

       echo "Jeyser CRM sub domain ?"
       read sub_domain
   }

   #
   # Configure Apache :
   # - Give PHP files the highest priority.
   # - Activate mod_rewrite for URL Rewriting.
   # - Change DocumentRoot to where Jeyser will be installed.
   #
   configure_apache(){
       sed -i 's/DocumentRoot \/var\/www\/html/DocumentRoot \/var\/www\/html\/Incipio\/web/g' /etc/apache2/sites-enabled/000-default.conf
       cat > /etc/apache2/mods-enabled/dir.conf <<'endmsg'
   <IfModule mod_dir.c>
       DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
   </IfModule>
   endmsg
       a2enmod rewrite
       service apache2 restart
   }

   #
   # Install Mysql and secure installation (executed commands are the same that mysql_secure_installation would give)
   # Create a mysql user for Jeyser
   #
   install_mysql(){
   echo -e "\033[36m Heads Up !
          We are going to set up the database. It is where all informations will be stored. We will create 2 accounts :
           - An administrator account : root
           - A user with limited access for Jeyser : incipio.
           Carefully write the passwords you will choose for root and incipio because they will protect all your data.

           Press return to confirm.\e[0m "
   read validation
   apt-get install -y mysql-server

   #create a mysql user with limited rights on only one db

   cat > ./mysql_secure_installation.sql <<'endmsg'
   DELETE FROM mysql.user WHERE User='root' AND Host NOT IN ('localhost', '127.0.0.1', '::1');
   DROP DATABASE IF EXISTS test;
   DELETE FROM mysql.db WHERE Db='test' OR Db='test\\_%';
   FLUSH PRIVILEGES;
   endmsg
   echo "\033[33m Type your mysql root password \e[0m"
   mysql -u root -p < mysql_secure_installation.sql
   rm ./mysql_secure_installation.sql

   cat > ./install.sql <<'endmsg'
   create database incipio;
   grant usage on *.* to incipio@localhost identified by 'incipiopass';
   grant all privileges on incipio.* to incipio@localhost;
   Flush privileges;
   endmsg
   echo "\033[33m Type your mysql root password again\e[0m "
   mysql -u root -p < install.sql
   rm ./install.sql

   }

   #install composer.
   install_composer(){
       cd /var/www/html
       EXPECTED_SIGNATURE=$(wget -q -O - https://composer.github.io/installer.sig)
       php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
       ACTUAL_SIGNATURE=$(php -r "echo hash_file('SHA384', 'composer-setup.php');")

       if [ "$EXPECTED_SIGNATURE" != "$ACTUAL_SIGNATURE" ]
       then
           >&2 echo 'ERROR: Invalid installer signature'
           rm composer-setup.php
           break
       fi

       php composer-setup.php --quiet
       RESULT=$?
       rm composer-setup.php
       if [ ! -f ./composer.phar ]; then
           echo "Composer not installed, trying with repository version"
           apt-get install -y composer
       fi

       mv ./composer.phar /usr/local/bin/composer
       echo "You should see Composer version just below. Press Enter to continue."
       composer --version

       read validation
   }


   install_jeyser(){

       #install jeyser
       cd /var/www/html
       git clone https://github.com/n7consulting/Incipio.git
       cd Incipio

       #installation of php dependencies for production.
       composer install --no-dev

       #should display symfony version.
       php app/console --version

       #let's go for db setup !!

       php app/console doctrine:schema:update
       php app/console doctrine:fixtures:load -n
       php app/console assets:install

       #Make newly created user the owner of all that
       chown -R $new_user /var/www/html/Incipio
       chgrp -R www-data /var/www/html/Incipio
   }

   install_ssl(){
       #on configure openssl
       a2enmod ssl
       apt-get install -y python-letsencrypt-apache
       service apache2 restart
   }


   echo "
   Welcome on Jeyser installation script.
   IT IS DESIGNED TO CREATE A PRODUCTION ENVIRONNMENT. DONT USE IT FOR DEV !!

   THIS SCRIPT HAS BEEN WELL-TESTED. HOWEVER, IF IT FAILS, DONT TRY TO RUN IT AGAIN, CONTACT DSI@N7CONSULTING.FR
   and provide a detail of everything that is written on your console.

   To get a SSL Certificate, it's better if you have already mapped a subdomain to that server's ip. If you didn't, stop that script or configure letsencrypt on your own.

   You can get support by contacting dsi@n7consulting.fr

   Are you ready to begin installation ?
   "

   read -p "Type Yes or no : " prompt
   #if [[ $prompt =~ [yY](es)* ]]
   if true
   then
       ${new_user} = ""
       ${new_password} = "dummy"
       ${new_password_confirm} = "dummy"
       ${sub_domain} = ""
       mkdir -p /var && mkdir -p /var/www && mkdir -p /var/www/html
       cd /var/www/html
       configure_user
       init
       configure_apache
       install_mysql
       install_composer
       install_jeyser
   else
       break;
   fi
```
