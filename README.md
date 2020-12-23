La Boite is a Music app using React & React-Redux

![Music Catalog App](client/src/assets/music-app-home.png)

- Redux lifts state from React class components and moves it as a single state object to the react-redux store
- While redux may not be the best method to handle state, the learning objective is to understand how state works for SPA's both with react class components and with react-redux as a more predictable container for state.


![Music Catalog App Demo](client/src/assets/music-app-demo.gif)

## Available scripts

- The package manager is npm - to clone ```npm init -y``` to install dependencies
npm run start-dev - client server:port 3000/ backend-server:port 5000

## SCAFFOLDING -server side (Node, Express, Mongoose)
- mkdir inventory-app
- npm init -y 
 create a back-end folder (server)

- npm install -D (as a dev dependency - not needed for production version)
- npm install -g (globally as needed even in production version)

**Express Server** 
npm install -D  nodemon express cors dotenv path body-parser concurrently(server dependencies)
**MongoDB**
npm install -g  mongoose mongodb (database dependencies)

## SCAFFOLDING -client side (CRA-React-Redux)
- mkdir client
- in the client directory ```npx create-react-app```

**Redux**
- npm install redux react-redux redux-thunk redux-devtools-extension

**External Libraries**
- npm install react-transition-group uuid reactstrap
- npm install axios

## Naming conventions
In the src files create frontend (client) and backend (server) folders to separate concerns Folder naming convention - camelCase for files and snake-case-for-folders

## BACKEND FOLDER STRUCTURE
- The server.js file is for the Express server
- Database (db)
- Data Schemas & Data Design Constructors (models)
- Controllers for CRUD routes (routes)
- Configuration (config)
- docs-and-guides folder detail each section build with how-to-guides and architectural details

## FRONTEND FOLDER STRUCTURE
- folder structure -CARS (components & containers/actions/reducers/store)
- Components - common (reusable presentational components)
- Containers - stateful
- Actions & ActionTypes
- Reducers & Root Reducer
- Store
- docs-and-guides folder detail each section build with how-to-guides and architectural details

## VERSION CONTROL
Set up github repo and link local version

- git add .
- git commit -m'initial commit'
- git remote add origin - ssh key
- git push -u origin master
- Check out of master and create branches [git checkout -b branch-name]
- Set up first branch as development if you do not want to merge to master until deploy
- Set up next branch as debugging so that you can debug your code in this if you want to push to dev
- Check out of master and work from develop 
- Pull and push changes  to develop if you move to debugging branch for fixes and if working on multiple branches at the same time
