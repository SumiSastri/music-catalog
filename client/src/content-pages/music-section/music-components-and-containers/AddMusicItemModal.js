import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';

import { addMusicItem } from '../actions/music-section-actions';

class AddMusicItemModal extends Component {
	state = {
		modal: false,
		name: '',
		albumName: ''
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
		// payload of new item sent to db
		const newMusicItem = {
			name: this.state.name,
			albumName: this.state.albumName
		};
		// utility function addMusicItem called here
		// mapped to reducer as state.props?
		this.props.addMusicItem(newMusicItem);
		// close modal
		this.toggle();
	};

	render() {
		return (
			<div>
				<Label for="add-button">
					<Button color="info" style={{ marginBottom: '2rem' }} onClick={this.toggle}>
						<i className="fas fa-user-plus" />
						<hr />
						<h4>Add to my PlayList</h4>
					</Button>
				</Label>
				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>
						<i className="fas fa-user-plus" />
					</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.handleSubmit}>
							<FormGroup>
								<Label for="item">My personal play list</Label>
								<p>{this.state.name}</p>
								<Input
									name="name"
									type="text"
									id="musicianName"
									placeholder="Add musician or band to your playlist"
									onChange={this.handleChange}
								/>
								<p>{this.state.albumName}</p>
								<Input
									name="albumName"
									type="text"
									id="albumName"
									placeholder="Add single or album title to your playlist"
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
							<i style={{ marginRight: '2rem' }} className="fas fa-drum" />Dj, rap or hip-hop
						</div>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	musicItems: state.musicItems
});
export default connect(mapStateToProps, { addMusicItem })(AddMusicItemModal);
