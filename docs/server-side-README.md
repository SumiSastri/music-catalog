
## Folder structure
- All files in the server folder

- The ```server.js``` file is the app entry point 

## Dependency list: 

**Express Server** 
$npm install -D  express nodemon concurrently (server dependencies)

$npm install -D cors dotenv path body-parser helmet  express-rate-limiter(server-side security)

**MongoDB**
$npm install -D  mongoose (database dependencies)

**Babel**
$npm install -D babel-cli babel-preset-env babel-core babel-loader babel-preset-stage-0

**Debugger**
In package json
```
		"debug": "DEBUG=express:* nodemon server/server.js --exec babel-node -e js",
``` 
**dotfiles** 

The back-end needs a __dot babelrc__ file with these presets
```
{
  "presets": ["env", "stage-0"]
}
```
A __dot env__ file

I have used a config file - not the most secure, I need to figure out how to improve the saving of secrets server-side

A __dot gitignore__ file - this is what I have used for the repo.

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


__Note__

For the server side set-up I followed Brad-Traversy's set up, but I changed the folder structure so the start-scripts also revised.


[https://www.youtube.com/watch?v=5yTazHkDR4o&ab_channel=TraversyMedia]

Server-side package json (Timestamp 5:00)
```	
"client-install": "npm install --prefix client",
"start-client": "npm start-client --prefix client",
<!-- or -->
"start-client": "cd ../client && npm start",
```

