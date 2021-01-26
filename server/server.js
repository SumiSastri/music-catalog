const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// site security
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('config');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

// import routes from controllers
const musicInventoryRoute = require('../server/api-route-controllers/musicInventoryRoute');
const usersRoute = require('../server/api-route-controllers/usersRoute');
const authUserRoutes = require('../server/api-route-controllers/private-routes/authUsers');

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
app.use('/users-api', usersRoute);
app.use('/login/users-api', authUserRoutes);

app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

app.get('/', (req, res) => {
	res.send('app home route working');
});

const db = config.get('mongoURI');

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

app.listen(5000, () => console.log(`app server connected on port ${port}`));
