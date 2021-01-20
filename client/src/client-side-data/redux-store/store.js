import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from '../../content-pages/app-root-reducer/index';

const initialState = {};
const middleware = [ thunk ];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
// console.log(`store working`, store); keep as debug check
store.subscribe(() => console.log(store.getState()));

export default store;
