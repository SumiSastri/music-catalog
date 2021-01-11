import React from 'react';

export const GreetName = (props) => {
	console.log(props);
	const { title, name, petAnimal, children } = props;
	return (
		<div>
			<h1>
				{title} {name} is my {petAnimal}
			</h1>
			{children}
		</div>
	);
};
