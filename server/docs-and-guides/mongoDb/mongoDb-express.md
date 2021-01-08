Step 1:
Install mongoDb locally(mongDb-installation)

Step2:
Choose where you want to set-up your db (on your local machine or in the cloud)
Then set up the connection to your project (mongoDb-cloud-setup or mongoDb-local-setup)

Step3:
Configure your dotenv environment to store your username and password (mongoDb-dotenv)

Step4:
Now you can configure your express server

Test the connection manually

```
const db=`uri with user name and password from collection`
mongoose.connect(db).then(() => console.log('db connected'));
```
Step 4:
Connect the ```.env``` files to Express

Now set up the proper configuration

```
mongoose.connect(
	'process.env.DB_CONNECTION',
	{
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true
	},
	(error) => {
		if (!error) {
			console.log('mongo-db connection working');
		} else {
			console.log('check mongo-db connection');
		}
	}
);
mongoose.Promise = global.Promise;
```


mongoose.connect(
	'process.env.DB_CONNECTION',
	{
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true
	},
	() => {
		console.log('connected to mongoDb');
	}
);