# Checkpoint 3 // Javascript React

Ce dépôt est le CheckPoint 3 Javascript/Express/React abordant les concepts principaux appris dans la Wild Code School lors du bootcamp FullTime.

## Configuration
1. Clonez ce repo, entrez dans le répertoire
2. Exécutez la commande `npm run setup`
3. Allez dans le répertoire `frontend` et créez un fichier .env à partir du fichier .env.sample.
4. Allez dans le répertoire `backend` et créez un fichier .env à partir du fichier .env.sample.
5. Dans le fichier .env du **backend**, remplissez les champs DB_USER et DB_PASSWORD avec vos informations d'identification MySQL. Ne touchez pas au nom de la base de données.
6. Toujours dans le répertoire `backend`, exécutez la commande `node migrate`.
7. Retournez dans le répertoire racine et exécutez `npm run dev`.
8. Allez sur votre navigateur préféré sur http://localhost:3000

## Introduction
Wild Jungle est une petite boutique en ligne pour acheter des plantes sauvages pour rendre vos chambres et balcons plus Wild.
Pour l'instant, les données sont disponibles dans la base de données, mais rien ne s'affiche à l'écran.

À terme, la boutique devrait être capable d'afficher une liste de plantes, d'afficher les détails d'une seule plante, de filtrer la liste par catégorie et d'avoir un formulaire pour ajouter une nouvelle plante.

## Où sont les plantes ?
Tu voudrais bien voir l'ensemble de toutes tes plantes maintenant, n'est-ce pas ?

**BACKEND**.
1. Tu dois créer la route dans ton router Express pour pouvoir parcourir la collection de plantes.
2. Toutes les routes concernant les plantes doivent être préfixées par `/plants`.
3. Tu as maintenant besoin du PlantController correspondant pour obtenir toutes les plantes. N'oublie pas de créer le PlantManager également.
4. Une fois ces deux fichiers créés et configurés, tu peux vérifier avec Postman, Insomnia ou Thunder que tu obtiens la liste de tes plantes depuis la base de données en accédant en GET à la route http://localhost:5000/plants
5. Les plantes sont associées à une catégorie. Donc il te faut le nom de cette catégorie associée à chaque plante. Écris ta propre méthode findAll() dans PlantManager avec un INNER JOIN pour obtenir le nom de la catégorie en même temps que les autres informations pour chaque élément de la collection. Le nom de la categorie devra apparaitre sous un champ nommé `category`

**FRONTEND**
1. Tu dois créér un système de routage pour permettre à l'utilisateur de consulter 3 pages :

    `/` affichera la page PlantList

    `/plants/:id`, un chemin dynamique, permettra d'accéder à la page PlantDetail (une page de détail pour une plante spécifique)

    `/plants/add` affichera la page PlantAdd

    **ASTUCE**: Tu auras besoin du package `react-router-dom`

2. Dans le composant PlantList, récupére les données du backend lors du montage du composant pour afficher toutes les plantes.

    **ASTUCE**: Pour accéder à l'url du back, tu peux utiliser la variable d'environnement mise à disposition : `import.meta.env.VITE_BACKEND_URL`

3. Utilise le composant PlantItem pour afficher la vignette de chaque plante. N'oublie pas de lui passer les props.

## J'aime bien Monstera, tu peux m'en dire plus ?
Il est temps d'avoir plus de détails sur chacune de tes plantes.

**BACKEND**
1. Créé la route avec un paramètre dynamique qui permet de récupérer les informations d'une plante en particulier dans ton router Express
2. Écris ta propre méthode find() dans PlantManager avec un INNER JOIN pour obtenir le nom de la catégorie en même temps que les autres informations. Le nom de la categorie devra apparaitre sous un champ nommé `category`
3. Tu peux vérifier avec Postman, Insomnia ou Thunder que tu obtiens bien les informations de la plante que tu as choisi en accédant en GET à la route http://localhost:5000/plants/2 par exemple

**FRONTEND**
1. Dans ton composant PlantList, utilise un `<Link>` pour faire en sorte que le clic sur une vignette aille sur la page de détail d'une plante. Normalement ton routage en front te permet déjà d'afficher le bon composant.
1. Dans le composant PlantDetail, utilise un useParams, useEffet, un fetch et un useState pour accéder à ta route du backend afin de récupérer et stocker les informations de ta plante choisie.
2. Affiche les informations aux endroits dédiés

**NB** : Le composant `<Care>` permet d'afficher les besoins en soleil et en eau et doivent recevoir la bonne information sur la props `amount`

## BONUS #1
## Je veux une nouvelle plante !
Il est temps d'agrandir ta collection.

**BACKEND**
1. Créé la route, le code dans le PlantController et dans le PlantManager pour pouvoir ajouter une nouvelle plante. Aucune vérification de données n'est demandée.
2. Dans le doute, vérifie sur la base de données les champs attendus.
3. Tu peux vérifier avec Postman, Insomnia ou Thunder que tu arrives bien à créer une nouvelle plante en accédant en POST à la route http://localhost:5000/plants et en passant un objet de données.
4. Pour l'image, tu peux utiliser un de ces 3 liens :

    https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80

    https://images.unsplash.com/photo-1459156212016-c812468e2115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80

    https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80

**FRONTEND**
1. Tu trouveras un formulaire déjà mis en place sur la page *Ajouter une plante*
2. Rend ce formulaire contrôlé
3. Au click sur le bouton *Ajouter la plante*, le formulaire doit partir en POST vers la route back préparée précédemment et la nouvelle plante doit apparaître dans la liste.

## BONUS #2
### Gére ta liste de plantes en les filtrant par catégorie :

1. Récupère toutes les catégories via un appel à l'API back http://localhost:5000/categories
2. Créé un `<select>` qui affiche le nom de la catégorie dans les balises `<option>` du `<select>`
3. Créé une méthode pour filtrer la liste des plantes en fonction de la catégorie sélectionnée
