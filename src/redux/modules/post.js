import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore, storage } from "../../shared/firebase";
import "moment";
import moment from "moment";

import { actionCreators as imageActions } from "./image";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const LOADING = "LOADING";

const setPost = createAction(SET_POST, (post_list, paging) => ({
  post_list,
  paging,
}));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post_id, post) => ({
  post_id,
  post,
}));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialPost = {
  list: [],
};

export default handleActions(
  {
    [SET_POST]: (state, action) => produce(state, (draft) => { }),
  },
  //initialState
);

const actionCreators = {
  setPost,
  addPost,
  editPost,
  // getPostFB,
  // addPostFB,
  // editPostFB,
  // getOnePostFB,
};

export { actionCreators };