import React, { Component } from 'react';
import { Container } from 'reactstrap';
// Provider shares state across all components
import { Provider } from 'react-redux';

import AppNavbar from '../src/content-pages/common-components-and-containers/navs/navbar';
import MusicCatalog from '../src/content-pages/music-section/music-components-and-containers/deleteMusicItem';
import ItemModal from '../src/content-pages/music-section/music-components-and-containers//addMusicItem';
import store from '../src/client-side-data/redux-store/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<AppNavbar />
					<Container style={{ marginTop: '2rem' }}>
						<ItemModal />
						<MusicCatalog />
					</Container>
				</div>
			</Provider>
		);
	}
}

export default App;
