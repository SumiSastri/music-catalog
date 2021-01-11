import React from 'react';

// unamed export - ES-5
// function Greet() {
// 	return (
// 		<div>
// 			<h1>Hello World</h1>
// 		</div>
// 	);
// }

// unamed export - ES-6
// const Greet = () => (
// 	<div>
// 		<h1>Hello World</h1>
// 	</div>
// );

// export default Greet;

// named export
export const Greet = ({ welcome, example }) => (
	<div>
		<h1>Hello World</h1>
		<div>
			<p>
				{welcome} {example}
			</p>
		</div>
	</div>
);
