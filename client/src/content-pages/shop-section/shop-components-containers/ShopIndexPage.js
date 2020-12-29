import React, { Component } from 'react';

import { ToastBody, Toast, ToastHeader } from 'reactstrap';

export class ShopIndexPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid">
				<Toast>
					<ToastHeader icon="primary">Hip-Hop Shop</ToastHeader>
					<ToastBody>Buy your favorite hip-hop music and memorabilia here</ToastBody>
				</Toast>
			</div>
		);
	}
}

export default ShopIndexPage;
