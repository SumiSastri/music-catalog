// demo reducer - import constant
import CREATE_TODO from './demo-constants';

// this initial state is a 'lifted state' lifted from the component dispatched via the action
// received by reducer as a param with initial state representing the the component-container lifted state to change
// it will be lifted once again out of here to the root reducer in the section then lifted to the root reducer
// only the root reducer interacts with the store

// store will run the initial state first then look for changes
const initialState = {
	toDos: [],
	blogs: []
};
console.log(`checks initialState in reducer`, initialState);

// demo action is sent to reducer as a param of the reducer utility func written
export const demoToDoReducer = (state = initialState, action) => {
	// this runs next
	console.log(`checks action in reducer`, state, action);

	// return state as a new object with new array
	// toDos: intial state which we do not want to change
	// we want to set the spread state.toDos which represents initial state
	// then we want to change the action to the payload we have set in the actions-creator
	return {
		// this updates the blogs which has not changed and when the state listens for changes
		// it does nothing with the components that are not requesting ui-changes
		...state,
		toDos: [ ...state.toDos, action.payload ]
	};
};
