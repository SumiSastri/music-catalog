import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';

import iluvhiphop from '../../../assets/ilovehiphop.jpg';

// extracts as props the state items required from blogIndex
// passed from blogList
// prop-drilling or tunneling example - router is a separate library
// props from this library only are one level-deep and need to be passed down like state
const BlogCard = ({ id, body, title, routerHistory }) => {
	return (
		<div id={id} className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid">
			<Link to="/hip-hop-blogs/:blog_id">
				<Container className="themed-container" fluid={true}>
					<Row>
						<Col sm="6">
							<h4>{title}</h4>
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
			</Link>
		</div>
	);
};
export default withRouter(BlogCard);
