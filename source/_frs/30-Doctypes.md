---
title: Documents types
lang: fr
slug_title: documents-types
---

Jeyser vous permet d'éditer et publiposter tous vos documents depuis le web. Pour cela, vous devez ajouter vos documents-types au format docx (Microsoft Word) dans l'espace d'administration.

Vous devez utiliser le formalisme [Twig](http://twig.sensiolabs.org/) pour tout ce qui touche à la gestion des variables. Voici 2 documents à titre d'exemples.

[Exemple d'AP](https://github.com/in6pio/Incipio/files/12017/AP.docx)

[Exemple de CC](https://github.com/in6pio/Incipio/files/12018/CC.docx)

Les champs accessibles sont ceux utilisés dans les différentes entity du CRM. En voici une [liste](https://github.com/in6pio/Incipio/files/12024/dicoSuivi.txt). Vous disposez en plus des variables globales (définies dans parameters.yml):

 - tva : le taux de tva en cours en décimal (0.2 pour 20%)
 - president.prenom, president.prenom, le prenom et nom du president. president.male, un booléen selon que l'on ai un président ou une présidente, utile pour les bandeaux de signatures : `{%if junior.president.male%}Son Président, {% else %}Sa Présidente, {%endif%}`
 - la même chose mais avec tresorier. (tresorier.prenom ...)
 - junior, un tableau comprenant différentes informations sur la junior-entreprise. Tous les champs sont commentés dans `app/config/parameters.yml.dist`




### balises spécifiques

`{% TRfor %} {%endforTR %}` pour faire une boucle dans une ligne de tableau. Cf l'AP si vous avez besoin d'un exemple.

`{% Pfor %} {%endforP %}` pour faire une boucle dans un paragraphe.

...

### filtres
En plus des filtres Twig habituels, Jeyser comporte quelques filtres supplémentaires :


 - le filtre money arrondi au centime et remplace le point par une virgule dans les nombres décimaux. ` {{ etude.montantHT | money }}`
 
 - le filtre pluriel qui concatene un s si son paramètre est supérieur à 1. ` La charge de travail est estimée à {{ etude.nbrJEH }}  Jour{{ etude.nbrJEH | pluriel }}-Étude Homme`
 
 - nbrToLetters qui transforme un nombre en lettre. `{{ (etude.montantHT * (1+tva)) | nbrToLetters(1) }}`
 
 - nl2wbr qui concerne les retours à la ligne du texte d'origine. `{{ etude.presentationProjet | nl2wbr | raw }}`
 
 - le filtre liaision qui vous permet de transformer les de + voyelle en d''voyelle.


## FAQ

### Mon document est corrompu.

Essayez de voir si le message d'erreur de Word ne vous apporte pas des informations supplémentaires. Si vous avez une erreur à une ligne (exemple erreur inconne à la ligne 2), il va falloir mettre les mains dans le cambouis pour debugger votre erreur. Un document word est une simple archive. Essayez donc d'ouvrir le document avec un gestionnaire d'archive et ouvrez word/document.xml. Une fois ouvert, appliquez une expression régulière pour aérer le document : remplacez /> par />\n. cela se fait aisément avec un éditeur de code. Votre erreur devrait à présent etre plus précise et vous permettre de trouver d'où vient l'erreur. 

Attention à ne pas confondre différents caractères, comme le moins et le tiret long (qui lui est invalide dans une formule). Il est déconseillé de faire du copier-coller de texte entre document car cela à tendance à casser le document.


### Comment faire pour les BV ?

Le document type du BV ne peut pas être un document Excel car cela ne fonctionne pas. Il faut donc passer à un format Word. Cela se fait rapidement. Vous pouvez vous inspirer de la [vue d'un BV](https://github.com/n7consulting/Incipio/blob/master/src/Mgate/TresoBundle/Resources/views/BV/voir.html.twig) pour le refaire facilement. Pensez à TRfor pour le tableau.