import React, { Component } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, NavLink } from 'reactstrap';

// connects the react-redux libraries together
// import { connect } from 'react-redux';

class AddNewUserModal extends Component {
	state = {
		userName: null,
		email: null,
		password: null,
		isModalOpen: false,
		errors: null
	};

	// modal now toggled to open from closed
	handleModalToggle = () => {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		// user payload
		const newRegisteredUser = {
			userName: this.state.userName,
			email: this.state.email,
			password: this.state.password
		};
		axios.post('/api-users', newRegisteredUser).then(() => this.props.history.push('/')).catch((err) => {
			console.log('err is ', err);
			this.setState({ errors: err.response.data.errors });
		});
		// close modal
		this.handleModalToggle();
	};

	render() {
		const { userName, email, password } = this.state;

		return (
			<div>
				<Label for="add-button">
					<NavLink color="primary" style={{ marginBottom: '2rem' }} onClick={this.handleModalToggle}>
						<span>Register</span>
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
							<FormGroup>
								<h5>{userName}</h5>
								<Input
									name="userName"
									type="text"
									id="userName"
									placeholder="Handle goes here"
									onChange={this.handleChange}
								/>
								<Label for="userName">handle/user name</Label>
								<h5>{email}</h5>
								<Input
									name="email"
									type="email"
									id="email"
									placeholder="Please provide a valid email"
									onChange={this.handleChange}
								/>
								<Label for="Email">Email</Label>
								<h5>{password}</h5>
								<Input
									name="password"
									type="password"
									id="password"
									placeholder="Password must be contain 8 characters and one symbol"
									onChange={this.handleChange}
								/>
								<Label for="Password">Password</Label>
								<Button color="primary" style={{ marginTop: '2rem' }} block>
									<i className="fas fa-hand-spock" /> Save
								</Button>
							</FormGroup>
						</Form>
					</ModalBody>
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

// use mapStateToProps here then use the connect method to connect react to redux

export default AddNewUserModal;
