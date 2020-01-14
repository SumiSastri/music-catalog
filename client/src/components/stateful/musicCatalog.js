import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getItems } from '../../actions/itemActions';
import PropTypes from 'prop-types';

// import createButton from 'client/src/components/presentational/buttons/createButton';

class MusicCatalog extends Component {
	componentDidMount() {
		this.props.getItems();
	}

	render() {
		const { items } = this.props.item;
		return (
			<Container>
				<br />
				<div>
					<Button
						color="primary"
						style={{ marginBotton: '2rem' }}
						onClick={() => {
							const name = prompt('Enter Item');
							if (name) {
								this.setState((state) => ({
									items: [ ...state.items, { id: uuid(), name } ]
								}));
							}
						}}
					>
						Add Record
					</Button>
				</div>
				<br />
				<ListGroup>
					<TransitionGroup class-name="music-catalog">
						{items.map(({ id, name }) => (
							<CSSTransition key={id} timeout={500} classNames="fade">
								<ListGroupItem>
									<Button
										className="remove-button"
										color="danger"
										size="md"
										onClick={() => {
											this.setState((state) => ({
												items: state.items.filter((item) => item.id !== id)
											}));
										}}
									>
										Delete Record
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

// importing this.props.getItems() and this.props.item
MusicCatalog.propTypes = {
	getItems: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	item: state.item
});

export default connect(mapStateToProps, { getItems })(MusicCatalog);
