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
