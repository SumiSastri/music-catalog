import React from 'react';
import { Container } from 'reactstrap';
import iluvhiphop from '../../../assets/ilovehiphop.jpg';

// extracts as props the state items required from blogIndex
const BlogCard = ({ body, title }) => {
	console.log(this.props);
	return (
		<div>
			<Container>
				<div>
					<img top width="10%" src={iluvhiphop} alt="hip-hop-blog" />
				</div>
				<div>
					<h2>{title}</h2>
					<p>{body}</p>
				</div>
			</Container>
		</div>
	);
};

export default BlogCard;
