import { baseUrl, request } from "../../utils/api";

export const FORGOT_PWD_REQUEST = 'FORGOT_PWD_REQUEST';
export const FORGOT_PWD_SUCCESS = 'FORGOT_PWD_SUCCESS';
export const FORGOT_PWD_FAILED = 'FORGOT_PWD_FAILED';

export const RESET_PWD_REQUEST = 'RESET_PWD_REQUEST';
export const RESET_PWD_SUCCESS = 'RESET_PWD_SUCCESS';
export const RESET_PWD_FAILED = 'RESET_PWD_FAILED';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED'

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';

export const forgotPassword = (email) => dispatch => {
    const url = baseUrl + 'password-reset';

    dispatch({ type: FORGOT_PWD_REQUEST })
    request(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email
        })
    })
        .then(data => {
            dispatch({ type: FORGOT_PWD_SUCCESS, data: data });
        })
        .catch(e => {
            dispatch({ type: FORGOT_PWD_FAILED })
        });
}

export const resetPassword = (password, token) => dispatch => {
    const url = baseUrl + 'password-reset/reset';

    dispatch({ type: RESET_PWD_REQUEST })
    request(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password, token
        })
    })
        .then(data => {
            dispatch({ type: RESET_PWD_SUCCESS, data: data });
        })
        .catch(e => {
            dispatch({ type: RESET_PWD_FAILED })
        });
}

export const register = (email, password, name) => dispatch => {
    const url = baseUrl + 'auth/register';

    dispatch({ type: REGISTER_REQUEST })
    request(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email, password, name
        })
    })
        .then(data => {
            dispatch({ type: REGISTER_SUCCESS, data: data });
        })
        .catch(e => {
            dispatch({ type: REGISTER_FAILED })
        });
}
export const login = (email, password) => dispatch => {
    const url = baseUrl + 'auth/login';

    dispatch({ type: LOGIN_REQUEST })
    request(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email, password
        })
    })
        .then(data => {
            dispatch({ type: LOGIN_SUCCESS, data: data });
        })
        .catch(e => {
            dispatch({ type: LOGIN_FAILED })
        });
}

export const logout = (accessToken, refreshToken) => dispatch => {
    const url = baseUrl + 'auth/logout';

    dispatch({ type: LOGIN_REQUEST })
    request(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            token: `${accessToken} ${refreshToken}`
        })
    })
        .then(data => {
            dispatch({ type: LOGIN_SUCCESS, data: data });
        })
        .catch(e => {
            dispatch({ type: LOGIN_FAILED })
        });
}

export const getUser = accessToken => dispatch => {
    const url = baseUrl + 'auth/user';

    dispatch({ type: GET_USER_REQUEST })
    request(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
    })
        .then(data => {
            dispatch({ type: GET_USER_SUCCESS, data: data });
        })
        .catch(e => {
            dispatch({ type: GET_USER_FAILED })
        });
}

export const updateUser = (accessToken, userInfo) => dispatch => {
    const url = baseUrl + 'auth/user';

    dispatch({ type: UPDATE_USER_REQUEST })
    request(url, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({...userInfo})
    })
        .then(data => {
            dispatch({ type: UPDATE_USER_SUCCESS, data: data });
        })
        .catch(e => {
            dispatch({ type: UPDATE_USER_FAILED })
        });
}