import { combineReducers } from 'redux';
import itemReducer from '../reducers/itemReducer';

export default combineReducers({
	item: itemReducer
});

// OR
// const allReducers = combineReducers({
// 	item: itemReducer
// });
// export default allReducers
