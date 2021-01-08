import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// Check API call for array elements names
// Pass the required data from the API that is required by the component
// These are each of the items you have mapped into the list JSX tags in BlogList initially
// As state has been destructured and passed this card will be rendered in the map function
// The design of this card can be changed if required at this stage - added a drop-down button here
// This component now has local state which does not need to be lifted for the toggle
const ToDosCard = ({ id, title }) => {
	const [ dropdownOpen, setOpen ] = useState(false);
	const toggle = () => setOpen(!dropdownOpen);

	return (
		<div key={id}>
			<p>{title}</p>
			<ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
				<DropdownToggle caret>Add, Update or Delete</DropdownToggle>
				<DropdownMenu>
					<DropdownItem header>WARNING: You can not restore a deleted item</DropdownItem>
					<DropdownItem>Create new card</DropdownItem>
					<DropdownItem divider />
					<DropdownItem>Update this card</DropdownItem>
					<DropdownItem divider />
					<DropdownItem>Delete this card</DropdownItem>
				</DropdownMenu>
			</ButtonDropdown>
		</div>
	);
};
export default ToDosCard;
