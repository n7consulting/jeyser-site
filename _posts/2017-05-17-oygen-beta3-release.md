---
title:  "Oxygen Beta 3 released"
categories: release
permalink: oxygen-beta-3-release.html
tags: [news]
---

This is the last Oxygen beta version release. 

It is not a final release because migration process from 1.11 to 2.0 is not ready yet.

## Migrations

### from a docker installation

```
docker-compose stop web
docker-compose rm web 
docker-compose build web
docker-compose up -d
# migrate the AP / CC inverse key
docker-compose exec web php bin/console doctrine:migrations:execute 20170320153305
# migrate add suiveur Qualite on an etude
docker-compose exec web php bin/console doctrine:migrations:execute 20170327090019

```

## Changelog

Since beta-2 we have : 

 - Fix 2 minor security issue : 
     - an admin can't delete a superadmin anymore, 
     - add a csrf protection on user creation
 - Minor UI improvement, namely link to github in the footer, consistency among pages
 - Fix several bugs : 
    - hardcoded value for notification emails
    - minor undefined field on gantt chart
    - inversed owner relation between AP and CC (see the associated migration)
 - Improved code quality (platinum is back !)
 - Improve Avant Projet doctype
 - Add a field for quality manager on each Etude


{% include links.html %}
