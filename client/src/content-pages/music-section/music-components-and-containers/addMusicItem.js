import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
// connects the react-redux libraries together
import { connect } from 'react-redux';

// the action, action creator imported.
// The action creator dispatches the response-from the user as an HTTP post call to the backend database
import { addMusicItem } from '../actions/music-section-actions';

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

	handleSubmit = (event) => {
		event.preventDefault();

		const newMusicItem = {
			name: this.state.name
		};

		// the action creator (addMusicItem) is called in the component
		// the newMusicItem that changes the component state is called as a param of the action creator
		this.props.addMusicItem(newMusicItem);

		// close modal
		this.toggle();
	};

	render() {
		return (
			<div>
				<Label for="add-button">
					<Button color="primary" style={{ marginBottom: '2rem' }} onClick={this.toggle}>
						<i className="fas fa-user-plus" />
						<br />Your personal hip-hop playlist
					</Button>
				</Label>

				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>
						<i className="fas fa-user-plus" />
					</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.handleSubmit}>
							<FormGroup>
								<Label for="item">Artiste</Label>
								<Input
									name="name"
									type="text"
									id="item"
									placeholder="Add to your playlist"
									onChange={this.handleChange}
								/>
								<Button color="primary" style={{ marginTop: '2rem' }} block>
									<i className="fas fa-hand-spock" />
								</Button>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						<div>
							<i style={{ marginRight: '2rem' }} className="fas fa-drum" />Dj, rap or hip-hop
						</div>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

// maps this current component-container state - same as reducer state

const mapStateToProps = (state) => ({
	musicItems: state.musicItems
});
// this information now will be posted to the back-end via this action creator for this component
export default connect(mapStateToProps, { addMusicItem })(ItemModal);
