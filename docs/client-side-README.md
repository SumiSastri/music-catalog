## Folder structure
- All files in the client folder

- ```index.js``` file is the app entry point 

## Dependency list: 

**React (CRA)**
- in the client directory ```npx create-react-app .```
- you can also create the app in the root directory and name the app client ```npx create-react-app client```

**React-Router**
- npm install -D react-router-dom

**React-Redux**
- npm install -D redux react-redux 

**Middleware**
- npm install -D redux-thunk redux-devtools-extension 
- npm install -D axios (http runner)

**Random id generator**
- npm install -D   uuid

**CSS**
- npm install bootstrap react strap  react-transition-group

In ```App.js``` file to include bootstrap add ```import 'bootstrap/dist/css/bootstrap.min.css';```

__Proxy server - package JSON client__

```
	"proxy": "http://localhost:5000",
	"eslintConfig": {
		"extends": "react-app"
	},
```

## Debugging tools:

- Download the redux dev tools extension in chrome to debug as well as visualise state