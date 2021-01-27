// HOOKS REFACTOR
import React, { useState } from 'react';
// import React, { Component } from 'react';
// REDUX REFACTOR
import { connect } from 'react-redux';
// action creator
import { createToDoItem } from '../../vanilla-react-redux/toDos-actions/sync-toDo-action-creators';

// props now destructured and used as state.props here
// mapped dispatch function used as props
const ToDoFormHooks = ({ todosArray, handleSubmit }) => {
	initialState = '';
	[ formInputs, setFormInputs ] = useState(initialState);
	handleChange = (event) => {
		setFormInputs(event.target.value);
	};

	[ submitForm, setSubmitForm ] = useState(() => {});
	handleSubmit = (event) => {
		event.prevent.default();
		const isDuplicate = todosArray.some((todoItem) => todoItem.todo === todo);
		if (!isDuplicate) {
			setSubmitForm(() => createToDoItem(todo));
			setFormInputs(initialState);
		}
	};

	return (
		<div name="id" id={id}>
			<form onSubmit={submitForm}>
				<input
					label="What I need to do next:"
					className="inpt-b1m"
					datatestid="inpt-create-to-do"
					name="title"
					placeholder="Add items here"
					type="text-area"
					value={formInputs}
					onChange={handleChange}
				/>

				<span name="title">{formInputs}</span>
				<span name="completed">{completed}</span>
				<br />
				<button color="info" onSubmit={handleSubmit}>
					Create & Submit
				</button>
			</form>
		</div>
	);
};
// the array of todos is state.state.props
const mapStateToProps = (state = { todosArray: state.todosArray });
// local state mapped - here it is the handle submit function
// sent back to the component as props
const mapDispatchToProps = dispatch({ handleSubmit });
export default connect(mapStateToProps, mapDispatchToProps)(ToDoFormHooks);
