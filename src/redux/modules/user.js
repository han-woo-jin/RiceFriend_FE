import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import axios from 'axios';
import { apis } from '../../shared/axios';
import { setAuth } from '../../shared/setAuth';


const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";


const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));


const initialState = {
  userinfo: {email: "", nickname: ""},
  is_login: false,
};


const loginCheck = (user) => {
  return function (dispatch, getState, { history }) {
    console.log(history);
    dispatch(setUser(user));
    history.push("/");
  };
};


const loginAction = (email, password) => {
  return function (dispatch, getState, { history }) {
    apis
      .login(email, password)
      .then((res) => {
        setCookie('token', res.data.token, 7);
        dispatch(setUser({ email: email }));
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
        window.alert('없는 회원정보 입니다! 회원가입을 해주세요!')
      });
  };
};


const signupAction = (nickname, email, password, passwordCheck, gender) => {
  return function (dispatch, getState, { history }) {
    apis
      .signup(nickname, email, password, passwordCheck, gender)
      .then((res) => console.log(res, "회원가입 성공"))
      .catch((error) => console.log(error));
  };
};

const userInfoDB = () => {
  return function (dispatch, getState, {history}) {
    const tokenCheck = document.cookie;
    const token = tokenCheck.split("=")[1]
    apis.userInfo(token).then((res) => {
      console.log(res)
      const userData = {
        email: res.data.email,
        nickname: res.data.nickname
      }
      dispatch(setUser(userData))
    }).catch((error) => console.log(error))
  }
}

const logoutAction = () => {
  return function (dispatch, getState, { history }) {
    deleteCookie("token");
    dispatch(logOut());
    history.replace("/");
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
  userInfoDB,
};

export { actionCreators };