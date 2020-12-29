import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const ToDoHeader = (props) => {
	return (
		<Toast>
			<ToastHeader icon="primary">Get the show on the road</ToastHeader>
			<ToastBody>in-app organiser to sort out your next hip-hop adventure</ToastBody>
		</Toast>
	);
};

export default ToDoHeader;
