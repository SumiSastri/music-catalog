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

// user routes
const authRegRoute = require('../server/api-route-controllers/auth-user-routes/reg-users/authRegUser');
const authLoginRoute = require('../server/api-route-controllers/auth-user-routes/logged-in-users/authLoginUser');
// content routes
const musicApiRoute = require('../server/api-route-controllers/musicApiRoute');
const blogsApiRoute = require('../server/api-route-controllers/blogsApiRoute');

// middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
const rateLimiter = new rateLimit({
	windowsMs: 15 * 60 * 1000,
	max: 100,
	delayMs: 0
});
app.use('/registration-api', authRegRoute);
app.use('/login-api', authLoginRoute);
app.use('/music-api', musicApiRoute);
app.use('/blogs-api', blogsApiRoute);
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

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
