import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from 'axios';
const SET_PREVIEW = "SET_PREVIEW";

const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));

const initialState = {
  preview: null,
};

const addImage = (formData) => {
  return function (dispatch, getState, { history }) {

    axios({
      method: "post",
      url: "http://bobfriend.shop/api/meeting",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        history.push('/')
      })
      .catch((err) => {
        console.log(err);
        window.alert(err.response.data.errorMessage);
        return;
      });
  };
}

export default handleActions(
  {
    [SET_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.preview;
      }),
  },
  initialState
);

const actionCreators = {
  setPreview,
  addImage
};

export { actionCreators };