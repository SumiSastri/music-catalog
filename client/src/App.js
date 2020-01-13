// libraries
import React from 'react';
import { Provider } from 'redux-redux';
// files
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import store from 'client/src/redux/store.js';
import AppNavbar from './components/stateful/navbar.js';
import MusicCatalog from './components/stateful/musicCatalog.js';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<AppNavbar />
				<MusicCatalog />
			</div>
		</Provider>
	);
}

export default App;
