import React from 'react';
import { withRouter } from 'react-router-dom';

import { Toast, ToastBody, ToastHeader, Button } from 'reactstrap';

const BlogHeader = (props) => {
	// console.log(`blogsheader props`, props);
	return (
		<Toast>
			<ToastHeader icon="primary">Hip-Hop Blogs</ToastHeader>
			<ToastBody color="success">Get the latest news and concert updates</ToastBody>
			<Button onClick={() => props.history.push('/hip-hop-blogs')} color="warning">
				Go to Blog Page
			</Button>
		</Toast>
	);
};

export default withRouter(BlogHeader);
