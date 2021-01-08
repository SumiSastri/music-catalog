import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

// Redux Provider HoC shares state of the store across all components as a prop
import { Provider } from 'react-redux';
import store from '../src/client-side-data/redux-store/store';

import AppNavBar from './content-pages/common-components-and-containers/navs/AppNavBar';
import MusicPlayListHome from '../src/content-pages/music-section/music-components-and-containers/MusicPlayListHome';
import ToDoIndexPage from '../src/content-pages/toDos-section/toDos-components-containers/toDoIndexPage';
import ToDosHome from '../src/content-pages/toDos-section/toDos-components-containers/ToDosHome';
import BlogsIndexPage from '../src/content-pages/blogs-section/blog-containers-components/BlogsIndexPage';
import BlogsHome from './content-pages/blogs-section/blog-containers-components/BlogsHome';
import BlogCard from './content-pages/blogs-section/blog-containers-components/BlogCard';
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
								<Container>
									<div className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid">
										{/* <Route exact path="/" component={AppNavBar} /> */}
										<AppNavBar />
									</div>
								</Container>
								<MusicPlayListHome />
								<Route path="/hip-hop-playlist" component={MusicPlayListHome} />
								<ShopIndexPage />
								<BlogsIndexPage />
								<Route path="/hip-hop-blogs" component={BlogsHome} />
								<Route path="/:blogs_id" component={BlogCard} />
								<ToDoIndexPage />
								<Route path="/hip-hop-organiser" component={ToDosHome} />
							</div>
						</Fragment>
					</Switch>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
