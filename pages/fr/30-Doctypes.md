---
title: Documents types
tags: [fr]
slug_title: documents-types
keywords: fr, documents-types
sidebar: main_sidebar
permalink: fr/documents-types.html
---

{% raw %}

Jeyser vous permet d'éditer et publiposter tous vos documents depuis le web. Il utilise la puissance de [Twig](http://twig.sensiolabs.org/), le moteur de template de Symfony. N'hésitez pas à la consulter.

Pour plus de simplicité, Jeyser contient déjà quelques documents types d'exemples.[Exemple d'AP](https://github.com/in6pio/Incipio/files/12017/AP.docx) [Exemple de CC](https://github.com/in6pio/Incipio/files/12018/CC.docx)


Les champs accessibles sont ceux utilisés dans les différentes entity du CRM. En voici une [liste](https://github.com/in6pio/Incipio/files/12024/dicoSuivi.txt). 

### Paramètres

Depuis la version 2.0.0 de Jeyser, vous pouvez régler certains de vos paramètres depuis l'espace web. Ces paramètres sont accessibles dans vos documents types via l'extension `param()`.

Les paramètres disponibles sont : 

 - **nom** le nom de votre junior-Entreprise
 - **abbr** l'abbréviation de votre junior-entreprise
 - **logo** l'url du logo de votre junior. Sert surtout pour la page de connexion et n'est pas très utile pour vos documents types.
 - **adresse** l'adresse postale de votre junior-entreprise
 - **url** l'url de votre site web
 - **email** l'email de contact de votre junior-entreprise
 - **domaineEmailEtu** le domaine des mails de vos etudiants (par exemple @etu.enseeiht.fr)
 - **domaineEmailAncien** le domaine des mails des alumnis de votre école ( @alumni.enseeiht.fr)
 - **presidentPrenom** le prénom du président
 - **presidentNom** le nom du président
 - **presidentTexte** un texte introductif précédent sa signature, (par exemple `Son président,`)
 - **tresorierPrenom** similaire au champs ci-dessus
 - **tresorierNom**
 - **tresorierTexte**
 - **tva** le taux de tva. La donnée est un chiffre et peux donc être directement utilisée dans vos calculs
 - **anneCreation** l'année de création de votre junior
 - **annee1Jeyser** l'année d'installation de Jeyser dans votre junior
 - **gaTracking**  un code de suivi google-analytics

Exemple : Mettre `{{ param('abbr') }}` dans votre document type affichera N7C.
 
**Note :**
 
### balises spécifiques
`{% TRfor %} {%endforTR %}` pour faire une boucle dans une ligne de tableau. Cf l'AP si vous avez besoin d'un exemple.

`{% Pfor %} {%endforP %}` pour faire une boucle dans un paragraphe.

...

### filtres
En plus des filtres Twig habituels, Jeyser comporte quelques filtres supplémentaires :


 - le filtre money arrondi au centime et remplace le point par une virgule dans les nombres décimaux. ` {{ etude.montantHT | money }}`
 
 - le filtre pluriel qui concatene un s si son paramètre est supérieur à 1. ` La charge de travail est estimée à {{ etude.nbrJEH }}  Jour{{ etude.nbrJEH | pluriel }}-Étude Homme`
 
 - nbrToLetters qui transforme un nombre en lettre. `{{ (etude.montantHT * (1+tva)) | nbrToLetters(1) }}`
 
 - nl2wbr qui conserve les retours à la ligne du texte d'origine. `{{ etude.presentationProjet | nl2wbr | raw }}`
 
 - le filtre liaision qui vous permet de transformer les `de + voyelle` en `d'voyelle`.


### Avertissement

Word modifie parfois les caractères que vous saisissez pour des raisons esthétiques (remplacement de ' par \` ou de " par \`\` ). Or ces caractères lèveront des erreurs. 
Faites bien attention à utiliser ' et " (apostrophe simple et double) et non \` et \`\` (signe de citation simple et double).

## FAQ

### Mon document est corrompu.

Essayez de voir si le message d'erreur de Word ne vous apporte pas des informations supplémentaires. Si vous avez une erreur à une ligne (exemple erreur inconne à la ligne 2), il va falloir mettre les mains dans le cambouis pour debugger votre erreur. Un document word est une simple archive. Essayez donc d'ouvrir le document avec un gestionnaire d'archive et ouvrez word/document.xml. Une fois ouvert, appliquez une expression régulière pour aérer le document : remplacez /> par />\n. cela se fait aisément avec un éditeur de code. Votre erreur devrait à présent etre plus précise et vous permettre de trouver d'où vient l'erreur. 

Attention à ne pas confondre différents caractères, comme le moins et le tiret long (qui lui est invalide dans une formule). Il est déconseillé de faire du copier-coller de texte entre document car cela à tendance à casser le document.


### Comment faire pour les BV ?

Le document type du BV ne peut pas être un document Excel car cela ne fonctionne pas. Il faut donc passer à un format Word. Cela se fait rapidement. Vous pouvez vous inspirer de la [vue d'un BV](https://github.com/n7consulting/Incipio/blob/master/src/Mgate/TresoBundle/Resources/views/BV/voir.html.twig) pour le refaire facilement. Pensez à TRfor pour le tableau.

{% endraw %}
