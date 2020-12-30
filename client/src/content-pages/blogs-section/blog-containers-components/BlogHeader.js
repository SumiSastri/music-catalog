import React from 'react';
import { Toast, ToastBody, ToastHeader, Button } from 'reactstrap';

const BlogHeader = (props) => {
	return (
		<Toast>
			<ToastHeader icon="primary">Hip-Hop Blogs</ToastHeader>
			<ToastBody>Get the latest news and concert updates</ToastBody>
			<Button color="warning">Go to Blog Page</Button>
		</Toast>
	);
};

export default BlogHeader;
