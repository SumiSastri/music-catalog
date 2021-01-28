import React from 'react';

const SearchFilter = ({ searchChange }) => {
	return (
		<div>
			<input type="search" placeholder="search" onChange={searchChange} />
		</div>
	);
};
export default SearchFilter;
