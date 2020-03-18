import { getAuthInfo, logout as logoutRequest, login as loginRequest } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_AUTH_DATA = "auth/SET-AUTH-DATA";

let initialState = {
  isAuthorized: undefined,
  authData: {
    id: null,
    login: null,
    email: null
  }
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        authData: action.data,
        isAuthorized: action.isAuthorized
      }
    default:
      return state;
  }
}

export default authReducer;

function setAuthenticationData(isAuthorized, data = { id: null, login: null, email: null }) {
  return {
    type: SET_AUTH_DATA,
    data,
    isAuthorized
  }
}

export function getAuthenticationData() {
  return async (dispatch) => {
    const data = await getAuthInfo();
    return dispatch(setAuthenticationData(!data.resultCode, data.data));
  }
}

export function login(fields) {
  return async (dispatch) => {
    const data = await loginRequest(fields);
    if (data.resultCode === 0) {
      return dispatch(setAuthenticationData(true, { id: data.data.userId }));
    } else if (data.resultCode === 1 || data.resultCode === 10) {
      return dispatch(stopSubmit("login", { _error: data.messages[0] }));
    } else {
      return Promise.reject("Error while authorization process");
    }
  }
}

export function logout() {
  return async (dispatch) => {
    const data = await logoutRequest();
    if (data.resultCode === 0) {
      return dispatch(setAuthenticationData(false));
    } else {
      alert("unable to logout");
      return Promise.reject("unable to logout");
    }
  };
}