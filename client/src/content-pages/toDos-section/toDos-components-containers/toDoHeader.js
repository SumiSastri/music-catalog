import React from 'react';
import { Toast, ToastBody, ToastHeader, Button } from 'reactstrap';

const ToDoHeader = (props) => {
	return (
		<Toast>
			<ToastHeader icon="primary">Get the show on the road</ToastHeader>
			<ToastBody>in-app organiser to sort out your next hip-hop adventure</ToastBody>
			<Button color="warning">Go to Organiser</Button>
		</Toast>
	);
};

export default ToDoHeader;
