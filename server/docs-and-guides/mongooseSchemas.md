Documentation[https://mongoosejs.com/docs/guide.html]
Schema Types documentation[https://mongoosejs.com/docs/schematypes.html]

Step1:

Import the library and its methods
```const mongoose = require('mongoose');```
```import mongoose from 'mongoose'``` if you have set up babel in your server-side folder
& then ```const {Schema} = mongoose```

Step2:
Design what data you require to be captured for and from the user

Step3:
Use the ```mongoose.Schema()``` method

```
const MusicItemSchema = new mongoose.Schema({
	entryDate: {
		type: Date,
		default: Date.now
	},
    	type: Boolean,
		required: false
	}
});

```

or with babel to transpile

```const musicItemSchema = new Schema ({})```

4. The schema needs to be exported using the ```mongoose.model``` method that takes 2 params the name of the schema as a string and the variable name that defines the schema

```
module.exports = mongoose.model('MusicItem', MusicItemSchema);
// OR module.exports = MusicItem = mongoose.model('musicItem', MusicItemSchema);
```

5. By default the schema adds an id which is an object NOT a string
Therefore the document id is an instance of the mongoose type of id
```doc._id instanceof mongoose.Types.ObjectId; ```

Further reading:
https://masteringjs.io/tutorials/mongoose/schema
https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-1
https://masteringjs.io/tutorials/mongoose/schematype
https://kb.objectrocket.com/mongo-db/mongoose-schema-types-1418 (This is a simple and useful guide to schema Types)