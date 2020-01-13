import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '/';

const initialState = {};
const middleware = [ thunk ];

const store = createStore(
	rootReducer,
	initialState,
	compose(applyMiddleware(...middleware), window.__REDUX__DEVTOOLS__EXTENSION__ && Window__REDUX__DEVTOOLS__EXTENSION)
);

export default store;
