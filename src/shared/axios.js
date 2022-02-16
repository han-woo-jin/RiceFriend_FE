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

instance.interceptors.request.use(function (config) {
  const accesstoken = document.cookie.split("=")[1];
  config.headers.common["Authorization"] = `${accesstoken}`;
  return config;
});

export const imstance = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  baseURL: "http://bobfriend.shop/",
  headers: {
    "Content-Type": "multipart/form-data",
    accept: "application/json",
    token: token,
  },
  // method: "post",
  //     url: "http://bobfriend.shop/api/meeting",
  //     data: formData,

});

export const axapis = {
  createPost: (formData) => instance.post("/api/meeting", formData),

  createComment: (meetingId, content) => instance.post(`api/meeting/${meetingId}/comments`, content),
}



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
  // 게시물 한개불러오기
  // getOnePost: (meetingId) => instance.get(`/api/meeting/${meetingId}`),
  // 게시물 작성하기
  createPost: (contents) => instance.post("/api/meeting", contents),
  // 게시물 수정하기
  edPost: (meetingId) => instance.patch(`/api/meeting/${meetingId}`),
  // 게시물 삭제하기
  delPost: (meetingId) => instance.delete(`/api/meeting/${meetingId}`),


  // 댓글 불러오기
  getComment: (meetingId) => instance.get(`api/meeting/${meetingId}`),
  // 댓글 작성하기
  createComment: (meetingId, content) => instance.post(`api/meeting/${meetingId}/comments`, content),
  // 댓글 수정하기
  // editComment: (meetingId, content, commentId) => instance.put(`api/meeting/${meetingId}/comments/${commentId}`, content),
  // 댓글 삭제하기
  delCommentDB: (meetingId, commentId) => instance.delete(`api/meeting/${meetingId}/comments/${commentId}`),
};
