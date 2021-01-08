import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const TwoColCard = (props) => {
	return (
		<Row>
			<Col sm="6">
				<Card body>
					<CardTitle tag="h5" />
					<CardText />
					<Button />
				</Card>
			</Col>
			<Col sm="6">
				<Card body>
					<CardTitle tag="h5" />
					<CardText />
					<Button />
				</Card>
			</Col>
		</Row>
	);
};

export default TwoColCard;
