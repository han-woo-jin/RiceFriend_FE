import { createAction, handleActions } from "redux-actions"
import { produce } from 'immer'
import { apis, instance } from "../../shared/axios"
import axios from 'axios'

import { axapis } from '../../shared/formaxios'


const token = document.cookie
//Action
const SET_POST = "SET_POST"
const ADD_POST = "ADD_POST"
const EDIT_POST = "EDIT_POST"
const DEL_POST = "DEL_POST"

//Action create
const setPost = createAction(SET_POST, (postlist) => ({ postlist }))
const addPost = createAction(ADD_POST, (post) => ({ post }))
const editPost = createAction(EDIT_POST, (post, post_Id) => ({ post, post_Id }))
const delPost = createAction(DEL_POST, (post_Id) => ({ post_Id }))

//initialState
const initialState = {
  list: [],
}

const initialPost = {
  meetingTitle: "리덕스 초기값 첫번째 우대갈비",
  imgUrl: 'https://mblogthumb-phinf.pstatic.net/MjAyMDAyMjdfMTk1/MDAxNTgyNzMxMDQ5Njkw.ix16dWc4vxLvK-RLLVqZPnYS4Zus4xlpa7u_qJWchKYg.f4t2_bt1WaYl_1jNhOTESDf1J2JTBjAIamrNVyZ9CBog.JPEG.queen7165/DSC04357.JPG?type=w800',
  restaurantName: '몽탄 용산점',
  nickname: '음바페',
  limitMember: 4,
  userCount: 0,
  locationId: 0,
  locationName: '서울',
  meetingDate: '2022-02-16',
  content: '',
  commentCnt: 0,
};




//Middleware

const setPostAction = () => {
  return function (dispatch, getState, { history }) {
    apis.getPost()
      .then((response) => console.log(response))
      .error((error) => console.log(error))
  }
}


const addPostAction = (formData) => {
  return function (dispatch, getState, { history }) {
    axapis.createPost(formData)
      .then((response) => {
        console.log(response)
        history.push('/')
      })
      .catch((error) => console.log(error))
  }

}

const editPostAction = (post, meeting_Id) => {
  return function (dispatch, getState, { history }) {
    apis.editPost(`/api/meeting/${meeting_Id}`, post)
      .then((res) => {
        console.log(res)
        dispatch(editPost(res, meeting_Id))
      })
      .catch((err) => console.log(err))
  }
}

const delPostAction = (post, meeting_Id) => {
  return function (dispatch, getState, { history }) {
    apis.delPost(`/api/meeting/${meeting_Id}`, post)
      .then((res) => {
        console.log(res)
        dispatch(delPost(res, meeting_Id))
      })
      .catch((err) => console.log(err))
  }
}





//Reducer
export default handleActions({
  [SET_POST]: (state, action) => produce(state, (draft) => {
    draft.list.push(...action.payload.postlist)
  }),
  [ADD_POST]: (state, action) => produce(state, (draft) => {
    draft.list.unshift(action.payload.post);
  }),
  [EDIT_POST]: (state, action) => produce(state, (draft) => {
    let idx = draft.list.findIndex((p) => p.postId === action.payload.post_Id)
    draft.list[idx] = { ...draft.list[idx], ...action.payload.post }
  }),
  [DEL_POST]: (state, action) => produce(state, (draft) => {
    draft.list.filter((p) => p.postId !== action.payload.post_Id)
  }),

}, initialState);





const actionCreators = {
  setPost,
  addPost,
  editPost,
  delPost,
  setPostAction,
  addPostAction,
  editPostAction,
  delPostAction,
}

export { actionCreators }