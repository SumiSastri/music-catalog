import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { connect } from 'react-redux';
import { getItems, deleteItem } from '../../actions/itemActions';
import PropTypes from 'prop-types';

// Component subscribes to changes from the store by connecting to store
// imports the actions required for the component to change and render changes
// uses the mapStateToProps method to connect these actions to the store
// replace uuid ids with mongoDb _id
// harmonize back-end and front-end object name-value pairs (itemName to name)

class MusicCatalog extends Component {
	componentDidMount() {
		this.props.getItems();
	}
	handleDelete = (id) => {
		this.props.deleteItem(id);
	};
	render() {
		const { items } = this.props.item;
		return (
			<Container>
				<ListGroup>
					<TransitionGroup class-name="music-catalog">
						{items.map(({ _id, name }) => (
							<CSSTransition key={_id} timeout={500} classNames="fade">
								<ListGroupItem>
									<Button
										className="remove-button"
										color="danger"
										size="md"
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
	getItems: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(MusicCatalog);
