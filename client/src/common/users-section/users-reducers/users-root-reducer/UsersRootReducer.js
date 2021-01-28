import { combineReducers } from 'redux';
import authUserReducers from './AuthUserReducers';
import authUserErrorsReducers from './AuthUserErrorsReducers';

export default combineReducers({
	users: authUserReducers,
	errors: authUserErrorsReducers
});
