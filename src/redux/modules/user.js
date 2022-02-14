import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import axios from 'axios';
import { apis } from '../../shared/axios';

const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";


const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

const initialState = {
  user: null,
  nickname: null,
  is_login: false,
};
const loginCheck = () => {
  return function (dispatch, getState, { history }) {
    const userId = localStorage.getItem('email');
    const tokenCheck = document.cookie;
    if (tokenCheck) {
      dispatch(setUser({ email: userId }));
    } else {
      dispatch(logOut());
    }

  };
};

const loginAction = (email, password, gender) => {
  return function (dispatch, getState, { history }) {
    apis
      .login(email, password)
      .then((res) => {
        setCookie('Set-Cookie', res.data.token, 7);
        localStorage.setItem('email', res.data.email);
        dispatch(setUser({
          email: email,
          password: password,
        }));
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
        window.alert("없는 회원정보 입니다! 회원가입을 해주세요!")
      });
  };
};
const logoutAction = () => {
  return function (dispatch, getState, { history }) {
    deleteCookie('Set-Cookie');
    localStorage.removeItem('email');
    dispatch(logOut());
    history.push('/login');
  };
};

const signupAction = (nickname, email, password, passwordCheck, gender) => {
  return function (dispatch, getState, { history }) {
    apis
      .signup(nickname, email, password, passwordCheck, gender)
      .then((res) => console.log(res, "회원가입 성공"))
      .catch((error) => console.log(error));
    history.push('/login');
  };

};



export default handleActions(
  {
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
      }),
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
  },
  initialState
);

const actionCreators = {
  setUser,
  getUser,
  logOut,
  signupAction,
  loginAction,
  logoutAction,
  loginCheck,
};

export { actionCreators };