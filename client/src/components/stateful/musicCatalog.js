import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class MusicCatalog extends Component {
	state = {
		items: [ { id: uuid(), name: 'Maitre Gimms' }, { id: uuid(), name: 'Psy' }, { id: uuid(), name: 'DJ Khalid' } ]
	};

	render() {
		const { items } = this.state;
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

export default MusicCatalog;
