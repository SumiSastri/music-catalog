## La Boite is a Music app using React & React-Redux

![Music Catalog App](client/src/assets/music-app-home.png)

- Redux lifts state from React class components and moves it as a single state object to the react-redux store
- While redux may not be the best method to handle state, the learning objective is to understand how state works for SPA's both with react class components and with react-redux as a more predictable container for state.

![Music Catalog App Demo](client/src/assets/music-app-demo.gif)

Adapted from Brad Traversy's tutorial Learn The MERN stack on You Tube [https://www.youtube.com/watch?v=5yTazHkDR4o&list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE&index=2&ab_channel=TraversyMedia

## Available scripts

- The package manager is npm - to clone ```npm init -y``` to install dependencies, run this 2 times once in the client-side folder and the second time in the server-side folder.
npm run start-dev - client server:port 3000/ backend-server:port 5000

Fix any outdated packages
- ```npm audit`` Fix manually or use auto
- ```npm update``` Fix with npm update packageName@version a better way to do this is npm install packageName@version
- ```npm uninstall``` @packageName for any packages you do not need as there could be many deprecated dependencies in the package so only use packages that your app really need.

This repo has been updated Dec 2020 (server and client side)

## SCAFFOLDING -server side (Node, Express, Mongoose)
- mkdir inventory-app
 * create a front-end folder (client)
 * create a back-end folder (server)

- npm install -D (as a dev dependency - not needed for production version)
- npm install -g (globally as needed even in production version)

**Express Server** 
npm install -D  express nodemon concurrently(server dependencies)
npm install -D cors dotenv path body-parser helmet express-rate-limiter(server-side security)

**MongoDB**
npm install -g  mongoose mongodb (database dependencies)

## SCAFFOLDING -client side (CRA-React-Redux)

- in the client directory ```npx create-react-app .```
- you can also create the app in the root directory and name the app client ```npx create-react-app client```

**Redux**
- npm install redux react-redux redux-thunk redux-devtools-extension

**External Libraries**
- npm install bootstrap reactstrap uuid react-transition-group
- npm install axios
In ```App.js``` file to include bootstrap add ```import 'bootstrap/dist/css/bootstrap.min.css';```

## Naming conventions
In the src files create frontend (client) and backend (server) folders to separate concerns Folder naming convention - camelCase for files and snake-case-for-folders

## BACKEND FOLDER STRUCTURE
- All files in the server folder
- The ```server.js``` file is the app entry point for the Express server( this can alternatively be called ```index.js``` or ```app.js```)
- Database (db)
- Data Schemas & Data Design Constructors (models)
- Controllers for CRUD routes (api-route-controllers)
- dot-files (configuration - includes ```.env```, ```.eslintrc```, etc.)
- docs-and-guides - documentation and how to guides for this section

## FRONTEND FOLDER STRUCTURE

- in root 
- assets (images, logos, audio, video)
- client-side-data - contains mock-data and the redux-store
- docs-and-guides folder detail each section build with how-to-guides and architectural details
- content pages - all the segmented modules for the app front-end
- common-components-and-containers have the reusable functional & stateful modules for every section
- sections - each section is a self-contained app 

**Redux CARS and section structure**

eg: Music-section:-
__Components-and-containers__

- The start of the redux flow is with components and containers that display the ui and subscribe to ui changes from the end-user. 
- Each component is designed depending on the ui-required by the design-teams.
- These changes connect with the ```connect()``` method to the store
- The changes then are mapped with the ```mapStateToProps()``` 

The folder structure therefore follows the actions the user wants to take 
- add
- delete
- editOrUpdate
- showCard (display one item)
- showList (display a list of items on a page)

__Actions__

Actions define the actions that the end user wants to take in the components or containers displayed - add  (and save) items, update (and save) items, delete (permanently) items. These actions need to be registered, authenticated or validated and then sent to the backend databases via api HTTP requests.

There are only 2 files for the folder:

- action-type string constants to strictly type, serialise and match the constants to the action methods
- actions that consume the back-end apis - these actions are dispatched to the reducers

__Reducers & Root Reducer__

Actions are dispatched to the reducer, there may be several reducers in a section depending on the ui-design.

Using the switch conditional statement, the reducer method takes 2 params, the actions via the string constants that define them and the initial state from the store. The reducer then first returns original state (pristine) with the spread operator, and then executes the actions defined in the string constants.  Each action - add, edit or update, delete, get items to display, loading items - is dealt with in a separate switch statement so that the code can exit performing only the action required at the time.

All these these reducers are combined in the root reducer and sent back to store. Once the new action has been dispatched to the store, state is now no longer pristine but 'touched' by the actions payload. The store subscribes to these changes with the ```getState()``` method, sent to it by the root reducer that combines all the changes and chunks and batches updates to the store.

There are only 2 files for the folder:

- the reducer for the actions in this section 
- the root reducer sent to store

__Store__

There can be only one store, as this is where the data is held in its pristine state, the store is in the client-side data folder.

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

