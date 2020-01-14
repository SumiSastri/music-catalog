import React, { Component } from 'react';
import AppNavbar from './components/stateful/navbar';
import MusicCatalog from './components/stateful/musicCatalog';
// Provider shares state across all components
import { Provider } from 'react-redux';
import store from './redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<AppNavbar />
					<MusicCatalog />
				</div>
			</Provider>
		);
	}
}

export default App;
