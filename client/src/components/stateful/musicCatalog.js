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

				<ListGroup>
					<TransitionGroup class-name="music-catalog">
						{items.map(({ id, name }) => (
							<CSSTransition key={id} timeout={500} classNames="fade">
								<ListGroupItem>{name}</ListGroupItem>
							</CSSTransition>
						))}
					</TransitionGroup>
				</ListGroup>
			</Container>
		);
	}
}

export default MusicCatalog;
