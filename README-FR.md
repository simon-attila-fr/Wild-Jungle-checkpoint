## Checkpoint 3 // Javascript React

This Repo is meant to be the JS CheckPoint 3 with all the main concepts learned in Wild Code School.

## Setup
1. Clone this repo, enter it
2. Run command `npm run setup`
3. Go in frontend directory and make a .env file from the .env.sample file
4. Go in backend directory and make a .env file from the .env.sample file
5. In the backend .env file, fill the DB_USER and DB_PASSWORD with your MySQL credentials 
6. Still in the backend directory run `node migrate`
7. Go back in the root directory and run `npm run dev`
8. Go on your favorite browser on http://localhost:3000

## Introduction
Wild Jungle is a small e-chop to buy Wild Plants to make your rooms and balconies wilder
For now, data are available in the database, but nothing displays on screen.

At the end, the shop should be able to show a list of plants, filter the list by category, show a single plant details, and having a form to add a new plant

### Where are my plants ?
Let's start with the **backend**. 

1. You have to make the route to be able to browse the plants collection.
2. All the routes about plants should be prefixed by /plants
3. You need now the corresponding PlantController to get all plants. Don't forget to make the corresponding PlantManager.
4. You can test with Postman, Insomnia or Thunder that you get your plants from the database
5. Plants have a category associated. So, in the plants collection, you need to have the name of that category. Write your own findAll() method in your PlantManager with an INNER JOIN to get the category name along with all plants.

Allons dans le dossier **frontend**. 
6. Créez un système de routage pour permettre à l'utilisateur de consulter 3 pages : 
 - "/"  lui affichera la page PlantList
 - "/plants/add"  lui affichera la page PlantAdd 
 - un chemin dynamique préfixé par "/plants/" lui permettra d'accéder à la page PlantDetail (une page de détail pour une plante spécifique).

7. Dans la page PlantList, récupérez les données de votre backend pour afficher toutes les plantes. Pour cela:
 - Récupérez toutes les données des plantes avec votre méthode préférée, au montage du composant.
 - Rendez un composant PlantItem pour chaque plante. N'oubliez pas de lui passer les props.
 - Rendez ce composant cliquable. Il doit renvoyer à la page individuelle de cette plante.  
 
8. **BONUS** Gérez votre liste de plantes en les filtrant par catégorie :
 - Obtenez toutes les données sur les catégories via un appel à une API. 
 - Affichez le nom de la catégorie dans les options du select
 - Créez une méthode pour filtrer la liste des plantes en fonction de la catégorie sélectionnée


### Project Initialization

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- Run command `npm run setup`
- _NB: To launch the backend server, you'll need an environment file with database credentials. You'll find a template one in `backend/.env.sample`_

### Available Commands

- `setup` : Initialization of frontend and backend, as well as all toolings
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools, and refuses unclean code (will be executed on every _commit_)
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)

## FAQ

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
- _Nodemon_ : Allows to restart the server everytime a .js file is udated
