import React, { Component } from 'react';

import { Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
// Redux refactor - import connect and action creators
import { connect } from 'react-redux';
import { deleteToDoItem, getToDos, createTodoItem } from '../toDos-actions/async-toDo-action-creators';

import ToDosList from './ToDosList';
import CreateToDoForm from './toDo-forms-and-modals/CreateToDoForm';

export class ToDosHome extends Component {
	constructor(props) {
		super(props);
		// console.log(`logs todoshome props`, this.props);
		this.state = {
			todosArray: [],
			isFormDisplayed: false
		};
	}

	componentDidMount() {
		this.props.getToDos();
	}

	handleFormDisplay = () => {
		this.setState({ isFormDisplayed: true });
	};

	render() {
		const { isFormDisplayed } = this.state;
		const { todosArray, handleChange, handleSubmit } = this.props;

		return (
			<div>
				<Container>
					<div className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid">
						<Container style={{ padding: '.5rem' }}>
							<h1>My Hip-Hop Organiser</h1>
							<Link to="/">
								<h4 color="secondary">Back to Home</h4>
							</Link>
							{!isFormDisplayed ? (
								<Button onClick={this.handleFormDisplay}>Add Stuff</Button>
							) : (
								<CreateToDoForm
									createTodoItem={createTodoItem}
									handleChange={handleChange}
									handleSubmit={handleSubmit}
								/>
							)}
						</Container>
					</div>

					<ToDosList todosArray={todosArray} deleteToDoItem={this.deleteToDoItem} />
				</Container>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	todosArray: state.todosArray
});

export default connect(mapStateToProps, { getToDos, createTodoItem, deleteToDoItem })(ToDosHome);
