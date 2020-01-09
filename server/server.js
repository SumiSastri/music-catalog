const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');

const musicInventoryRoute = require('./routes/inventoryRoute.js');

app.use(cors());
app.use(express.json());

app.use('/imusic-inventory-api', musicInventoryRoute);

app.get('/', (req, res) => {
	res.send('app home route working');
});

app.get('/music-inventory-api', (req, res) => {
	res.send('music-inventory-api route working');
});

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

app.listen(3000, () => console.log(`app server connected on port ${port}`));
