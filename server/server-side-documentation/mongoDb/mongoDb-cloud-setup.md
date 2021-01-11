### METHOD 2: Keeps database in the cloud

1. Create a MongodB user name and password to use the Mongo cloud [https://account.mongodb.com/account/login] Then login with your user nameand password
2. Go to project, create new project, give project a name, check project owner and click set-up project
3. Prompt to set up cluster choose free shared cluster - clusters are groups of servers that store your data. You need this for each db you set up
4. Choose server (AWS, google cloud or azure) geographic region for the cluster (one close to your region good) and choose the sandbox option for the cluster tier, choose the free forever option for student projects, click create cluster
5. The cluster will be created, it takes a little while for the servers to be configured
6. Once created click on connect to create a new user
7. You will be prompted to add IP address this is to whitelist your IP address so that when you connect your local schemas to the cloud Db they will be linked and connected (save steps 7,8 and 9 somewhere so that you can access them for the project) You need to do this for each DB and save the key for each project

DEBUGGING - 
- If you are on a VPN your IP address will change find your IP and whitelist it again
- If you have lost your password go to the Atlas tab on the left nav is Database access
- Click on edit the data-base and autogenerate a new password
- Click update - now save the new password and use this in the repo

8. Create your user name for the database 
9. Auto-generate a password, click show and save the password or create a pasword you remember if you fail to save this password go to database access, edit and auto-generate a new password.
10. Once you have saved all of the information you may require later, click add user (if you forget to do this delete your cluster and start again)
11. choose a connection method - option 3 - using compass

Option 2: gives you this code snippet which you can check against your express server to debug
```
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://music-app-user:<password>@cluster0.slip5.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
```
Option 1: Should be followed for local set-up not cloud set-up

12. Get a connection string or URI
    `mongodb+srv://<username>:<password>@cluster0.slip5.mongodb.net/test`
    Replace `<username>` and `<password>` with the password and username you have stored in steps 8 and 9 (Save this string as well - make sure you have taken out the placeholder greater and less than signs around the username and password these are just placeholders)
13. Should you lose your place on the MongoCloud got back to click connect
14. Now go back to your server to connect the local app to the db - check the mongo-and-express folder for details

