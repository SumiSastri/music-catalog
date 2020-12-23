### METHOD 1: Keeps database on your local machine and then connect to the cloud

The program is saved by default in the file path /usr/local/var/mongodb

1. Run the following command to ensure you have a place for mongo to store the data for your databases in a different filepath

```
sudo mkdir -p /data/db
```

The password prompt is for your laptop password

Now make sure you are permissioning the access to the db - this gives you permission to read and write to the directory

```
sudo chown -R $(whoami)/data/db
sudo chown -R $USER /data/db
```

note: whoamI/USER is not a place holder it finds you from your users directory, so check the directory path `/Users/xyz/Documents/` and see if you are the user or sudo make yourself the user

OR

```
sudo chown -R `id -un`/data/db
```

OR

```
sudo mongod --dbpath /Users/your_name_placeholder/data/db

<!-- eg - you can choose a username for read-write-accsss -->

sudo mongod --dbpath /Users/mongoDb/data/db
```

To check everything is working type mongod in the terminal. It will print a lot of stuff on the screen. After a few moments you should see this line at the bottom:

```
I NETWORK [thread1] waiting for connections on port 27017
```

If you get a socket in use error code 100 Catalina update stack overflow guidance
If the socket is already in use

- [https://stackoverflow.com/questions/47975929/socketexception-address-already-in-use-mongodb]
- [https://stackoverflow.com/questions/29813648/failed-to-unlink-socket-file-error-in-mongodb-3-0]
  You may want to remove the temporary socket and then run mongo or mongod as a command

```
sudo rm /tmp/mongodb-27017.sock
```

Here are some Catalina installation challenges - questions answered [https://stackoverflow.com/questions/58283257/mongodb-doesnt-work-on-latest-mac-os10-15] Here is a reddit thread [https://www.reddit.com/r/mongodb/comments/d7takd/macos_x_catalina_105_beta_and_mongo_a_warning/]

Some debugging on permissioning:

- [https://stackoverflow.com/questions/42446931/mongodb-exception-in-initandlisten-20-attempted-to-create-a-lock-file-on-a-rea]

Try running

```
sudo chmod -R a+wxr /data
```

Then

```
$ sudo mongod
```

In terminal Run a `show dbs` and you should see

```
MongoDB Enterprise > show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
MongoDB Enterprise >
```

Now that you have your database up and running you are ready to create your collection, documents and schemas for your databases.

