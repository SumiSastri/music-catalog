import React from 'react';
import { Container } from 'reactstrap';

// import MusicPlayList from './MusicPlayList';
import AddMusicItemModal from './AddMusicItemModal';

const MusicPlayListHome = (props) => {
	return (
		<div className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid">
			<Container>
				{/* <div>
					<MusicPlayList />
				</div> */}
				<AddMusicItemModal />
			</Container>
		</div>
	);
};

export default MusicPlayListHome;
