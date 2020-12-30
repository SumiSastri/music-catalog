import React from 'react';
import { Toast, ToastBody, ToastHeader, Button } from 'reactstrap';

const ShopHeader = (props) => {
	return (
		<Toast>
			<ToastHeader icon="primary">Hip-Hop Shop</ToastHeader>
			<ToastBody>Buy your favorite hip-hop music and memorabilia here</ToastBody>
			<Button color="warning">Go to the Hip-Hop Shop</Button>
		</Toast>
	);
};

export default ShopHeader;
