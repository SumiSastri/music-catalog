import React from 'react';
import { Container, Row, Col } from 'reactstrap';
// withRouter HoC wraps the methods of the router into the component
import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';

import iluvhiphop from '../../../assets/ilovehiphop.jpg';
// Hoc withRouter means we do not need to define routerHistory in the Home component and prop-tunnel
// we can call the history object directly in this component and match the params of the url id
const BlogCard = ({ id, body, title, routerHistory }) => {
	return (
		<div key={id} className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid">
			<Container routerHistory={routerHistory.match.params.id} className="themed-container" fluid={true}>
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
		</div>
	);
};

// refactor routing to redux

// const mapStateToProps = (state, ownProps) => {
// 	let routerBlogId = ownProps.match.params.blog_id;
// 	return {
// 		// replaces set-state
// 		blogPost: state.blogPosts.find((blogPost) => {
// 			return blogPost.id === routerBlogId;
// 		})
// 	};
// };

// export default connect(mapStateToProps)(withRouter(BlogCard));
export default withRouter(BlogCard);
