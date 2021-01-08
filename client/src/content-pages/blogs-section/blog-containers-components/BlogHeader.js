import React from 'react';
import { Link } from 'react-router-dom';

import { Toast, ToastBody, ToastHeader, Button } from 'reactstrap';

const BlogHeader = (props) => {
	return (
		<Toast>
			<ToastHeader icon="primary">Hip-Hop Blogs</ToastHeader>
			<ToastBody>Get the latest news and concert updates</ToastBody>
			<Link to="/hip-hop-blogs">
				<Button color="warning">Go to Blog Page</Button>
			</Link>
		</Toast>
	);
};

export default BlogHeader;
