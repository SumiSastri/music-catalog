import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'reactstrap';

import ToDosList from './ToDosList';

export class ToDosHome extends Component {
	constructor(props) {
		super(props);

		this.state = {
			toDosArray: []
		};
	}
	initialState = this.state;

	componentDidMount() {
		this.getToDos();
	}

	deleteToDoItem = (id) => {
		// console.log(id); do not remove - checks id captured for debugging
		const removeToDo = this.state.toDosArray.filter((eachToDo) => {
			return eachToDo.id !== id;
		});
		this.setState({ toDosArray: removeToDo });
	};

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

	render() {
		const { toDosArray } = this.state;
		return (
			<div>
				<Container>
					<ToDosList toDosArray={toDosArray} deleteToDoItem={this.deleteToDoItem} />
				</Container>
			</div>
		);
	}
}
export default ToDosHome;
