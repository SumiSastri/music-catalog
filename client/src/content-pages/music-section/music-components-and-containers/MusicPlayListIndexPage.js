import React from 'react';
import { Container } from 'reactstrap';

import MusicPlayListHeader from './MusicPlayListHeader';

function MusicPLayListIndexPage() {
	return (
		<Container>
			<div className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid">
				<MusicPlayListHeader />
			</div>
		</Container>
	);
}

export default MusicPLayListIndexPage;
