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
			</Container>
		);
	}
}

export default MusicCatalog;
