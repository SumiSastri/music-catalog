import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

// connects the react-redux libraries together
// import { connect } from 'react-redux';

class AddNewUserModal extends Component {
	state = {
		userType: null,
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
			userType: this.state.userType,
			userName: this.state.userName,
			email: this.state.email,
			password: this.state.password,
			errors: this.state.errors
		};

		// close modal
		this.handleModalToggle();
	};

	render() {
		const { userType, userName, email, password } = this.state;

		return (
			<div>
				<Label for="add-button">
					<Button color="primary" style={{ marginBottom: '2rem' }} onClick={this.toggle}>
						<i className="fas fa-user-plus" />
						<br />Register
					</Button>
				</Label>
				{/* from closed state the toggle opens modal and the modal header */}
				<Modal isOpen={this.state.isModalOpen} handleToggle={this.handleToggle}>
					<ModalHeader toggle={this.handleToggle}>
						<i className="fas fa-user-plus" />
					</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.handleSubmit}>
							<FormGroup>
								{/* <Label for="item">userType</Label>
								<p>{this.state.userType}</p>
								<Input
									name="userType"
									type="ddl"
									id="ddl-userType"
									placeholder="Select most relevant"
									onChange={this.handleChange}
								/> */}
								<Label for="item">handle/user name</Label>
								<p>{this.state.userName}</p>
								<Input
									name="userName"
									type="text"
									id="firstName"
									placeholder="Type your user handle or full name"
									onChange={this.handleChange}
								/>
								<Input
									name="email"
									type="email"
									id="email"
									placeholder="Please provide a valid email"
									onChange={this.handleChange}
								/>
								<Input
									name="password"
									type="password"
									id="password"
									placeholder="Password must be contain 8 characters and one symbol"
									onChange={this.handleChange}
								/>

								<Button color="primary" style={{ marginTop: '2rem' }} block>
									<i className="fas fa-hand-spock" /> Save
								</Button>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						<div>
							<i style={{ marginRight: '2rem' }} className="fas fa-drum" />Get more from la Boite as a
							registered user!
						</div>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

// use mapStateToProps here then use the connect method to connect react to redux

export default AddNewUserModal;
