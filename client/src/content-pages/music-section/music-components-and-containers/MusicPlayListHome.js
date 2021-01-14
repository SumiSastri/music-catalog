import React from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

// import MusicPlayList from './MusicPlayList';
import AddMusicItemModal from './AddMusicItemModal';

const MusicPlayListHome = (props) => {
	return (
		<div className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid">
			<Container style={{ padding: '.5rem' }}>
				<h1>My Hip-Hop Playlist</h1>
				<Link to="/">
					<h4 color="secondary">Back to Home</h4>
				</Link>
				{/* <div>
					<MusicPlayList />
				</div> */}
				<br />
			</Container>
			<Container style={{ padding: '.5rem' }}>
				<AddMusicItemModal />
			</Container>
		</div>
	);
};

export default MusicPlayListHome;
