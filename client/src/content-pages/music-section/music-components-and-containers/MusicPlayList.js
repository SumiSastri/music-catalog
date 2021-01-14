import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getMusicItems, deleteMusicItem } from '../actions/music-section-actions';
import ErrorBoundary from '../../common-components-and-containers/error-boundary/ErrorBoundary';

class MusicPlayList extends Component {
	componentDidMount() {
		this.props.getMusicItems();
		console.log(this.props);
	}
	handleDelete = (id) => {
		this.props.deleteMusicItem(id);
	};
	render() {
		// expect(state).toEqual({musicItem:{musicItem:{musicItems:[{id:
		const { musicItems } = this.props;
		// state tree coming back as null why?
		console.log(musicItems);
		const playList = musicItems.length ? (
			musicItems.map(({ _id, name }) => {
				return (
					<Container>
						<ErrorBoundary>
							<ListGroup>
								<TransitionGroup class-name="music-play-list">
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
								</TransitionGroup>
							</ListGroup>
						</ErrorBoundary>
					</Container>
				);
			})
		) : (
			<div className="center">No songs in your playlist</div>
		);

		return <div>{playList}</div>;
	}
}

MusicPlayList.propTypes = {
	getMusicItems: PropTypes.func.isRequired,
	musicItem: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	musicItem: state.musicItem
});

export default connect(mapStateToProps, { getMusicItems, deleteMusicItem })(MusicPlayList);
