---
layout: default
title: About

---

# FAQ

If you have some issues, look at `/var/log/apache2/error.log` and $INSTALLATION_DIRECTORY/app/logs/*.log


### I followed installation instructions but it doesn't work

Have you created the database ? Are writing permissions ok ? Try to read logs and find where the error comes from. You can also ask for support on github.


### installation worked but ererything is broken since I have been cleaning the cache !

You probably modify writing permissions on one of the writable folders (likely to be app/cache/prod). The easiest way to clear the cache is 

```
cd /var/www/html/Incipio
sudo -u www-data /bin/bash
php app/console cache:clear -e=prod
```

### Which server shall I use ?

We recommend using at least a 1 vCore, 1GB RAM, 5 Go HDD server. There are cheap VPS that do the job very well at OVH.com.

### Jeyser is slow, what can I do ?

Come and open an issue on Github as long as each situation is unique.


### What is the difference between Incipio and Jeyser CRM ?

Incipio is the original name of Jeyser CRM. it is under that name that MGate released its ERP. However, as long as it is a very common name among the web, we decided to change it to something more distinctive. It comes from JE (for Junior-Entreprise) and ER (first letters of ERP). Jeyser is an update of Incipio, therefore they should be compatible.

### Do you provide hosting for Jeyser ?

No we don't. Hosting a software is a full time job to maintain servers, improve code, deliver a good quality of service. We aren't looking for such experience, besides it would have a low profitability. If you can't install jeyser, ask for support to us or to your engineering partner.


### Why Symfony ? 

Because it's the best way to have a standard, consistent software. It's a widely used framework, popular among PHP community, and definitely the best for complex systems.
