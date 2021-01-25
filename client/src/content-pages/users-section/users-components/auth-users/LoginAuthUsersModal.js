import React, { Component } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, NavLink } from 'reactstrap';

class LoginAuthUsers extends Component {
	state = {
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
		const authorisedUser = {
			email: this.state.email,
			password: this.state.password
		};
		axios
			.post('/api-users', authorisedUser)
			.then(() => this.props.history.push('/hip-hip-organiser'))
			.catch((err) => {
				console.log('err is ', err);
				this.setState({ errors: err.response.data.errors });
			})
			.then(() => this.clearFormInputs())
			.then(() => this.handleModalToggle());
	};

	render() {
		return (
			<div>
				<Label for="register">
					<NavLink color="primary" style={{ marginBottom: '2rem' }} onClick={this.handleModalToggle}>
						<h5>Login</h5>
					</NavLink>
				</Label>
				{/* from closed state the toggle opens modal and the modal header */}
				<Modal isOpen={this.state.isModalOpen}>
					<div>
						<h5>
							<i style={{ marginRight: '2rem' }} className="fas fa-user-plus" />
							Welcome back!
						</h5>
					</div>

					<ModalBody>
						<Form onSubmit={this.handleSubmit}>
							<FormGroup name="userLogin" id="authUser">
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
									<i className="fas fa-hand-spock" /> Submit
								</Button>
							</FormGroup>
						</Form>
					</ModalBody>
					{/* header moved to handle modal close slightly differently */}
					<ModalHeader toggle={this.handleModalToggle}>
						<div style={{ marginLeft: '5rem' }} className="float-right">
							<i className="fas fa-drum" style={{ marginRight: '3rem' }} />Cancel
						</div>
					</ModalHeader>
				</Modal>
			</div>
		);
	}
}

export default LoginAuthUsers;
