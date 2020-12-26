import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const FormTextInput = (props) => {
	return (
		<Form>
			<FormGroup>
				<Label for="To Do List">To Do List</Label>
				<Input id="form-input" placeholder="Type text here" name="form-input" type="textarea" />
			</FormGroup>
			<Button>Submit</Button>
		</Form>
	);
};

export default FormTextInput;
