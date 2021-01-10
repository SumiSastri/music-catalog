const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
// site security
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

// API-controllers
const musicInventoryRoute = require('./api-route-controllers/musicInventoryRoute.js');
const blogApiRoute = require('./api-route-controllers/blogApiRoute.js');

// middleware to call the methods of the library on the server
app.use(helmet());
app.use(cors());
app.use(express.json());

const rateLimter = new rateLimit({
	windowsMs: 15 * 60 * 1000,
	max: 100,
	delayMs: 0
});

// routes
app.use('/music-inventory-api', musicInventoryRoute);
app.use('/blog-api', blogApiRoute);

// parsing JSON from HTTP request headers
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

app.get('/', (req, res) => {
	res.send('app home route working');
});

// connect with mongoose to mongoDb Cloud
mongoose.connect(
	'dB',
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
