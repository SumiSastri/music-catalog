// lift state out of component to reducer
import {} from '';

// Authorization: Bearer {access_token}
const initialState = {
	users: {
		username: null,
		isAuthenticated: false,
		loading: false,
		authToken: localStorage.getItem('authToken')
	}
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
	switch (action.type) {
		case LOAD_USER:
			return {
				...state,
				loading: true
			};
		case USER_PASSWORD_AUTH:
			return {
				...state,
				user: action.payload,
				isAuthenticated: true,
				loading: false
			};
		case USER_AUTH_FAIL:
			localStorage.removeItem('authToken');
			return {
				...state,
				authToken: null,
				user: null,
				isAuthenticated: false,
				loading: false
			};

		default:
			return state;
	}
}
