import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'reactstrap';

// import files that are children and add props in the render method
import ToDosList from './ToDosList';
import CreateToDoForm from './toDo-forms-and-modals/CreateToDoForm';

export class ToDosHome extends Component {
	constructor(props) {
		super(props);
		// when state updates it is passed into the list component - new items will be added to list
		// the list component will be re-rendered with the new item
		this.state = {
			toDosArray: []
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

	//  utility function - param is namespace for the submit payload
	addToDoItem = (newToDoItem) => {
		// do not remove - uncomment and check payload correctly received
		// console.log(`submit payload received:`, newToDoItem);

		// assign the param name space to a new variable to display as a new element in the array
		let displayNewToDoItem = [ ...this.state.toDosArray, newToDoItem ];
		this.setState({ toDosArray: displayNewToDoItem });
	};

	// required by card passed via list
	deleteToDoItem = (id) => {
		// console.log(id); do not remove - checks id captured for debugging
		const removeToDo = this.state.toDosArray.filter((eachToDo) => {
			return eachToDo.id !== id;
		});
		this.setState({ toDosArray: removeToDo });
	};

	render() {
		const { toDosArray } = this.state;
		const { handleChange, handleSubmit } = this.props;

		return (
			<div>
				<Container>
					<div className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid">
						{/* Step 2: pass the add function to the stateful child as props 
						Toggle this and move this form out of home to header toggle
						*/}
						<CreateToDoForm
							addToDoItem={this.addToDoItem}
							onChange={handleChange}
							onSubmit={handleSubmit}
						/>
					</div>

					<ToDosList
						// pass state as props to list/ card
						toDosArray={toDosArray}
						// delete has fewer steps compared with create - passed to card via list
						deleteToDoItem={this.deleteToDoItem}
					/>
				</Container>
			</div>
		);
	}
}
export default ToDosHome;
