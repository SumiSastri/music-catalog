import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import iluvhiphop from '../../../assets/ilovehiphop.jpg';

import { Link } from 'react-router-dom';

// extracts as props the state items required from blogIndex
// passed from blogList
const BlogCard = ({ id, body, title, displayBlogPost }) => {
	return (
		<div
			id={id}
			onClick={() => {
				displayBlogPost({ id });
			}}
			className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid"
		>
			<Container className="themed-container" fluid={true}>
				<Row>
					<Col sm="6">
						<Link to="/:blogs_id">
							<h4>{title}</h4>
						</Link>
					</Col>
				</Row>

				<Row>
					<Col sm={{ size: 'auto', offset: 1 }}>
						<img width="30%" src={iluvhiphop} alt="hip-hop-blog" />
					</Col>
					<Col sm="6">
						<p>{body}</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default BlogCard;
