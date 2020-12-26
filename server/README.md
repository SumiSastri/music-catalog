## BACKEND FOLDER STRUCTURE
- All files in the server folder
- The ```server.js``` file is the app entry point for the Express server( this can alternatively be called ```index.js``` or ```app.js```)
- Database (db)
- Data Schemas & Data Design Constructors (models)
- Controllers for CRUD routes (api-route-controllers)
- dot-files (configuration - includes ```.env```, ```.eslintrc```, etc.)
- docs-and-guides - documentation and how to guides for this section

### Db architecture
- MongoDB has models/ collections and schemas
- Models - represents the collections in the db (user model, product model, etc.)
- Collection - a collection of data/ documents/ fields (represents a single model all the products in the product model)
- Schemas - define the structure of the objects in the collection (the structure of a single product object)

### Use Mongoose to create data architecture
Create a new folder for your models
(Note: Schema is a constructor method therefore Schema uppercase)

```
const mongoose = require('mongoose');

const MusicItemSchema = new mongoose.Schema({
	entryDate: {
		type: Date,
		default: Date.now
	},
	name: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: false
	},
	condition: {
		type: String,
		required: false
	},
	valueInUSD: {
		type: Number,
		required: false,
		default: 0
	},
	actionRequired: {
		type: Boolean,
		required: false
	}
});

module.exports = mongoose.model('MusicItem', MusicItemSchema);
// module.exports = MusicItem = mongoose.model('musicItem', MusicItemSchema);
```

OR

```
const mongoose = require('mongoose');

const Schema = mongoose.Schema

const mongoose = require('mongoose');

const MusicItemSchema = new mongoose.Schema({
	entryDate: {
		type: Date,
		default: Date.now
	},
	name: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: false
	},
	condition: {
		type: String,
		required: false
	},
	valueInUSD: {
		type: Number,
		required: false,
		default: 0
	},
	actionRequired: {
		type: Boolean,
		required: false
	}
});

module.exports = mongoose.model('MusicItem', MusicItemSchema);
// module.exports = MusicItem = mongoose.model('musicItem', MusicItemSchema);
```
You can use the schema creation method and export this schema to the Express server, import the mongoose package into a new file. Assign your schema to a variable and use the ```mongoose.Schema({})``` method.

Export the schema using the common js method ```module.exports``` method and assign this method to the ```mongoose.model(nameOfModel, SchemaToUseName)``` method.

You import the model by its name, store it as a variable and assign the variable to the file path of the schema - ```const nameOfModel = require ('nameOfFilePath')``` into the express server so that you can connect the schema to the route.

MongoDB is running in the background, but we need to explicitly connect to the DB. There are 3 ways to do this. Manual one working


```const mongoose = require('mongoose');``` import the package into the Express server

Online in Mongo-Atlas -  create a database name, whitelist your IP address, create a cluster in the free sandbox option, create a db user name and autogenerate a random password - this is safer and save this connect method in the dotenv file (this is if you want to connect server base)


Mongoose is a midware that connects MongoDB to your server with the mongoose connect method in the Express app, the password and user name of your MongoDB collection are processed through the dotenv files. If you want to connect via the cloud server


```
mongoose.connect('process.env.DB_CONNECTION', { useNewUrlParser: true }, () =>
	console.log('testing mongo-db connection')
);
```

In the dotenv file add the connection
```DB_CONNECTION='mongodb+srv://username:<password>copied text from clipboard online’```

The manual method is easier - connect it to local host

```
const url = 'mongodb://localhost:27017/products-db';
mongoose.connect(url, { useNewUrlParser: true }, (error) => {
	if (!error) {
		console.log('mongo-db connection working');
	} else {
		console.log('check mongo-db connection');
	}
});
```	
