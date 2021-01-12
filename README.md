## La Boite is a Music app using React & React-Redux

## Available scripts

- The package manager is npm 

1. To clone ```https://github.com/SumiSastri/music-catalog.git```
2. To install package manager - npm and initialise 

cd into client and server 

```npm init -y``` 

in both folders

3.   Fix any outdated packages
- ```npm audit`` Fix manually or use auto
- ```npm update``` Fix with npm update packageName@version a better way to do this is npm install packageName@version
- ```npm uninstall``` @packageName for any packages you do not need as there could be many deprecated dependencies in the package so only use packages that your app really need.

This repo has been updated Dec 2020 (server and client side)

4.  Run ```npm run start-dev``` opens both the client and server concurrently.  client server:port 3000/ backend-server:port 5000

to install dependencies, run this 2 times once in the client-side folder and the second time in the server-side folder.
npm run start-dev -

5. Install dependencies and add dot gitigore for both server and client side folders

- npm install -D (as a dev dependency - not needed for production version)
- npm install -g (globally as needed even in production version)

**Express Server** 
npm install -D  express nodemon concurrently(server dependencies)
npm install -D cors dotenv path body-parser helmet express-rate-limiter(server-side security)

**MongoDB**
npm install -D  mongoose mongodb (database dependencies)

**Babel**
npm install --save-dev babel-cli babel-preset-env babel-preset-stage-0

**Package JSON server side**
```
  "scripts": {
    "client-install": "npm install --prefix client",
    "start": "node server/server.js",
    "start-server": "nodemon server/server.js",
    "start-client": "npm start --prefix client",
    "start-dev": "concurrently \"npm run start-server\" \"npm run start-client\""
  },
 ```  
 .gitignore - needs to be added server side
 
 ```
 # See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local
.env

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```
 
**client side (CRA)**

- in the client directory ```npx create-react-app .```
- you can also create the app in the root directory and name the app client ```npx create-react-app client```

**Redux**
- npm install redux react-redux redux-thunk redux-devtools-extension

**External Libraries**
- npm install bootstrap reactstrap uuid react-transition-group
- npm install axios
In ```App.js``` file to include bootstrap add ```import 'bootstrap/dist/css/bootstrap.min.css';```

__Package JSON client__

```
"scripts": {
		"start": "react-scripts start",
		"build": "react-scripts build",
		"test": "react-scripts test",
		"eject": "react-scripts eject"
	},
	"proxy": "http://localhost:5000",
	"eslintConfig": {
		"extends": "react-app"
	},
```

## Naming conventions
In the src files create frontend (client) and backend (server) folders to separate concerns Folder naming convention - camelCase for files and snake-case-for-folders


Note:

As data has been set up server-side use the mock-data folder where seeds will be included
