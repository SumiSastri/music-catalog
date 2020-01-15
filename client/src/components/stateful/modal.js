import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../../actions/itemActions';

class ItemModal extends Component {
	state = {
		modal: false,
		name: ''
	};
	toggle = () => {
		this.setState({
			modal: !this.state.modal
		});
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		return (
			<div>
				<Button color="primary" style={{ marginBottom: '2rem' }} onClick={this.toggle}>
					Add to playlist
				</Button>
				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>Add a DJ, rap or hip-hop artiste</ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup>
								<Label for="item">Item</Label>
								<Input
									name="name"
									type="text"
									id="item"
									placeholder="Add to your playlist"
									onChange={this.handleChange}
								/>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						<Button color="primary" style={{ marginBottom: '2rem' }} onClick={this.toggle}>
							Submit to playlist
						</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

export default connect()(ItemModal);
