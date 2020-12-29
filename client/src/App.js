import React, { Component } from 'react';
import { Container } from 'reactstrap';
// Provider shares state across all components
import { Provider } from 'react-redux';

import AppNavbar from '../src/content-pages/common-components-and-containers/navs/navbar';
// import MusicCatalog from '../src/content-pages/music-section/music-components-and-containers/deleteMusicItem';
import ItemModal from '../src/content-pages/music-section/music-components-and-containers//addMusicItem';
import store from '../src/client-side-data/redux-store/store';
import ToDoIndexPage from '../src/content-pages/toDos-section/toDos-components-containers/toDoIndexPage';
import BlogsIndexPage from '../src/content-pages/blogs-section/blog-containers-components/BlogsIndexPage';
import ShopIndexPage from '../src/content-pages/shop-section/shop-components-containers/ShopIndexPage';

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
						<BlogsIndexPage />
						{/* <MusicCatalog /> */}
						<ShopIndexPage />
						<ToDoIndexPage />
					</Container>
				</div>
			</Provider>
		);
	}
}

export default App;
