
### What is MongoDb 

MongoDb is a NoSQL Db
Install MongoDB in your terminal globally
Pre-install check - to see if you already have it installed

type mongo --version in terminal for version output if you have it installed [MongoDB shell version v4.2.1]

## Install mongoDB with Homebrew

MongoDb is a non-relational (noSQL) database. Install it with Homebrew with a Mac.

``` sh
brew install mongodb
```
or 

```
$ brew tap mongodb/brew
```

Documentation for troubleshooting[https://github.com/mongodb/homebrew-brew]

The program is saved by default in the file path /usr/local/var/mongodb
Run the following command to ensure you have a place for mongo to store the data for your databases:

this worked with mojave -  with catalina - options are step 2 if step 1 does not work

``` sh
sudo mkdir -p /data/db && sudo chown -R $sumisastri/data/db

sudo mongod --dbpath /users/sumisastri/data/db
sudokill mongod --dbpath /users/sumisastri/data/db
```
To check everything is working type `mongod` in the terminal. It will print a lot of stuff on the screen. After a few moments you should see this line at the bottom:

```
I NETWORK [thread1] waiting for connections on port 27017
```

Hit <kbd>ctrl</kbd> + <kbd>C</kbd> to stop the process running and quit the terminal.

Catalina stack overflow guidance [https://stackoverflow.com/questions/47975929/socketexception-address-already-in-use-mongodb]
<br>


### Good Resources

https://docs.mongodb.com/manual/core/data-model-operations/

* MongoDB Cheatsheet [https://blog.codecentric.de/files/2012/12/MongoDB-CheatSheet-v1_0.pdf]
* The MongoDB Tutorials [https://www.hacksparrow.com/databases/mongodb/tutorial.html]
[https://www.youtube.com/watch?v=j59qQ7YWLxw]











It's a non-relational (noSQL) database. Install the community version the steps recommend installing it with Homebrew If you get stuck documentation [https://www.mongodb.com/download-center/community]

Install it with Homebrew:

`brew install mongodb`

Go to terminal and type mongo --version to ensure that it in installed.