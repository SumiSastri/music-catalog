// intantiating the express object and its methods
const express = require('express');
// middleware to call the methods of the express library should be right on the top
const app = express();
// setting the environment for the port
const port = process.env.PORT || 5000;
// site security intantiating the libraries
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

// connects the CRUD route controllers to the server
const musicInventoryRoute = require('./api-route-controllers/musicInventoryRoute.js');

// middleware to call the methods of the library on the server
app.use(helmet());
app.use(cors());
app.use(express.json());

const rateLimter = new rateLimit({
	windowsMs: 15 * 60 * 1000,
	max: 100,
	delayMs: 0
});

// routing of the api via a single endpoint - which is in the musicInventoryRoute file
app.use('/music-inventory-api', musicInventoryRoute);

// parsing JSON from HTTP request headers
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

app.get('/', (req, res) => {
	res.send('app home route working');
});

// const dBurl = process.env.DB_CONNECTION;

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
			console.log('log-in to your mongo-account & check connection is enabled');
		}
	}
);
mongoose.Promise = global.Promise;

app.listen(5000, () => console.log(`app server connected on port ${port}`));
