import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';

import iluvhiphop from '../../../assets/ilovehiphop.jpg';

const BlogCard = ({ id, body, title, routerHistory }) => {
	return (
		<div id={id} className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid">
			<Link to="/hip-hop-blogs/">
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
