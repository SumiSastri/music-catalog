import React, { Component } from 'react';
import { Button } from 'reactstrap';

// Redux refactor
import { connect } from 'react-redux';
import { createTodoItem } from '../../toDos-actions/async-toDo-action-creators';

import { FormInputField } from '../../../../common-components-and-containers/forms/FormInputField';

class CreateToDoForm extends Component {
	state = {
		completed: false,
		title: ''
	};

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
		this.props.createTodoItem(this.state);
		this.clearFormInputs();
	};

	clearFormInputs = () => {
		this.setState(this.initialState);
	};

	render() {
		return (
			<div name="id" id={this.props.id}>
				<form onSubmit={this.handleSubmit}>
					<FormInputField
						label="What I need to do next:"
						className="inpt-b1m"
						datatestid="inpt-create-to-do"
						name="title"
						onChange={this.handleChange}
						placeholder="Add items here"
						type="text-area"
						value={this.props.title}
					/>
					<span name="title">{this.props.title}</span>
					<span name="completed">Completed: {this.props.completed}</span>
					<br />
					<Button color="info" onSubmit={this.handleSubmit}>
						Create & Submit
					</Button>
				</form>
			</div>
		);
	}
}
// represents the whole state-tree, abstract what is needed by this component
const mapStateToProps = (state) => ({
	todosArray: state.todosArray
});

export default connect(mapStateToProps, { createTodoItem })(CreateToDoForm);
