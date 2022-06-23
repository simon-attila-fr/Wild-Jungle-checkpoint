# Checkpoint 3 // Javascript React

Ce Repo est destiné à être le JS CheckPoint 3 avec tous les concepts principaux appris dans la Wild Code School.

## Configuration
1. Clonez ce repo, entrez le
2. Exécutez la commande `npm run setup`
3. Allez dans le répertoire frontend et créez un fichier .env à partir du fichier .env.sample.
4. Allez dans le répertoire backend et créez un fichier .env à partir du fichier .env.sample.
5. Dans le fichier .env du backend, remplissez les champs DB_USER et DB_PASSWORD avec vos informations d'identification MySQL. 
6. Toujours dans le répertoire backend, exécutez `node migrate`.
7. Retournez dans le répertoire racine et exécutez `npm run dev`.
8. Allez sur votre navigateur préféré sur http://localhost:3000

## Introduction
Wild Jungle est une petite e-chop pour acheter des plantes sauvages pour rendre vos chambres et balcons plus sauvages.
Pour l'instant, les données sont disponibles dans la base de données, mais rien ne s'affiche à l'écran.

À terme, la boutique devrait être capable d'afficher une liste de plantes, de filtrer la liste par catégorie, d'afficher les détails d'une seule plante et d'avoir un formulaire pour ajouter une nouvelle plante.

## Où sont les plantes ?
Tu voudrais bien voir l'ensemble de toutes tes plantes !

**BACKEND**. 
1. Tu dois créer la route pour pouvoir parcourir la collection de plantes.
2. Toutes les routes concernant les plantes doivent être préfixées par /plantes.
3. Tu as maintenant besoin du PlantController correspondant pour obtenir toutes les plantes. N'oublie pas de créer le PlantManager également.
4. Tu peux vérifier avec Postman, Insomnia ou Thunder que tu obtiens tes plantes depuis la base de données.
5. Les plantes sont associées à une catégorie. Donc il nous faut le nom de cette catégorie associée à chaque plante. Écris ta propre méthode findAll() dans PlantManager avec un INNER JOIN pour obtenir le nom de la catégorie en même temps que les autres informations pour chaque éléments de la collection.

**FRONTEND**.

6. Tu dois créér un système de routage pour permettre à l'utilisateur de consulter 3 pages : 
 - "/"  lui affichera la page PlantList
 - "/plants/add"  lui affichera la page PlantAdd 
 - un chemin dynamique préfixé par "/plants/" lui permettra d'accéder à la page PlantDetail (une page de détail pour une plante spécifique).

7. Dans la page PlantList, récupére les données du backend pour afficher toutes les plantes. Pour cela:
 - Récupére toutes les données des plantes avec ta méthode préférée, lors du montage du composant.
 - Génère un composant PlantItem pour chaque plante. N'oublie pas de lui passer les props.
 - Rend ce composant cliquable. Il doit renvoyer à la page individuelle de cette plante.  
 
8. **BONUS**.
  Gére ta liste de plantes en les filtrant par catégorie :
 - Récupère toutes les données sur les catégories via un appel à une API. 
 - Affiche le nom de la catégorie dans les options du select
 - Créé une méthode pour filtrer la liste des plantes en fonction de la catégorie sélectionnée

## J'aime bien Monstera, tu peux m'en dire plus ?
Il est temps d'avoir plus de détails sur chacune de tes plantes.

**BACKEND**
1. Créé la route avec un paramètre dynamique qui permet de récupérer les informations d'une plante en particulier dans ton router Express
2. Écris ta propre méthode find() dans PlantManager avec un INNER JOIN pour obtenir le nom de la catégorie en même temps que les autres informations.
3. Tu peux vérifier avec Postman, Insomnia ou Thunder que tu obtiens bien les informations de la plante que tu as choisi.

**FRONTEND**
1. Dans ton composant PlantList, utilise un `<Link>` pour faire en sorte que le clic sur un vignette aille sur la page de détail d'une plante.
1. Dans le composant PlantDetail, utilise un useParams, useEffet, un fetch et un useState pour accéder à ta route du backend afin de récupérer et stocker les informations de ta plante choisie.
2. Affiche les informations aux bons endroits 


## Je veux une nouvelle plante !
Il est temps d'agrandir ta collection.

**BACKEND**
1. Créé la route, le code dans le PlantController et dans le PlantManager pour pouvoir ajouter une nouvelle plante. Vérifie sur la base de données les champs attendus. Pour l'image, tu peux utiliser un de ces 3 liens :  

https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80

https://images.unsplash.com/photo-1459156212016-c812468e2115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80

https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80

Aucune vérification de données n'est demandée.

**FRONTEND**
1. Tu trouveras un formulaire déjà mis en place sur la page *Ajouter une plante*
2. Rend ce formulaire contrôlé
3. Au click sur le bouton *Ajouter la plante*, le formulaire doit partir en POST vers la route back préparée précédemment et la nouvelle plante doit apparaître dans la liste
