import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

// Redux Provider HoC shares state of the store across all components as a prop
import { Provider } from 'react-redux';
import store from '../src/client-side-data/redux-store/store';

import AppNavBar from './common/navs/AppNavBar';
import MusicPlayListHome from '../src/content-pages/music-section/music-components-and-containers/MusicPlayListHome';
import MusicPlayListIndexPage from '../src/content-pages/music-section/music-components-and-containers/MusicPlayListIndexPage';
import ToDosIndexPage from './content-pages/toDos-section/vanilla-react-redux/toDos-components-containers/ToDosIndexPage';
import ToDosHome from './content-pages/toDos-section/vanilla-react-redux/toDos-components-containers/ToDosHome';
import BlogsIndexPage from '../src/content-pages/blogs-section/blog-containers-components/BlogsIndexPage';
import BlogsHome from './content-pages/blogs-section/blog-containers-components/BlogsHome';
import BlogCard from './content-pages/blogs-section/blog-containers-components/BlogCard';
import ShopIndexPage from '../src/content-pages/shop-section/shop-components-containers/ShopIndexPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Fragment>
						<Provider store={store}>
							<div className="App">
								<Container>
									<div className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid">
										<Route exact path="/" component={AppNavBar} />
									</div>
								</Container>
								<BlogsIndexPage />
								<Route path="/hip-hop-blogs" component={BlogsHome} />
								<Route path="/hip-hop-blogs/:blog_id" component={BlogCard} />
								<ToDosIndexPage />
								<Route path="/hip-hop-organiser" component={ToDosHome} />
								<MusicPlayListIndexPage />
								<Route path="/hip-hop-playlist" component={MusicPlayListHome} />
								<ShopIndexPage />
							</div>
						</Provider>
					</Fragment>
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
