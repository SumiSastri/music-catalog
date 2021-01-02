import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';
// Provider shares state across all components
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';

import AppNavbar from '../src/content-pages/common-components-and-containers/navs/navbar';
import ItemModal from '../src/content-pages/music-section/music-components-and-containers//addMusicItem';
import store from '../src/client-side-data/redux-store/store';
import ToDoIndexPage from '../src/content-pages/toDos-section/toDos-components-containers/ToDoIndexPage';
import ToDosHome from '../src/content-pages/toDos-section/toDos-components-containers/ToDosHome';
import BlogsIndexPage from '../src/content-pages/blogs-section/blog-containers-components/BlogsIndexPage';
// import BlogHome from './content-pages/blogs-section/blog-containers-components/BlogsHome';
import ShopIndexPage from '../src/content-pages/shop-section/shop-components-containers/ShopIndexPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Switch>
						<Fragment>
							<div className="App">
								<AppNavbar />
								<Container style={{ marginTop: '2rem' }}>
									<ItemModal />
									<BlogsIndexPage />
									{/* <BlogHome /> */}
									<ShopIndexPage />
									<ToDoIndexPage />
									<ToDosHome />
								</Container>
							</div>
						</Fragment>
					</Switch>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
