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
  user: null,
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
        console.log("post response", res.headers);
        // console.log(res.headers.get("set-cookie"));
        // const token = res.headers["authorization"];
        // setCookie("is_login", `${token}`);
        // setAuth(token);
        // document.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
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
// const signupAction = (email, password, passwordCheck, nickname, gender) => {
//   return function (dispatch, getState, { history }) {
//     apis
//       .createUser({
//         nickname: nickname,
//         email: email,
//         password: password,
//         passwordCheck: passwordCheck,
//         gender: gender,
//       },
//         { withCredentials: true }
//       )
//       .then(() => {
//         console.log("회원가입 성공");
//         window.alert("회원가입 성공");
//         history.push('/');
//       })
//       .catch((err) => {
//         console.log("회원가입 실패");
//         window.alert("회원가입 실패");
//       })
//   }
// }

// const loginAction = (email, password) => {
//   apis
//     .testLogin({
//       email: email,
//       password: password,
//     })
//     .then(() => {
//       console.log("로그인 성공");
//     })
// }

// const loginAction = (email, password) => {
//   return function (dispatch, getState, { history }) {
//     apis
//       .createLogin({
//         email: email,
//         password: password,
//       })
//       .then((res) => {
//         const token = res.data.token;
//         console.log("로그인 res ", res);
//         //토큰을 로컬 스토리지에 저장
//         localStorage.setItem("MY_TOKEN", token);
//         localStorage.setItem("MY_ID", password);
//         //로그인체크 미들웨어로 리덕스에 유저정보 저장
//         apis.getUserInfo().then((res) => {
//           console.log("로그인 중 ~ 헤더에 토큰있으면 불러오는 데이터: ", res);
//           dispatch(
//             setUser({
//               id: res.data.user.email,
//               nickname: res.data.user.nickname,
//             })
//           );
//         });
//       })
//       .catch((err) => {
//         console.log("로그인 실패");
//       });

//     history.push('/');
//   }
// }

// const loginCheck = () => {
//   return function (dispatch) {
//     apis
//       .getUserInfo()
//       .then((res) => {
//         console.log("헤더에 토큰있으면 불러오는 데이터: ", res);
//         localStorage.setItem("MY_NAME", res.data.user.nickname);
//         dispatch(
//           setUser({
//             id: res.data.user.email,
//             nickname: res.data.user.nickname,
//           })
//         );
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

// const logoutAction = () => {
//   return function (dispatch, getState, { history }) {
//     localStorage.removeItem("MY_TOKEN");
//     localStorage.removeItem("MY_ID");
//     localStorage.removeItem("MY_NAME");
//     dispatch(logOut());
//     history.replace("/");
//   };
// };


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
  // logoutAction,
  loginCheck,
};

export { actionCreators };