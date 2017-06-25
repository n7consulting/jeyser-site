---
title:  "Jeyser Oxygen released"
published: true
permalink: oxygen-release.html
summary: "Here it is ! Jeyser CRM 2.0.0, codename Oxygen"
tags: [news]
---

## Migration

### Update from a docker installation

```
# go to your installation folder 
cd /var/www/Incipio
git pull  # if that step fails, reach us out on the gitter chat
git checkout v2.0.0
docker-compose stop
docker-compose rm web traefik
docker-compose build web
sudo rm -rf var/cache
docker-compose up -d
# add commentary to each member 
docker-compose exec web php bin/console doctrine:migrations:execute 20170421211323
# add a new option to the list
docker-compose exec web php bin/console doctrine:migrations:execute 20170603140214
docker-compose restart web
```

### Update from a 1.11 installation

[Reach us out on our gitter](https://gitter.im/jeyser-crm/Support), we will help you.

## Changelog 

Since 1.11 and November 2016 , many major changes occured. You can find them in former changelog. in a word : 

 - Use of docker and docker-compose for a [5 command line installation](http://jeyser-crm.n7consulting.fr/install/)
 - Update from Symfony 2.8 to 3.3 
 - Make Jeyser configurable from the web UI, no need to modify parameters.yml anymore
 - Add samples doctypes, improve usability and UI
 - many cool stuff (cf other release notes)

Since v2.0.0-beta3 release we have : 

- Largely improved UI for member edition
- Updated docker-compose to version 2
- Added a new option to allow several naming conventions : `numero` for M-Gate & friends, or `nom` for N7 Consulting & friends
- Updated to latest Symfony version (3.3)
- Add 2017 tax values
- Added validation on several objects to reduce the 500 error probability
- Fixed some bugs and improved UI on several points (BV, Numero in suivi module for M-Gate & friends, vuCa  ...)
- Updated traefik docker image from camembert to morbier
- Add a commentary on each member
- Improved code quality and performances (slightly)
- Moved docker-compose.yml to version 2

{% include links.html %}
