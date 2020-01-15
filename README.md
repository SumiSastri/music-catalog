Full stack app with the MERN (mongoDb-Express-React-Node) stack

## SCAFFOLDING -server side
- mkdir inventory-app
- npm init
 create a back-end folder (server)
- npm install mongoose express
- npm install -D nodemon (as a dev dependency - not needed for production version)
- npm install cors path dotenv concurrently

## SCAFFOLDING -client side
- mkdir client
- in the client directory npx create-react-app
- npm install redux react-redux redux-thunk redux-devtools-extension
- npm install react-transition-group uuid reactstrap
- check front end package json for dependencies set up proxy for backend server as client runs on 3000

## SEPARATION OF CONCERNS
In the src files create frontend (client) and backend (server) folders to separate concerns Folder naming convention - camel case

## BACKEND FOLDER STRUCTURE
- The server.js file is for the Express server
- Database (db)
- Data Schemas & Data Design Constructors (models)
- Controllers for CRUD routes (routes)
- Configuration (config)

## FRONTEND FOLDER STRUCTURE
- create your folder for components and split into presentational and stateful
- create redux folders for store, actions and reducers in src folder (not react components)

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

### Master (Express server set-up)
Go to package json and set up nodemon to and start-server script "start-server": "nodemon <server relative path>"
Code server and npm run start-server check connection
```
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

require('dotenv/config');

app.use(cors());
app.use(express.json());

app.listen(5000, () => console.log(`app server connected on port ${port}`));
```
- push changes to the branch origin
- git push --set-upstream origin server-set-up
- check out of branch [git checkout master]
- merge branch to master [git merger server-set-up]
- push to origin master and set up new branch

### Branch 1 mongodb-set-up (cloud-based mongoDB)
- Login to mongoDB/ Create a db cluster [inventory-app]
- Connect
- whitelist IP address
- create user name
- auto-generate a password
- choose a connection method - local db or cloud-based db
- Get a connection string or URI - ``` mongodb+srv://user-name:@cluster0-ox7di.mongodb.net/test?retryWrites=true&w=majority]```
- set up ORM mongoose to connect Express server to mongoDb cloud
- Manually test the db is connected

```
       mongoose.connect(
   'mongodb+srv://user-name:<auto-generated-password-pasted-here>@cluster0-ox7di.mongodb.net/test?retryWrites=true&w=majority',
   {
   	useNewUrlParser: true,
   	useCreateIndex: true,
   	useUnifiedTopology: true
   },
   (error) => {
   	if (!error) {
   		console.log('mongo-db connection working');
   	} else {
   		console.log('check mongo-db connection');
   	}
   }
);
mongoose.Promise = global.Promise;
```

- Check that files are not included
- To stop tracking a file that is currently tracked, use git rm --cached
set up .env files and ensure they are in gitignore files [ https://help.github.com/en/github/using-git/ignoring-files] / [https://git-scm.com/docs/gitignore]
username:password - remove ```<>``` which are placeholders

```
        require('dotenv/config');

        mongoose.connect(
	'process.env.DB_CONNECTION',
	{
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true
	},
	() => {
		console.log('connected to mongoDb');
	}
);
```
### Branch 2 crud-routes (set-up routes and check with Postman)
- Plan your data schema and set it up with a constructor - new mongoose.Schema export the module schema for the server-side controllers or routes you will set up for the CRUD actions (create-read-update-delete).
- First create the routes in server.js and test them

```
app.get('/', (req, res) => {
	res.send('app home route working');
});

router.get('/', (req, res) => {
	res.send('music-inventory-api route working');
});
```

- Then move the get route its own folder
- Create a routes folder with an express router object
- Now instead of ```app.get()```/ you use ```router.get()```

```
router.get('/', (req, res) => {
	res.send('music-inventory-api route working');
});
```
- import the libraries you need in your routes folder and the data schema in a variable
- now code your CRUD routes and check they work in Postman and that the data persists in the mongodb database
- to test your routes you also need to modify the server.js file
- although Express now has body-parser baked in, I found that I need to add body-parser to get the body to be converted into JSON
- the placement of the middleware is important to use the server-side routes you have set up
- the server should now look like this with body-parser imported and the route file path imported.

```
const bodyParser = require('body-parser');

const musicInventoryRoute = require('./routes/inventoryRoute.js');

app.use(cors());
app.use(express.json());

app.use('/music-inventory-api', musicInventoryRoute);

app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
```
### Branch 3 nav-bar (set-up first front end components)
- Create a front-end folder (client)
- npx create-react-app client
- this creates the client side node modules, git-ignore package-lock-json src and public files/folders
- in the client-side package-json files add your proxy local host under the eject scripts
- in the server-side package-json files add scripts to run the client and server side

```
"scripts": {
		"client-install": "npm install --prefix client",
		"start-server": "nodemon server/server.js",
		"start-client": "npm start --prefix client"
```        
- npm install bootstrap react strap uuid react-transition-group
- start client-side server check rendering properly

- clear down React app css and logos
- set up your hello world root in app.js
- import bootstrap into app.js
- nav-bar is a stateful component because it it holds an open and closed state for the hamburger menu
- code the nav-bar with toggle in state

### Branch 4 music-catalog (stateful component with the music list for catalog)
- set up the component and check that it is rendering in the root app.js
- code the component with state to take the list from the api

### Branch 5 buttons (presentational button components)
- set up the folder and create 4 button components for create, delete, edit and default (submit)
- code the component with state to take the list from the api

### Branch 6 redux (SARCs)
 - Store - create store first (check with redux dev tools that store is set up - import it into app.js with the Provider HOC)
 (Store is set up once)

 - ARCs is repeated with every new action
 - Actions - set up action types as string constants - set up each individual action required
 - Reducers - combine and reduce actions so that the payload can be dispatched to store 
		- set up root reducer that combines all actions from the individual reducers
		- set up any individual reducers 
		- set up switch cases for each action to correspond to the payload to be dispatched to the store
 - Subscribe to changes from store with mapStateToProps in the Component that requires state changes
	- Call the action function from the component that requires an action
	- Import connect object from react-redux
	- Set up connect - which maps state object to props 
	- Export default the connect object with the map to state  & get items function params to App.js (provider imports the module)
	- Add lifecycle method - ```componentDidMount``` to connect the actions object
	- Change ```this.state``` to ```this.props``` 

### Branch 7 debugging	
    - used for debugging

### Branch 8 redux-delete-item	(ARCs in action)
 - ARCs is repeated with every new action
 - Actions -  set up the type in the types file, set up the delete action with the payload of id in the itemActions file
 - Reducers 
		- set up the delete reducer in a switch case
		- take out the changed state from the stateful component
		- here we want to filter out and remove the rendering of the deleted item
		- move this function therefore to the reducer as state is going to be managed by the store not the component
 - Subscribe the component to the delete reducer change
	- the ```onClick``` function now changes in the component and does not take a state change from the component
	- Connect  has already been imported from react-redux, so we add the deleteItem action to the imports t
	- And to the export of the connect method in the export default that maps state to props  
	- While the lifecycle method - ```componentDidMount``` to connect the read action to the component, delete occurs ```onClick```
	- This now can be refactored, instead of a function inside the jsx tag, we define the function after the lifecycle method and call it in the jsx tag
	- Check the functionality on the redux-dev tools

### Branch 9 modal-component
(presentational Modal)

- Reactstrap has several useful modal templates import what you need for your modal design
- The modal can be set up as a presentational one first
- Set up the modal by importing the jsx tags you want to import for the render method
- To render the modal in the app once it is set up  the export default of the component and import the file into App.js
- Check rendering - Clean up and style to personal preferences



- Change the modal to a stateful one
- Take the functionality of the add button, the uuid out of the music catalog component
- Set state with 2 items - toggle as a boolean (false) this is because the modal remains closed until you click the add button that launches it
- the second item is name which is an empty string 

- (ARCs in action with the stateful modal)
- Actions -  set up the type in the types file, set up the add item action with the payload of the added item
     (these will be imported as action payload files and mapped as props in the modal component to be sent to the reducer)
 - Reducers 
		- set up the add item reducer in a switch case
		- this will return the state of the component when the item has changed and handled the input change in the form
		- It will also return the payload of the action new item and the payload of the updated state
 - Subscribe the modal component to the add item action payload 
		- import connect and connect the addItem action payload as an import and as an export
		- map state to props and define this as a constant
		- set up the functionality of the modal form content
		- handle change/ handle submit/ the open state of the toggle function and the close state post submit
		- add a uuid to the item for the redux store - this will change when we move to getting the data direct from mongodb
		- make sure that the functionality that was in the music catalog component has been successfully transferred to the modal component
	- Check the functionality on the redux-dev tools and on the front end with user inputs

