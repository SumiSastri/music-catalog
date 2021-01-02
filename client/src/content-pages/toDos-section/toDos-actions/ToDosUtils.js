import axios from 'axios';

export default function getToDos() {
	return axios
		.get(`http://jsonplaceholder.typicode.com/todos`)
		.then((response) => {
			console.log(response);
			this.setState({ toDosArray: response.data.slice(0, 2) });
			// this.setState({});
			// do not remove - uncomment to check else statement(loading works)
		})
		.catch((err) => this.setState({ errors: err.response.data.errors }));
}
