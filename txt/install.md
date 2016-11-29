#Install

In this tutorial, we will assume that you know how to use SSH and have some basics in server setup and configuration. If you don't, you can follow this [tutorial](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04)
 (for beginners, don't do Step Five : Disable Password Authentification) to set up your server and then to install php, mysql and apache following that other [tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu-16-04).
 
 
 ### Set up your environnment
 
 To begin with install PHP, Apache and MySQL on your server.
 
 Then install Composer. As Composer states it, Composer is a tool for dependency management in PHP. It allows you to declare the libraries 
 your project depends on and it will manage (install/update) them for you.
 
 You can install it following [Composer's installation instructions](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx). For our examples, we will assume that you have a global installation.
 
 Finally install Git on your server. For Debian/Ubuntu servers : `sudo apt-get install git`. Git will be used to retrieve Jeyser code.
 
## Get the code

Go to `/var/www/html` and type `git clone https://github.com/n7consulting/Incipio.git`. It should download all Jeyser's code in a folder named Incipio (former name of Jeyser CRM).

### Install dependencies

```
cd Incipio

composer install
```

You will be asked to fill several parameters. Those parameters are stored in `app/config/parameters.yml` and can be modified at any time (don't forget to clear the cache, to apply your changes).

Here is a detail of parameters
```YML
parameters:
###configuration par defaut, local, wamp
    database_driver:   pdo_mysql  #database driver
    database_host:     localhost  #database host
    database_port:     ~
    database_name:     symfony  #database name (assume that you have created one before or used php app/console doctrine:database:create)
    database_user:     root  #database user, it's better to create a specific user than using root.
    database_password: ~  #password of database user
    
    mailer_transport:  mail  #How jeyser will deal with mails, don't change those parameters.
    mailer_host:       localhost
    mailer_user:       ~
    mailer_password:   ~
    
    su_mail:      contact@N7consulting.fr  #email of superadmin user
    su_username:  admin  #username of superadmin user. 
    su_password:  admin  #password of superadmin user
    
    locale:            fr  #language of jeyser
    secret:            ThisIsNotSecretYouKnow  #a string of random letters and numbers. Should be changed.
    
    tva:  0.200  # Taxe sur la valeur ajoputée (VAT) Rate.
    role_voir_confidentiel: ROLE_CA # Role required to bypass confidentiality for projects. Don't change it unless you know what you do.

###configuration de la Junior
###annee1Incipio : première année d'utilisation d'incipio.
    junior:
        nom:          N7 Consulting  # Your JE name
        abbr:         N7C  # A shortname for your JE
        id:           ~
        email:        contact@n7consulting.fr # main email of your JE
        logo:         https://N7consulting.fr/themes/IOTH-bootstrap-basic/assets/images/logo_N7consulting.png  #a picture url.
        adresse:      2 Rue Charles Camichel # Your JE postal address
        url:          https://N7consulting.fr # link to your website
        ga_tracking:  ~ #a google analytics id code if you want to setup analytics
        authorizedStorageSize : 104857600 # how much storage your server can handle
        domaineEmailEtu:    etu.enseeiht.fr #(sub)domain used for students email in your school
        domaineEmailAncien: alumni.enseeiht.fr #(sub)domain usedfor alumni students in your school
        anneeCreation: 1977 #year of creation of your JE
        annee1Incipio: 2015 # year of first use of Jeyser
        president:  #detailled in /fr/Doctypes
            prenom: PrenomPrez
            nom: NomPrez
            male: true
        tresorier:
            prenom: PrenomTrez
            nom: NomTrez
            male: false
```


### PhantomJS

Jeyser CRM uses [PhantomJS](http://phantomjs.org) to render and export Gantt Charts for your documents. 

**Easy way** 

You can use Debian / Ubuntu package `sudo apt-get install phantomjs`. However, because of Debian policies, that package is not the full PhantomJS, therefore there might have bugs.


**Hard way** 

Check that bzip2 and fontconfig (or libfontconfig depending on your distribution) is installed on your server. Otherwise, install them.

Download PhantomJs archive `wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2`

Uncompress it : `sudo tar xvjf phantomjs-2.1.1-linux-x86_64.tar.bz2`

Move it to a shared folder : `sudo mv phantomjs-2.1.1-linux-x86_64 /usr/local/share`

Create a link with binaries folder : `sudo ln -sf /usr/local/share/phantomjs-2.1.1-linux-x86_64/bin/phantomjs /usr/local/bin`

Check that PhantomJS is well installed `phantomjs --version`

### Make repositories writable

make `app/cache/prod` `app/cache/dev` `app/logs/` `app/sessions` `uploads`  `web/documents` `web/tmp` writable by your www-data user.

### Create databse schema and load data

Check that your database configuration in `app/config/parameters.yml` is correct.

Create database schema : `php app/console doctrine:schema:create`

Load fixtures : `php app/console doctrine:fixtures:load`. That will create an admin account with credentials provided in `app/config.parameters.yml` (su_username and su_password).


### (Optionnal) Load demo data

If you want to try Jeyser CRM, you would be glad to find some dummiy data. To create those data you can use `php app/console demo:create_data`.

### Enjoy

After all that, you should be able to use Jeyser CRM. Reach `http://YOUR_SERVER_URL/Incipio/web/app.php`. You should see a connexion form. Well Done ! You can then modify Apache parameter to point its DocumenRoot on web directory.
