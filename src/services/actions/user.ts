import { baseUrl, request } from "../api";

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
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILED,
  LOGOUT_FAILED,
} from "../constants";
import { AppDispatch, AppThunk } from "../types";
import {
  TAuthenticationResponse,
  TRequestErrorExeption,
  TResetTokenResponse,
  TUser,
  TUserResponse,
} from "../types/data";

export interface IForgotPasswordAction {
  readonly type: typeof FORGOT_PWD_REQUEST;
}
export interface IForgotPasswordSuccessAction {
  readonly type: typeof FORGOT_PWD_SUCCESS;
  readonly data: TAuthenticationResponse;
}
export interface IForgotPasswordFailedAction {
  readonly type: typeof FORGOT_PWD_FAILED;
  readonly data: TRequestErrorExeption;
}
export interface IResetPasswordAction {
  readonly type: typeof RESET_PWD_REQUEST;
}
export interface IResetPasswordSuccessAction {
  readonly type: typeof RESET_PWD_SUCCESS;
  readonly data: TAuthenticationResponse;
}
export interface IResetPasswordFailedAction {
  readonly type: typeof RESET_PWD_FAILED;
  readonly data: TRequestErrorExeption;
}
export interface IRegisterAction {
  readonly type: typeof REGISTER_REQUEST;
}
export interface IRegisterSuccessAction {
  readonly type: typeof REGISTER_SUCCESS;
  readonly data: TUserResponse;
}
export interface IRegisterFailedAction {
  readonly type: typeof REGISTER_FAILED;
  readonly data: TRequestErrorExeption;
}
export interface ILoginAction {
  readonly type: typeof LOGIN_REQUEST;
}
export interface ILoginSuccessAction {
  readonly type: typeof LOGIN_SUCCESS;
  readonly data: TUserResponse;
}
export interface ILoginFailedAction {
  readonly type: typeof LOGIN_FAILED;
  readonly data: TRequestErrorExeption;
}
export interface ILogoutAction {
  readonly type: typeof LOGOUT_REQUEST;
}
export interface ILogoutSuccessAction {
  readonly type: typeof LOGOUT_SUCCESS;
  readonly data: TAuthenticationResponse;
}
export interface ILogoutFailedAction {
  readonly type: typeof LOGOUT_FAILED;
  readonly data: TRequestErrorExeption;
}
export interface IGetUserAction {
  readonly type: typeof GET_USER_REQUEST;
}
export interface IGetUserSuccessAction {
  readonly type: typeof GET_USER_SUCCESS;
  readonly data: TUserResponse;
}
export interface IGetUserFailedAction {
  readonly type: typeof GET_USER_FAILED;
  readonly data: TRequestErrorExeption;
}
export interface IUpdateUserAction {
  readonly type: typeof UPDATE_USER_REQUEST;
}
export interface IUpdateUsetSuccessAction {
  readonly type: typeof UPDATE_USER_SUCCESS;
  readonly data: TUserResponse;
}
export interface IUpdateUserFailedAction {
  readonly type: typeof UPDATE_USER_FAILED;
  readonly data: TRequestErrorExeption;
}
export interface IRefreshTokenAction {
  readonly type: typeof REFRESH_TOKEN_REQUEST;
}
export interface IRefreshTokenSuccessAction {
  readonly type: typeof REFRESH_TOKEN_SUCCESS;
  readonly data: TResetTokenResponse;
}
export interface IRefreshTokenFailedAction {
  readonly type: typeof REFRESH_TOKEN_FAILED;
  readonly data: TRequestErrorExeption;
}
export type TUserActions =
  | IForgotPasswordAction
  | IForgotPasswordSuccessAction
  | IForgotPasswordFailedAction
  | IResetPasswordAction
  | IResetPasswordSuccessAction
  | IResetPasswordFailedAction
  | IRegisterAction
  | IRegisterSuccessAction
  | IRegisterFailedAction
  | ILoginAction
  | ILoginSuccessAction
  | ILoginFailedAction
  | ILogoutAction
  | ILogoutSuccessAction
  | ILogoutFailedAction
  | IGetUserAction
  | IGetUserSuccessAction
  | IGetUserFailedAction
  | IUpdateUserAction
  | IUpdateUsetSuccessAction
  | IUpdateUserFailedAction
  | IRefreshTokenAction
  | IRefreshTokenSuccessAction
  | IRefreshTokenFailedAction;

export const forgotPasswordAction = (): IForgotPasswordAction => ({
  type: FORGOT_PWD_REQUEST,
});
export const forgotPasswordSuccessAction = (
  data: any
): IForgotPasswordSuccessAction => ({
  type: FORGOT_PWD_SUCCESS,
  data: data,
});
export const forgotPassworFailedAction = (
  data: TRequestErrorExeption
): IForgotPasswordFailedAction => ({
  type: FORGOT_PWD_FAILED,
  data: data,
});
export const resetPasswordAction = (): IResetPasswordAction => ({
  type: RESET_PWD_REQUEST,
});
export const resetPasswordSuccessAction = (
  data: TAuthenticationResponse
): IResetPasswordSuccessAction => ({
  type: RESET_PWD_SUCCESS,
  data: data,
});
export const resetPasswordFailedAction = (
  data: TRequestErrorExeption
): IResetPasswordFailedAction => ({
  type: RESET_PWD_FAILED,
  data: data,
});
export const registerAction = (): IRegisterAction => ({
  type: REGISTER_REQUEST,
});
export const registerSuccessAction = (
  data: TUserResponse
): IRegisterSuccessAction => ({
  type: REGISTER_SUCCESS,
  data: data,
});
export const registerFailedAction = (
  data: TRequestErrorExeption
): IRegisterFailedAction => ({
  type: REGISTER_FAILED,
  data: data,
});
export const loginAction = (): ILoginAction => ({
  type: LOGIN_REQUEST,
});
export const loginSuccessAction = (
  data: TUserResponse
): ILoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  data: data,
});
export const loginFailedAction = (
  data: TRequestErrorExeption
): ILoginFailedAction => ({
  type: LOGIN_FAILED,
  data: data,
});
export const logoutAction = (): ILogoutAction => ({
  type: LOGOUT_REQUEST,
});
export const logoutSuccessAction = (
  data: TAuthenticationResponse
): ILogoutSuccessAction => ({
  type: LOGOUT_SUCCESS,
  data: data,
});
export const logoutFailedAction = (
  data: TRequestErrorExeption
): ILogoutFailedAction => ({
  type: LOGOUT_FAILED,
  data: data,
});
export const getUserAction = (): IGetUserAction => ({
  type: GET_USER_REQUEST,
});
export const getUserSuccessAction = (
  data: TUserResponse
): IGetUserSuccessAction => ({
  type: GET_USER_SUCCESS,
  data: data,
});
export const getUserFailedAction = (
  data: TRequestErrorExeption
): IGetUserFailedAction => ({
  type: GET_USER_FAILED,
  data: data,
});
export const updateUserAction = (): IUpdateUserAction => ({
  type: UPDATE_USER_REQUEST,
});
export const updateUserSuccessAction = (
  data: TUserResponse
): IUpdateUsetSuccessAction => ({
  type: UPDATE_USER_SUCCESS,
  data: data,
});
export const updateUserFailedAction = (
  data: TRequestErrorExeption
): IUpdateUserFailedAction => ({
  type: UPDATE_USER_FAILED,
  data: data,
});
export const refreshTokenAction = (): IRefreshTokenAction => ({
  type: REFRESH_TOKEN_REQUEST,
});
export const refreshTokenSuccessAction = (
  data: TResetTokenResponse
): IRefreshTokenSuccessAction => ({
  type: REFRESH_TOKEN_SUCCESS,
  data: data,
});
export const refreshTokenFailedAction = (
  data: TRequestErrorExeption
): IRefreshTokenFailedAction => ({
  type: REFRESH_TOKEN_FAILED,
  data: data,
});
export const forgotPasswordThunk: AppThunk = (email: string) => (
  dispatch: AppDispatch
) => {
  const url = baseUrl + "password-reset";

  dispatch(forgotPasswordAction());
  request(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
    }),
  })
    .then((data) => {
      dispatch(forgotPasswordSuccessAction(data));
    })
    .catch((e) => {
      dispatch(forgotPassworFailedAction(e));
    });
};

export const resetPasswordThunk: AppThunk = (
  password: string,
  token: string
) => (dispatch: AppDispatch) => {
  const url = baseUrl + "password-reset/reset";

  dispatch(resetPasswordAction());
  request(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password,
      token,
    }),
  })
    .then((data) => {
      dispatch(resetPasswordSuccessAction(data));
    })
    .catch((e) => {
      dispatch(resetPasswordFailedAction(e));
    });
};

export const registerThunk: AppThunk = (
  email: string,
  password: string,
  name: string
) => (dispatch: AppDispatch) => {
  const url = baseUrl + "auth/register";
  dispatch(registerAction());
  request(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      name,
    }),
  })
    .then((data) => {
      dispatch(registerSuccessAction(data));
    })
    .catch((e) => {
      dispatch(registerFailedAction(e));
    });
};
export const loginThunk: AppThunk = (email: string, password: string) => (
  dispatch: AppDispatch
) => {
  const url = baseUrl + "auth/login";

  dispatch(loginAction());
  request(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((data) => {
      dispatch(loginSuccessAction(data));
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
    })
    .catch((e) => {
      dispatch(loginFailedAction(e));
    });
};

export const logoutThunk: AppThunk = (refreshToken: string) => (
  dispatch: AppDispatch
) => {
  const url = baseUrl + "auth/logout";

  dispatch(logoutAction());
  request(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: refreshToken,
    }),
  })
    .then((data) => {
      dispatch(logoutSuccessAction(data));
    })
    .catch((e) => {
      dispatch(logoutFailedAction(e));
    });
};

export const getUserThunk: AppThunk = (
  accessToken: string,
  refreshToken: string
) => (dispatch: AppDispatch) => {
  const url = baseUrl + "auth/user";
  dispatch(getUserAction());
  request(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: accessToken,
    },
  })
    .then((data) => {
      dispatch(getUserSuccessAction(data));
    })
    .catch((e) => {
      dispatch(getUserFailedAction(e));
    });
};

export const updateUserThunk: AppThunk = (
  accessToken: string,
  userInfo: TUser
) => (dispatch: AppDispatch) => {
  const url = baseUrl + "auth/user";

  dispatch(updateUserAction());
  request(url, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: accessToken,
    },
    body: JSON.stringify({ ...userInfo }),
  })
    .then((data) => {
      dispatch(updateUserSuccessAction(data));
    })
    .catch((e) => {
      dispatch(updateUserFailedAction(e));
    });
};

export const resfreshTokenThunk: AppThunk = (refreshToken: string) => (
  dispatch: AppDispatch
) => {
  const url = baseUrl + "auth/token";
  dispatch(refreshTokenAction());
  request(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: `${refreshToken}` }),
  })
    .then((data) => {
      dispatch(refreshTokenSuccessAction(data));
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
    })
    .catch((e) => {
      dispatch(refreshTokenFailedAction(e));
    });
};
