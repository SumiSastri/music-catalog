const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');
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

app.get('/', (req, res) => {
	res.send('app home route working');
});

mongoose.connect(
	'',
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

app.listen(5000, () => console.log(`app server connected on port ${port}`));
