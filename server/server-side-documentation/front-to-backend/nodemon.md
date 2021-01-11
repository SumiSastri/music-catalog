```npm install -D nodemon``` watches changes server side - while node on its own obliges you to refresh the server with each update

```
  "scripts": {
    "client-install": "npm install --prefix client",
    <!-- for production -->
    "start": "node server/server.js",
    <!-- for development this disappears with a build -->
    "start-server": "nodemon server/server.js",
    "start-client": "npm start --prefix client",
    "start-dev": "concurrently \"npm run start-server\" \"npm run start-client\""
  },
  ```