import React, { Component } from 'react';
import { Button } from 'reactstrap';
import uuid from 'uuid';

import { FormInputField } from '../../../common-components-and-containers/forms/FormInputField';
// HOOKS REFACTOR
class CreateToDoForm extends Component {
	state = {
		id: uuid(),
		title: '',
		completed: false
	};
	// first render - used in clear form to clear inputs
	initialState = this.state;

	// refactor - ensure name attributes to match key of state object
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		// do not remove - debugs and checks payload is correct
		// console.log(`submit payload:, ${this.state.id}, ${this.state.title}, ${this.state.completed}`);
		this.props.addToDoItem(this.state);
		this.clearFormInputs();
	};

	clearFormInputs = () => {
		this.setState(this.initialState);
	};

	render() {
		// second render after change handler
		const { id, title, completed } = this.state;
		return (
			<div name="id" id={id}>
				<form onSubmit={this.handleSubmit}>
					<FormInputField
						label="What I need to do next:"
						className="inpt-b1m"
						datatestid="inpt-create-to-do"
						name="title"
						onChange={this.handleChange}
						placeholder="Add items here"
						type="text-area"
						value={title}
					/>
					<span name="title">{title}</span>
					<span name="completed">{completed}</span>
					<br />
					<Button color="info" onSubmit={this.handleSubmit}>
						Create & Submit
					</Button>
				</form>
			</div>
		);
	}
}

export default CreateToDoForm;
