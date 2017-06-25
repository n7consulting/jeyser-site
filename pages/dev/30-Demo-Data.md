---
title: Demo data
tags: [en, dev]
slug_title: demo-data
keywords: fr, demo-data
sidebar: main_sidebar
permalink: dev/demo-data.html
---


Jeyser provides a command to populate the CRM with some demo data to try it in a more convenient way. It can be useful for you if you want to test Jeyser quickly with some pre-created data. Of course it is not intended to be used in production.

### Load data

`php bin/console demo:create_data`

### Details

The code is located in ` Mgate\DashboardBundle\Command\ CreateDataCommand`.

It will create : 

 1. 8 projects (at least on in each state) and their documents to populate the Etude's tab
 2. 8 prospects and related employee to populate the Prospect's tab
 3. Project managers (members of your JE) to populate the Gestion Associative's tab
 4. Some Phases for some project to have some gantts in your projects
 5. Some developers for your projects and link them to skills to populate the HR tab
 6. All thoses data will be aggregated to display nice charts in Stat's tab
 7. You can see Jeyser standard doctypes from the administration tab
 
