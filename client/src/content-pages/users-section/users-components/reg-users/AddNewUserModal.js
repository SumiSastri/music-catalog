import React, { Component } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, NavLink } from 'reactstrap';
// import uuid from 'uuid';

class AddNewUserModal extends Component {
	state = {
		// userUUID: uuid(),
		userName: null,
		email: null,
		password: null,
		isModalOpen: false,
		errors: null
	};
	initalState = this.state;
	// modal now toggled to open from closed
	handleModalToggle = () => {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	clearFormInputs = () => {
		this.setState(this.initialState);
	};

	handleSubmit = (event) => {
		event.preventDefault();
		// user payload
		const newRegisteredUser = {
			userName: this.state.userName,
			email: this.state.email,
			password: this.state.password
		};
		axios
			.post('/api-users', newRegisteredUser)
			.then(() => this.props.history.push('/'))
			.catch((err) => {
				console.log('err is ', err);
				this.setState({ errors: err.response.data.errors });
			})
			.then(() => this.clearFormInputs())
			.then(() => this.handleModalToggle());
	};

	render() {
		const { userUUID } = this.state;

		return (
			<div>
				<Label for="add-user">
					<NavLink style={{ marginLeft: '4rem', marginBottom: '2rem' }} onClick={this.handleModalToggle}>
						<h5>Register</h5>
					</NavLink>
				</Label>
				{/* from closed state the toggle opens modal and the modal header */}
				<Modal isOpen={this.state.isModalOpen}>
					<div>
						<h5>
							<i style={{ marginRight: '2rem' }} className="fas fa-user-plus" />
							Get more from la Boite as a registered user!
						</h5>
					</div>

					<ModalBody>
						<Form onSubmit={this.handleSubmit}>
							<FormGroup name="userId" id={userUUID}>
								<Input
									name="userName"
									type="text"
									id="userName"
									placeholder="Handle goes here"
									onChange={this.handleChange}
								/>
								<Label for="userName">handle/user name</Label>
								<Input
									name="email"
									type="email"
									id="email"
									placeholder="Please provide a valid email"
									onChange={this.handleChange}
								/>
								<Label for="Email">Email</Label>
								{/* <h5>{password}</h5> checks password submitted correctly*/}
								<Input
									name="password"
									type="password"
									id="password"
									placeholder="Password must be contain 8 characters and one symbol"
									onChange={this.handleChange}
								/>
								<Label for="Password">Password</Label>
								<Button
									onSubmit={this.handleSubmit}
									color="primary"
									style={{ marginTop: '2rem' }}
									block
								>
									<i className="fas fa-hand-spock" /> Save
								</Button>
							</FormGroup>
						</Form>
					</ModalBody>
					{/* header moved to handle modal close slightly differently */}
					<ModalHeader toggle={this.handleModalToggle}>
						<div style={{ marginLeft: '5rem' }} className="float-right">
							<i className="fas fa-drum" style={{ marginRight: '3rem' }} />No thanks
						</div>
					</ModalHeader>
				</Modal>
			</div>
		);
	}
}

export default AddNewUserModal;
