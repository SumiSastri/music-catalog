## La Boite is a Music app using React & React-Redux

## Available scripts

- The package manager is npm 

1. To clone 
```https://github.com/SumiSastri/music-catalog.git```

2. Package manager - npm and initialise both client and server side folders 

```npm init -y``` 

3.   Fix outdated packages This repo has been updated Dec 2020 (server and client side)

- ```npm audit``` Fix manually or use auto
- ```npm update``` Fix with npm update packageName@version a better way to do this is npm install packageName@version
- ```npm uninstall``` @packageName for any packages you do not need as there could be many deprecated dependencies in the package so only use packages that your app really need.

4. Keep server running with ```npm run start```  $cd server
with the client $cd client ```npm run start``` - concurrently removed

5. Install dependencies 

- npm install -D (as a dev dependency - not needed for production version)
- npm install -g (globally as needed even in production version)

**Express Server** 
npm install -D  express nodemon (server dependencies)
npm install -D cors dotenv path body-parser helmet express-rate-limiter(server-side security)

**MongoDB**
npm install -D  mongoose (database dependencies)

**Babel**
npm install --save-dev babel-cli babel-preset-env babel-preset-stage-0
 
**client side (CRA)**

- in the client directory ```npx create-react-app .```
- you can also create the app in the root directory and name the app client ```npx create-react-app client```

**React-Router**
- npm install -D react-router-dom

**Redux**
- npm install -D redux react-redux redux-thunk redux-devtools-extension

**External Libraries**
- npm install bootstrap reactstrap uuid react-transition-group
- npm install axios
In ```App.js``` file to include bootstrap add ```import 'bootstrap/dist/css/bootstrap.min.css';```

__Package JSON client__

```
	"proxy": "http://localhost:5000",
	"eslintConfig": {
		"extends": "react-app"
	},
```
6. If you have used CRA on the client side it will have a gitignore file. In the server folder add dotfiles

.env 
.babelrc
.gitignore 
 
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
 Repo documentation[./docs], each section also has a readme.