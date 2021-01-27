import React, { Component } from 'react';
import axios from 'axios';
import { Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import ToDosList from './ToDosList';
import CreateToDoForm from './toDo-forms-and-modals/CreateToDoForm';

export class ToDosHome extends Component {
	constructor(props) {
		super(props);
		// console.log(`logs todoshome props`, this.props);
		this.state = {
			toDosArray: [],
			isFormDisplayed: false
		};
	}
	initialState = this.state;

	componentDidMount() {
		this.getToDos();
	}

	getToDos = () => {
		return axios
			.get(`http://jsonplaceholder.typicode.com/todos`)
			.then((response) => {
				console.log(response);
				this.setState({ toDosArray: response.data.slice(0, 2) });
				// this.setState({});
				// do not remove - uncomment to check else block (loading/ not-found/ completed)
			})
			.catch((err) => this.setState({ errors: err.response.data.errors }));
	};

	addToDoItem = (newToDoItem) => {
		// do not remove - uncomment and check payload correctly received
		// console.log(`submit payload received:`, newToDoItem);
		let displayNewToDoItem = [ ...this.state.toDosArray, newToDoItem ];
		this.setState({ toDosArray: displayNewToDoItem });
	};

	handleFormDisplay = () => {
		this.setState({ isFormDisplayed: true });
	};

	deleteToDoItem = (id) => {
		// console.log(id); do not remove - checks id captured for debugging
		const removeToDo = this.state.toDosArray.filter((eachToDo) => {
			return eachToDo.id !== id;
		});
		this.setState({ toDosArray: removeToDo });
	};

	render() {
		const { toDosArray, isFormDisplayed } = this.state;
		const { handleChange, handleSubmit } = this.props;

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
									addToDoItem={this.addToDoItem}
									handleChange={handleChange}
									handleSubmit={handleSubmit}
								/>
							)}
						</Container>
					</div>

					<ToDosList toDosArray={toDosArray} deleteToDoItem={this.deleteToDoItem} />
				</Container>
			</div>
		);
	}
}
export default ToDosHome;
