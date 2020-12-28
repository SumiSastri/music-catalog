import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Toast, ToastBody, ToastHeader, Button } from 'reactstrap';

import { handleIncrement, handleDecrement } from '../shop-actions/shop-counter-action-creators';

function AddRemoveItemsCounter() {
	// this is the state tree - why is counter not displaying?
	const counter = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	return (
		<div>
			<Toast>
				<ToastHeader icon="primary">Add or remove Items</ToastHeader>
				<ToastBody>
					<p>Counter{counter}</p>
					<Button onClick={() => dispatch(handleIncrement(2))}>+</Button>
					<Button onClick={() => dispatch(handleDecrement(2))}>-</Button>
				</ToastBody>
			</Toast>
		</div>
	);
}

export default AddRemoveItemsCounter;
