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

### I want a new plant!
It's time to grow your collection.
1. You will find a form already in place on the


https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80

https://images.unsplash.com/photo-1459156212016-c812468e2115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80

https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80

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
