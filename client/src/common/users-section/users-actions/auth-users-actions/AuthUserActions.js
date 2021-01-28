import axios from 'axios';

import {
	LOAD_USER,
	USER_PASSWORD_AUTH,
	USER_PASSWORD_AUTH_FAIL,
	LOAD_AUTH_USER,
	LOAD_AUTH_USER_FAIL
} from './constants/AuthUserActionTypes';
import { showErrors } from './AuthUserErrorsActions';

export const setUserLoading = () => {
	return {
		type: LOAD_USER
	};
};
export const authTokenConfig = (getState) => {
	const authorization = getState().authUserReducer.user.authorization;
	const config = {
		headers: {
			'Content-Type': 'application/json',
			environment: 'mock',
			Authorization: 'Bearer MuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0zX3JkdldSMGs'
		}
	};
	//  Find token and add to headers with the config method
	if (authorization) {
		config.headers['116567'] = authorization;
	}
	return authTokenConfig;
};
export const loadAuthUser = () => (dispatch, getState) => {
	dispatch({ type: LOAD_USER });
	const url = 'https://api.bybits.co.uk/policys/details';
	axios
		.get(url, authTokenConfig(getState))
		.then((res) =>
			dispatch({
				type: LOAD_AUTH_USER,
				payload: res.data
			})
		)
		.catch((err) => {
			dispatch(showErrors(err.response.data, err.response.status, 'USER_AUTH_FAIL'));
			dispatch({
				type: LOAD_AUTH_USER_FAIL
			});
		});
};
export const login = ({ username, password }) => (dispatch) => {
	// Headers of post request
	const config = {
		headers: {
			'Content-Type': 'application/json',
			environment: 'mock'
		}
	};
	const body = JSON.stringify({ username, password });
	const url = 'https://api.bybits.co.uk/auth/token';
	axios
		.post(url, body, config)
		.then((res) =>
			dispatch({
				type: USER_PASSWORD_AUTH,
				payload: res.data
			})
		)
		.catch((err) => {
			dispatch(showErrors(err.response.data, err.response.status, 'USER_AUTH_FAIL'));
			dispatch({
				type: USER_PASSWORD_AUTH_FAIL
			});
		});
};
