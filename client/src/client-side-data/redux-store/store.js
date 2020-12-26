import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../../content-pages/music-section/reducers/musicSectionRootReducer';

const initialState = {};
const middleware = [ thunk ];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
console.log(store);
store.subscribe(() => console.log(store.getState()));

export default store;
