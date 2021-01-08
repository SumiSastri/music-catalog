import React, { Component } from 'react';
import { Container } from 'reactstrap';

// import CreateToDoForm from './toDo-forms-and-modals/CreateToDoForm';

export class ToDosListHeader extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isFormDisplayed: false
		};
	}

	// handleFormDisplay = () => {
	// 	this.setState({ isFormDisplayed: true });
	// };

	render() {
		// const { isFormDisplayed, addToDoItem } = this.state;
		// const { handleChange, handleSubmit } = this.props;

		return (
			<div className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid">
				<Container style={{ padding: '.5rem' }}>
					<h1>My Hip-Hop Organiser</h1>
					{/* {!isFormDisplayed ? (
						<Button onClick={this.handleFormDisplay}>Add Stuff</Button>
					) : (
						<CreateToDoForm
							addToDoItem={addToDoItem}
							handleChange={handleChange}
							handleSubmit={handleSubmit}
						/>
					)} */}
				</Container>
			</div>
		);
	}
}

export default ToDosListHeader;
