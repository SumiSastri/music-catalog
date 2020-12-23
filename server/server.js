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

const musicInventoryRoute = require('./routes/inventoryRoute.js');

// middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

const rateLimter = new rateLimit({
	windowsMs: 15 * 60 * 1000,
	max: 100,
	delayMs: 0
});
app.use('/music-inventory-api', musicInventoryRoute);

app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

app.get('/', (req, res) => {
	res.send('app home route working');
});

mongoose.connect(
	db,
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

// mongoose.connect(db).then(() => console.log('db connected'));

app.listen(5000, () => console.log(`app server connected on port ${port}`));
