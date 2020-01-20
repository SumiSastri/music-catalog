import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../../actions/itemActions';
// import { ilovehiphop } from '../../assets/ilovehiphop.jpg';

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

		const newItem = {
			name: this.state.name
		};

		// add item via actions for data to get transfered to store
		this.props.addItem(newItem);

		// close modal
		this.toggle();
	};

	render() {
		return (
			<div>
				<Button color="primary" style={{ marginBottom: '2rem' }} onClick={this.toggle}>
					<i className="fas fa-user-plus" />
				</Button>
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
							{/* <img alt="i-love-hip-hop-cartoon" src={ilovehiphop} style={{ height: '10%' }} /> */}
							<i style={{ marginRight: '2rem' }} className="fas fa-drum" />Dj, rap or hip-hop
						</div>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	item: state.item
});
export default connect(mapStateToProps, { addItem })(ItemModal);
