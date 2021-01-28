import { combineReducers } from 'redux';
// import other reducers if there are any created each reducer is singular as it is exporting one object - the state tree
import { musicItemReducers } from './musicItemReducer';

export default combineReducers({
	// this is the state tree an object not the array (musicItems) which is one of the key-values of the state-tree
	musicItems: musicItemReducers
});
