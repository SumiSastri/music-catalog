### Using CLI to populate MongoDB

show dbs [show databases]
db [check which db you are in]
db.drop nameOfDb [delete a db created]

use nameOfDb [switch to database created 
eg. ```use products-db```] 

db.CreateCollection('nameOfCollection') [create a collection of documents
eg. ```db.CreateCollection('products')```]

show collections [shows all collections of documents in db]
db.nameOfCollection.insert({}) [insert data/documents/rows]

```
db.products.insert({
service: "New Co Ltd",
products:"Small Wongle",
price: 5,
tags:["uk", "eu", "usa"],
user: {
	name:"Jack Ma",
	email:'jack@ma.com'
},
date:Date()
})
```

db.nameOfCollection.insertMany([{}]) [insert multiple documents as an array of objects]

```
db.products.insertMany([
{
service: "Old Co Ltd",
products:"Small Wongle",
price: 3,
tags:["uk", "eu", "usa"],
user: {
	name:"Jack Ma",
	email:'jack@ma.com'
},
date:Date()
},

{
service: "Old Co Ltd",
products:"Medium Wongle",
price: 10,
tags:["uk", "eu", "usa"],
user: {
	name:"Joe May",
	email:'joe@may.com'
},
date:Date()
},

{
service: "New Co Ltd",
products:"Medium Wongle",
price: 12,
tags:["uk", "eu", "usa"],
user: {
	name:"Jamila Manzoor",
	email:'jamila@manzoor.com'
},
date:Date()
},

{
service: "New Co Ltd",
products:"Large Wongle",
price: 15,
tags:["uk", "eu", "usa"],
user: {
	name:"Jayanthi Maniranthnam",
	email:'jaya@manirathnam.com'
},
date:Date()
}

])
```

db.nameOfCollection.find().pretty() [see the whole collection in a readable format eg. ```db.products.find().pretty()```]
db.nameOfCollection.find({key: "value"}).pretty() [see a particular part of the data entry eg. ```db.products.find({products: "Small Wongle"}).pretty()``` ]
db.nameOfCollection.find().sort({key:-1}).pretty() [sort in descending order eg. ```db.products.find().sort({price: -1}).pretty()```]
db.nameOfCollection.find().sort({key:1}).pretty() [sort in ascending order]
db.nameOfCollection.update() 
db.nameOfCollection.remove()
