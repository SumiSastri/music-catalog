Documentation [https://www.npmjs.com/package/concurrently]

What is it?
Instead of running server and client side commands in separate terminals concurrently is a node package that allows you to watch both server and client side at the same time making full-stack coding easier.

It allows you to run multiple npm commands at the same time with a short set-up in your package json. Dockerisation is another way to set-up front-end and back-end workflows.


To use install globally
```npm install -g concurrently```

Addtional Reading:
Vikas Raj blog[https://dev.to/numtostr/running-react-and-node-js-in-one-shot-with-concurrently-2oac]
Dockerisation vs. concurrently [https://dev.to/numtostr/running-react-and-node-js-in-one-shot-with-docker-3o09]

In this repo, concurrently is set up server-side like so:-


```
"scripts": {
    "client-install": "npm install --prefix client",
    "start": "node server/server.js",
    "start-server": "nodemon server/server.js",
    "start-client": "npm start --prefix client",
    "start-dev": "concurrently \"npm run start-server\" \"npm run start-client\""
  },
  ```

  However, using the concurrently documentation you can customise your set up to your preference.