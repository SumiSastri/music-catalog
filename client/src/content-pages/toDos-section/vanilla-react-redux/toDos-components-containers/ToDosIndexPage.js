import React from 'react';
import { Container } from 'reactstrap';

import ToDosHeader from './ToDosHeader';

function ToDosIndexPage() {
	return (
		<Container>
			<div className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid">
				<ToDosHeader />
			</div>
		</Container>
	);
}

export default ToDosIndexPage;
