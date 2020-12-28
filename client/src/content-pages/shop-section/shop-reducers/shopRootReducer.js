import { combineReducers } from 'redux';
import counterOneReducer from './shopCounterReducers';

export default combineReducers({
	counterOne: counterOneReducer
});
