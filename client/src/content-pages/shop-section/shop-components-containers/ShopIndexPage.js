import React, { Component } from 'react';

import { Container } from 'reactstrap';
import ShopHeader from './ShopHeader';

export class ShopIndexPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Container>
				<div className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid">
					<ShopHeader />
				</div>
			</Container>
		);
	}
}

export default ShopIndexPage;
