const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
	const bearerToken = req.header('x-auth-token');

	// check for bearer token - 401 unauthorised
	if (!bearerToken) res.status(401).json({ msg: 'Authorisation token required' });

	try {
		// try to match token and verify or catch errors
		const decodeBearerToken = jwt.verify(bearerToken, config.get('jwtSecret'));

		// Add user identified by id in payload ensure decoded token matches
		req.user = decodedBearer.Token;
		next();
	} catch (err) {
		res.status(400).json({ msg: 'Bad request, token not valid' });
	}
}

module.exports = auth;
// export this module and use as second param to authorise in routes
