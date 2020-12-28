import { INCREMENTER, DECREMENTER } from '../shop-actions/shop-action-type-constants';

// the reducer is a function that imports the changes requested by the action-creators/ action types
// the purpose of the reducer is to update state of the component based on previous state
// logic where there is no payload is added here - state+1 to add a payload, add  it to the action-creator param

const counterOneReducer = (state = 0, action) => {
	switch (action.type) {
		case INCREMENTER:
			return state + action.payload;
		case DECREMENTER:
			return state - action.payload;
		default:
			return state;
	}
};
export default counterOneReducer;
