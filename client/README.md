Full stack app with the MERN (mongoDb-Express-React-Node) stack

## SCAFFOLDING
- mkdir inventory-app
- npm init (set-up your own webpack) OR
- npm init
- npm install mongoose express
- npm install -D nodemon (as a dev dependency - not needed for production version)
- npm install cors path dotenv concurrently

## SEPARATION OF CONCERNS
In the src files create frontend (client-side) and backend (server-side) folders to separate concerns Folder naming convention - camel case

## BACKEND FOLDER STRUCTURE
- The server.js file is for the Express server
- Database (db)
- Data Schemas & Data Design Constructors (models)
- Controllers for CRUD routes (routes)
- Configuration (config)

## FRONTEND FOLDER STRUCTURE
- create a front-end folder
- npx create-react-app client
- this creates the client side node modules, git-igore package-lock-json src and public files/folders
- in the client-side package-json files add your proxy local host under the eject scripts
- in the server-side package-json files add scripts to run the client and server side

```
"scripts": {
		"client-install": "npm install --prefix client",
		"start-server": "nodemon server/server.js",
		"start-client": "npm start --prefix client"
```        
- npm install bootstrap react strap uuid react-transition-group

## VERSION CONTROL
Set up github repo and link local version

- git add .
- git commit -m'initial commit'
- git remote add origin - ssh key
- git push -u origin master
- Check out of master and create branches [git checkout -b branch-name]
- Check out of branch to master and merge branch to master

### Branch 1 server-set-up (Express server)
Go to package json and set up nodemon to and start-server script "start-server": "nodemon <server relative path>"
Code server and npm run start-server check connection
```
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

require('dotenv/config');

app.use(cors());
app.use(express.json());

app.listen(3000, () => console.log(`app server connected on port ${port}`));
```
- push changes to the branch origin
- git push --set-upstream origin server-set-up
- check out of branch [git checkout master]
- merge branch to master [git merger server-set-up]
-  push to origin master and set up new branch

### Branch 2 mongodb-set-up (cloud-based mongoDB)
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
username:password - remove <> which are placeholders

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
### Branch 3 crud-routes (set-up routes and check with Postman)
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