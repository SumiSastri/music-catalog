## La Boite is a Music app using React & React-Redux

The learning objectives of this repo is to get my head around the React library eco-system, specifically the React-React library and state management on the front-end.

Server side, I wanted to connect authenticated routes with bcrypt and JSON webtokens and see how this connected front-end with the flux-flow. I also used server-side security libraries - rate-limit and helment to protect headers and limit 

The folder structure has changed as I experimented with the best way to organise the flux-flow. This continues to be work-in-progess as I am levelling-up my full-stack skills.

Ideally I would like to refactor the front-end to include TypeScript and testing with Jest and Enzyme.

I also experimented with various CSS frameworks -  with ReactStrap (specifically for modals), Styled Components and Vanilla CSS.

 Repo documentation[./docs], each section also has a readme.

## Available scripts

1. To clone 
```https://github.com/SumiSastri/music-catalog.git```

2. Package manager - npm and initialize both client and server side folders ($cd client $cd server)

```npm init -y``` 

3.   Fix outdated packages This repo has been updated Jan 2021 with ```npm audit fix``` 

- ```npm audit``` Fix manually or use auto
- ```npm update``` Fix with npm update packageName@version a better way to do this is npm install packageName@version
- ```npm uninstall``` @packageName for any packages you do not need as there could be many deprecated dependencies in the package so only use packages that your app really need.

4. For server side scripts 
$cd server
$npm run start-dev (for concurrent running of both client and server)
$npm run start-server
$npm run nodemon-server (for watch mode)
$npm run start-client 

Server-side package json.

```	
"scripts": {
		"start-client": "cd ../client && npm start",
		"start-dev": "concurrently \"npm run start-server\" \"npm run start-client\"",
		"start-server": "node server.js",
		"nodemon-server": "nodemon server.js --exec babel-node --presets babel-preset-env",
		"debug": "DEBUG=express:* nodemon server/server.js --exec babel-node -e js",
		"test": "DEBUG=* nodemon server/server.js --exec babel-node -e js"
	},
```
