import React from 'react';
import { Button, Form, FormGroup } from 'reactstrap';

import '../../toDos-styles/toDoFormStyles.css';
import { FormInputField } from '../../../common-components-and-containers/forms/FormInputField';

const CreateToDoForm = ({ toDoItem, handleToDoInputChanges, handleNewToDoSubmit }) => {
	return (
		<div className="new-todo-form">
			{/* change events called here - data added here */}
			<Form onSubmit={handleNewToDoSubmit}>
				<FormGroup>
					<div id={toDoItem.id}>
						<Button className="new-todo-button" color="warning" onSubmit={handleNewToDoSubmit}>
							Create & Submit
						</Button>
						<h5>The next things on the list are...</h5>
						<FormInputField
							label="What I need to do next:"
							className="new-todo-input"
							datatestid="inpt-create-to-do"
							name="inpt-create-to-do"
							onChange={handleToDoInputChanges}
							placeholder="Add items here"
							type="text-area"
							title={toDoItem.title}
							value={toDoItem.title}
						/>
					</div>
				</FormGroup>
			</Form>
		</div>
	);
};

export default CreateToDoForm;

// TEMP MOVED HERE - FROM UTILITY FUNCTIONS SECTION

// the state of the toDoItem in the form needs to be captured by event listner
// handleToDoInputChanges = (event) => {
// 	this.setState({ toDoItem: event.target.value });
// };
// once captured, the data captured - which is the new updated state
// pass this updated state object as a param to the utility function written to add and push state to the array
// call the create utility function - needs to be bound to state with this.state
// handleNewToDoSubmit = (event) => {
// 	event.preventDefault();
// 	// attach the updated form values to submit
// 	const createToDoItem = {
// 		toDoItem: this.state
// 	};
// 	this.state.addToDoItem(createToDoItem);
// };

// TEMP MOVED HERE - FROM RENDER METHOD

// {
/* <div>
						<ToDoForm
							// pass state of required to create form inputs
							toDoItem={toDoItem}
							// capture the input change and submit - pass change handlers
							onChange={this.handleToDoInputChanges}
							onSubmit={this.handleNewToDoSubmit}
						/>
					</div> */
// }
