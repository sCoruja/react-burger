import {
    FORGOT_PWD_REQUEST,
    FORGOT_PWD_SUCCESS,
    FORGOT_PWD_FAILED,
    RESET_PWD_REQUEST,
    RESET_PWD_SUCCESS,
    RESET_PWD_FAILED,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILED,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILED,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILED,
} from '../actions/user'
const initialState = {
    userName: '',
    email: '',
    accessToken: '',
    refreshToken: '',
    forgotPasswordRequest: false,
    forgotPasswordFailed: false,
    resetPasswordRequest: false,
    resetPasswordFailed: false,
    registerRequest: false,
    registerFailed: false,
    loginRequest: false,
    loginFailed: false,
    logoutRequest: false,
    logoutFailed: false,
    getUserRequest: false,
    getUserFailed: false,
    updateUserRequest: false,
    updateUserFailed: false,
}
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FORGOT_PWD_REQUEST:
            return {
                ...state, forgotPasswordRequest: true, forgotPasswordFailed: false

            }
        case FORGOT_PWD_SUCCESS: {
            return {
                ...state, forgotPasswordRequest: false,

            }
        }
        case FORGOT_PWD_FAILED: {
            return {
                ...state, forgotPasswordRequest: false, forgotPasswordFailed: true

            }
        }
        case RESET_PWD_REQUEST: {
            return {
                ...state, resetPasswordRequest: true, resetPasswordFailed: false

            }
        }
        case RESET_PWD_SUCCESS: {
            return {
                ...state, resetPasswordRequest: true

            }
        }
        case RESET_PWD_FAILED: {
            return {
                ...state, resetPasswordRequest: false, resetPasswordFailed: true

            }
        }
        case REGISTER_REQUEST: {
            return {
                ...state, registerRequest: true, registerFailed: false,

            }
        }
        case REGISTER_SUCCESS: {
            return {
                ...state,
                registerRequest: false,
                userName: action.data.user.name,
                email: action.data.user.email,
                accessToken: action.data.accessToken,
                refreshToken: action.data.refreshToken,

            }
        }
        case REGISTER_FAILED: {
            return {
                ...state, registerRequest: false, registerFailed: true

            }
        }
        case LOGIN_REQUEST: {
            return {
                ...state, loginRequest: true, loginFailed: false,

            }
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                loginRequest: false,
                userName: action.data.user.name,
                email: action.data.user.email,
                accessToken: action.data.accessToken,
                refreshToken: action.data.refreshToken,
            }
        }
        case LOGIN_FAILED: {
            return {
                ...state, loginRequest: false, loginFailed: true,

            }
        }
        case LOGOUT_REQUEST: {
            return {
                ...state, logoutRequest: true, logoutFailed: false,

            }
        }
        case LOGOUT_SUCCESS: {
            return {
                ...state,
                logoutRequest: false,
                userName: '',
                email: '',
                accessToken: '',
                refreshToken: '',

            }
        }
        case LOGOUT_FAILED: {
            return {
                ...state, logoutRequest: false, logoutFailed: true,


            }
        }
        case GET_USER_REQUEST: {
            return {
                ...state, getUserRequest: true, getUserFailed: false,

            }
        }
        case GET_USER_SUCCESS: {
            return {
                ...state,
                getUserRequest: false,
                userName: action.data.user.name,
                email: action.data.user.email,

            }
        }
        case GET_USER_FAILED: {
            return {
                ...state, getUserRequest: false, getUserFailed: true,

            }
        }
        case UPDATE_USER_REQUEST: {
            return {
                ...state, updateUserRequest: true, updateUserFailed: false,

            }
        }
        case UPDATE_USER_SUCCESS: {
            return {
                ...state,
                updateUserRequest: false,
                userName: action.data.user.name,
                email: action.data.user.email,

            }
        }
        case UPDATE_USER_FAILED: {
            return {
                ...state, updateUserRequest: false, updateUserFailed: true,

            }
        }
        default: {
            return state
        }
    }
}