import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/stateful/navbar.js';
import MusicCatalog from './components/stateful/musicCatalog.js';

function App() {
	return (
		<div className="App">
			<AppNavbar />
			<MusicCatalog />
		</div>
	);
}

export default App;
