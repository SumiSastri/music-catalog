const config = require('../config/default.json');
const jwt = require('jsonwebtoken');

// use this 'auth-token-verified' in Postman with JWT token to get user
export const authorizeUser = (req, res, next) => {
	const authToken = req.header('auth-token-verified');

	// check for authorisation token - 401 unauthorised
	if (!authToken)
		return res.status(401).json({ msg: 'Auth token required, user is not authorised to access this information' });

	try {
		// try to match token and verify or catch errors
		const decodedAuthToken = jwt.verify(authToken, config.get('jwtSecret'));

		// Add user identified by id in payload ensure decoded token matches
		req.user = decodedAuthToken;
		next();
	} catch (error) {
		res.status(400).json({ msg: 'Bad request, token not valid' });
	}
};

// export this module and use as second param to authorise in routes
