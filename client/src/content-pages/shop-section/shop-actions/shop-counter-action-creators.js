import { INCREMENTER, DECREMENTER } from './shop-action-type-constants';

// this action-creator does not fetch data but updates data with logic
// here we only return the type in the action creator.
// once you add a param it is the payload

export const handleIncrement = (number) => {
	return {
		type: INCREMENTER,
		payload: number
	};
};

export const handleDecrement = (number) => {
	return {
		type: DECREMENTER,
		payload: number
	};
};
