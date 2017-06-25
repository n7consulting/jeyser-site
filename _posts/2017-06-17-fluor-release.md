---
title:  "Jeyser Fluor released"
published: true
permalink: fluor-release.html
summary: "Ninth release of Jeyser CRM"
tags: [news]
---

## Migration

That new version has no big database changes. You just have to add a new parameter on configuration dashboard : 

```
# go to your installation folder 
cd /var/www/Incipio
git pull  # if that step fails, reach us out on the gitter chat
git checkout v2.1.0
docker-compose stop
docker-compose rm web
docker-compose build web
sudo rm -rf var/cache
docker-compose up -d
docker-compose exec web php bin/console doctrine:migrations:execute 20170614232630
```

We also advise you to replace the old docker-compose config file by a new one. To do so, execute :

```
# go to your installation folder 
cd /var/www/Incipio
docker-compose stop
# Create a copy of the current configuration (just in case)
cp docker-compose.yml docker-compose.save.yml
# Copy the expected version
cp docker-compose.yml.dist docker-compose.yml
# Edit the parameters
sed -i "s/SYMFONY_ENV: dev/SYMFONY_ENV: prod/g" docker-compose.yml
sed -i "s/restart: \"no\"/restart: always/g" docker-compose.yml

# In the following lines, replace $subdomain & $email by the values that were already set in your file.
# example : sed -i "s/REPLACE_WITH_YOUR_HOST/dsi@n7consulting.fr/g" docker-compose.yml
sed -i "s/REPLACE_WITH_YOUR_HOST/$subdomain/g" docker-compose.yml
sed -i "s/REPLACE_WITH_YOUR_EMAIL/$email/g" docker-compose.yml

# relaunch
docker-compose up -d
```


## Changelog

 * Fix bug on composer installation
 * Bump to PHP 7.1 as minimal supported version
 * Add a restart always option for production container (will help many junior-entreprises)
 * Largely improve UI and fix bug on Mission management
 * Improve UI on doctype selection 
 * Add validators on several entities
 * Improve BA (Bulletin d'Adhésion) doctype
 * Make CI works
 * Remove unused methods, functions and fix typo
mmy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries

{% include links.html %}
