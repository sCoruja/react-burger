import { userReducer } from "./user";
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
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILED,
} from "../constants";
const initialState = {
  isLogged: false,
  userName: "",
  email: "",
  accessToken: "",
  refreshToken: "",
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
  refreshTokenRequest: false,
  refreshTokenFailed: false,
};
describe("Feed reducet", () => {
  it("should return initial state", () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle FORGOT_PWD_REQUEST", () => {
    expect(userReducer(initialState, { type: FORGOT_PWD_REQUEST })).toEqual({
      ...initialState,
      forgotPasswordRequest: true,
      forgotPasswordFailed: false,
    });
  });
  it("should handle FORGOT_PWD_SUCCESS", () => {
    expect(userReducer(initialState, { type: FORGOT_PWD_SUCCESS })).toEqual({
      ...initialState,
      forgotPasswordRequest: false,
    });
  });
  it("should handle FORGOT_PWD_FAILED", () => {
    expect(userReducer(initialState, { type: FORGOT_PWD_FAILED })).toEqual({
      ...initialState,
      forgotPasswordRequest: false,
      forgotPasswordFailed: true,
    });
  });
  it("should handle RESET_PWD_REQUEST", () => {
    expect(userReducer(initialState, { type: RESET_PWD_REQUEST })).toEqual({
      ...initialState,
      resetPasswordRequest: true,
      resetPasswordFailed: false,
    });
  });
  it("should handle RESET_PWD_SUCCESS", () => {
    expect(userReducer(initialState, { type: RESET_PWD_SUCCESS })).toEqual({
      ...initialState,
      resetPasswordRequest: false,
    });
  });
  it("should handle RESET_PWD_FAILED", () => {
    expect(userReducer(initialState, { type: RESET_PWD_FAILED })).toEqual({
      ...initialState,
      resetPasswordRequest: false,
      resetPasswordFailed: true,
    });
  });
  it("should handle REGISTER_SUCCESS", () => {
    expect(
      userReducer(initialState, {
        type: REGISTER_SUCCESS,
        data: {
          user: {
            name: "username",
            email: "mail@ya.com",
          },
          accessToken: "access",
          refreshToken: "refresh",
        },
      })
    ).toEqual({
      ...initialState,
      resetPasswordRequest: false,
      isLogged: true,
      userName: "username",
      email: "mail@ya.com",
      accessToken: "access",
      refreshToken: "refresh",
    });
  });
  it("should handle REGISTER_FAILED", () => {
    expect(userReducer(initialState, { type: REGISTER_FAILED })).toEqual({
      ...initialState,
      registerRequest: false,
      registerFailed: true,
    });
  });
  it("should handle LOGIN_REQUEST", () => {
    expect(userReducer(initialState, { type: LOGIN_REQUEST })).toEqual({
      ...initialState,
      loginRequest: true,
      loginFailed: false,
    });
  });
  it("should handle LOGIN_SUCCESS", () => {
    expect(
      userReducer(initialState, {
        type: LOGIN_SUCCESS,
        data: {
          user: {
            name: "username",
            email: "mail@ya.com",
          },
          accessToken: "access",
          refreshToken: "refresh",
        },
      })
    ).toEqual({
      ...initialState,
      isLogged: true,
      loginRequest: false,
      userName: "username",
      email: "mail@ya.com",
      accessToken: "access",
      refreshToken: "refresh",
    });
  });
  it("should handle LOGIN_FAILED", () => {
    expect(userReducer(initialState, { type: LOGIN_FAILED })).toEqual({
      ...initialState,
      loginRequest: false,
      loginFailed: true,
    });
  });
  it("should handle LOGOUT_REQUEST", () => {
    expect(userReducer(initialState, { type: LOGOUT_REQUEST })).toEqual({
      ...initialState,
      logoutRequest: true,
      logoutFailed: false,
    });
  });
  it("should handle LOGOUT_SUCCESS", () => {
    expect(userReducer(initialState, { type: LOGOUT_SUCCESS })).toEqual({
      ...initialState,
      logoutRequest: false,
      isLogged: false,
      userName: "",
      email: "",
      accessToken: "",
      refreshToken: "",
    });
  });
  it("should handle LOGOUT_FAILED", () => {
    expect(userReducer(initialState, { type: LOGOUT_FAILED })).toEqual({
      ...initialState,
      logoutRequest: false,
      logoutFailed: true,
    });
  });
  it("should handle GET_USER_REQUEST", () => {
    expect(userReducer(initialState, { type: GET_USER_REQUEST })).toEqual({
      ...initialState,
      getUserRequest: true,
      getUserFailed: false,
    });
  });
  it("should handle GET_USER_SUCCESS", () => {
    expect(
      userReducer(initialState, {
        type: GET_USER_SUCCESS,
        data: {
          user: {
            name: "username",
            email: "mail@ya.com",
          },
        },
        accessToken: "access",
        refreshToken: "refresh",
      })
    ).toEqual({
      ...initialState,
      isLogged: true,
      getUserRequest: false,
      userName: "username",
      email: "mail@ya.com",
      accessToken: "access",
      refreshToken: "refresh",
    });
  });
  it("should handle GET_USER_FAILED", () => {
    expect(userReducer(initialState, { type: GET_USER_FAILED })).toEqual({
      ...initialState,
      getUserRequest: false,
      getUserFailed: true,
    });
  });
  it("should handle UPDATE_USER_REQUEST", () => {
    expect(userReducer(initialState, { type: UPDATE_USER_REQUEST })).toEqual({
      ...initialState,
      updateUserRequest: true,
      updateUserFailed: false,
    });
  });
  it("should handle UPDATE_USER_SUCCESS", () => {
    expect(
      userReducer(initialState, {
        type: UPDATE_USER_SUCCESS,
        data: {
          user: {
            name: "username",
            email: "mail@ya.com",
          },
        },
      })
    ).toEqual({
      ...initialState,
      updateUserRequest: false,
      userName: "username",
      email: "mail@ya.com",
    });
  });
  it("should handle UPDATE_USER_FAILED", () => {
    expect(userReducer(initialState, { type: UPDATE_USER_FAILED })).toEqual({
      ...initialState,
      updateUserRequest: false,
      updateUserFailed: true,
    });
  });
  it("should handle REFRESH_TOKEN_REQUEST", () => {
    expect(userReducer(initialState, { type: REFRESH_TOKEN_REQUEST })).toEqual({
      ...initialState,
      refreshTokenRequest: true,
      refreshTokenFailed: false,
    });
  });
  it("should handle REFRESH_TOKEN_SUCCESS", () => {
    expect(
      userReducer(initialState, {
        type: REFRESH_TOKEN_SUCCESS,
        data: { accessToken: "t", refreshToken: "r" },
      })
    ).toEqual({
      ...initialState,
      refreshTokenRequest: false,
      refreshToken: "r",
      accessToken: "t",
    });
  });
  it("should handle REFRESH_TOKEN_FAILED", () => {
    expect(userReducer(initialState, { type: REFRESH_TOKEN_FAILED })).toEqual({
      ...initialState,
      refreshTokenRequest: false,
      refreshTokenFailed: true,
    });
  });
});
