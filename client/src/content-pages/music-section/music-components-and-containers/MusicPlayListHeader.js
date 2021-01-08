import React from 'react';
import { Link } from 'react-router-dom';

import { Toast, ToastBody, ToastHeader, Button } from 'reactstrap';

const MusicPlayListHeader = (props) => {
	return (
		<Toast>
			<ToastHeader icon="primary">Your personal hip-hop playlist</ToastHeader>
			<ToastBody>Set up your faves here</ToastBody>
			<Link to="/hip-hop-playlist">
				<Button color="warning">Go your Play List</Button>
			</Link>
		</Toast>
	);
};

export default MusicPlayListHeader;
