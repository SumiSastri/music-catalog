import { combineReducers } from 'redux';
import musicItemRootReducer from '../music-section/reducers/musicItemRootReducer';
import shopRootReducer from '../shop-section/shop-reducers/shopRootReducer';

export default combineReducers({
	musicItem: musicItemRootReducer,
	counterOne: shopRootReducer
});
