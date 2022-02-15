import axios from "axios";

const tokencheck = document.cookie;
const token = tokencheck.split("=")[1];
export const instance = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  baseURL: "http://bobfriend.shop/",
  headers: {
    // "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    // accept: "*/*",
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    token: token,
    //로그인 후에는 토큰도 headers에 담아서 건내줘야한다.
  },
});

export const imstance = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  baseURL: "http://bobfriend.shop/",
  headers: {
    "Content-Type": "multipart/form-data",
    accept: "application/json",
    token: token,
  },

});


instance.interceptors.request.use(function (config) {
  const accesstoken = document.cookie.split("=")[1];
  config.headers.common["Authorization"] = `${accesstoken}`;
  return config;
});

imstance.interceptors.request.use(function (config) {
  const accesstoken = document.cookie.split("=")[1];
  config.headers.common["Authorization"] = `${accesstoken}`;
  return config;
});

export const apis = {
  // 로그인 요청
  login: (email, password) =>
    instance.post("/api/user/login", { email: email, password: password }),

  // userInfo: (token) =>
  //   instance.post(`/api/user/auth`, {authorization: token}),

  // 회원가입 요청
  signup: (email, password, passwordCheck, nickname, gender) =>
    instance.post("/api/user/signup", {
      email: email,
      password: password,
      passwordCheck: passwordCheck,
      nickname: nickname,
      gender: gender,
    },
      { withCredentials: true }
    ),

  // 게시물 불러오기
  getPost: () => instance.get("/api/meeting"),
  // 게시물 작성하기
  createPost: (formData) => imstance.post("/api/meeting", formData),
  // 게시물 수정하기
  editPost: (id, content) => instance.put(`/api/meeting/${id}`, content),
  // 게시물 삭제하기
  delPost: (id) => instance.delete(`/api/meeting/${id}`),
};



//   export const commentApis = {
//     // 게시물 불러오기
//     getPost: () => instance.get("/posts"),
//     // 게시물 작성하기
//     createPost: (contents) => instance.post("/posts", contents),
//     // 게시물 수정하기
//     editPost: (id, content) => instance.put(`/posts/${id}`, content),
//     // 게시물 삭제하기
//     delPost: (id) => instance.delete(`/posts/${id}`),
//   };