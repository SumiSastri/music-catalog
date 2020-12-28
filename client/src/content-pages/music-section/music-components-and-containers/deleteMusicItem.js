import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getMusicItems, deleteMusicItem } from '../actions/music-section-actions';

class MusicCatalog extends Component {
	componentDidMount() {
		// the action creator is a prop of musicCatalog - the prop is a method that is imported
		// this abstracts the function
		this.props.getMusicItems();
	}
	handleDelete = (id) => {
		this.props.deleteMusicItem(id);
	};
	render() {
		// this.props.musicItems.musicItemsArray
		// the musicItems is the entire state object where is this coming from?
		// the musicItemsArray is the reducer local state array of data

		const { musicItemsArray } = this.props.musicItems;
		console.log(`render musicCatalog:`, musicItemsArray);

		return (
			<Container>
				<ListGroup>
					<TransitionGroup class-name="music-catalog">
						{musicItemsArray.map(({ _id, name }) => (
							<CSSTransition key={_id} timeout={500} classNames="fade">
								<ListGroupItem>
									<Button
										className="remove-button"
										color="danger"
										size="md"
										height="20px"
										onClick={this.handleDelete.bind(this, _id)}
									>
										<i className="fas fa-user-minus" />
									</Button>
									{name}
								</ListGroupItem>
							</CSSTransition>
						))}
					</TransitionGroup>
				</ListGroup>
			</Container>
		);
	}
}

MusicCatalog.propTypes = {
	// this is from the action creator (this.props.getMusicItems) stored as a prop
	getMusicItems: PropTypes.func.isRequired,
	// this is the store state stored as a prop - store sends this to the component
	// component forwards the state tree as a prop to reducer
	musicItems: PropTypes.object.isRequired
};

//why is this returning a null value?
const mapStateToProps = (state) => ({
	musicItems: state.musicItems
});
console.log(`mapStateToProps - MusicCatalog:`, state);

export default connect(mapStateToProps, { getMusicItems, deleteMusicItem })(MusicCatalog);
