### Branch 2 crud-routes (set-up routes and check with Postman)

https://www.tutorialkart.com/nodejs/express-js-tutorial/ (Tutorial Cart)
- Plan your data schema and set it up with a constructor - new mongoose.Schema export the module schema for the server-side controllers or routes you will set up for the CRUD actions (create-read-update-delete).
- First create the routes in server.js and test them

```
app.get('/', (req, res) => {
	res.send('app home route working');
});

router.get('/', (req, res) => {
	res.send('music-inventory-api route working');
});
```

- Then move the get route its own folder
- Create a routes folder with an express router object
- Now instead of ```app.get()```/ you use ```router.get()```

```
router.get('/', (req, res) => {
	res.send('music-inventory-api route working');
});
```
- import the libraries you need in your routes folder and the data schema in a variable
- now code your CRUD routes and check they work in Postman and that the data persists in the mongodb database
- to test your routes you also need to modify the server.js file
- although Express now has body-parser baked in, I found that I need to add body-parser to get the body to be converted into JSON
- the placement of the middleware is important to use the server-side routes you have set up
- the server should now look like this with body-parser imported and the route file path imported.

```
const bodyParser = require('body-parser');

const musicInventoryRoute = require('./routes/inventoryRoute.js');

app.use(cors());
app.use(express.json());

app.use('/music-inventory-api', musicInventoryRoute);

app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
```


https://www.terlici.com/2014/09/29/express-router.html(Blog)

My github link on Express Router[https://github.com/SumiSastri/node.js-and-server-side-javascript/tree/master/nodeJs-and-express]

My github link on how routing works[https://github.com/SumiSastri/node.js-and-server-side-javascript/blob/master/nodeJs-and-express/express/express-app/server/routes/routesDemo.js]