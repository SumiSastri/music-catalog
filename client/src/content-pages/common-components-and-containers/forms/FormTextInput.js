import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const FormTextInput = (props) => {
	return (
		<Form>
			<FormGroup>
				<Label for="form-label">{children}</Label>
				<Input id="form-input" placeholder="Type text here" name="form-input" type="textarea" />
			</FormGroup>
		</Form>
	);
};

export default FormTextInput;
