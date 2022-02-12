import {createAction, handleActions} from "redux-actions"
import {produce} from 'immer'

//Action
const SET_POST = "SET_POST"
const ADD_POST = "ADD_POST"
const EDIT_POST = "EDIT_POST"
const DEL_POST = "DEL_POST"

//Action create
const setPost = createAction(SET_POST, (postlist) => ({postlist}))
const addPost = createAction(ADD_POST, (post) => ({post}))
const editPost = createAction(EDIT_POST, (post, post_Id) => ({post,post_Id}))
const delPost = createAction(DEL_POST, (post_Id) => ({post_Id}))

//initialState
const initialState ={
    list: [
        {
            meetingTitle: "리덕스 초기값 첫번째 우대갈비",
            imgUrl: 'https://mblogthumb-phinf.pstatic.net/MjAyMDAyMjdfMTk1/MDAxNTgyNzMxMDQ5Njkw.ix16dWc4vxLvK-RLLVqZPnYS4Zus4xlpa7u_qJWchKYg.f4t2_bt1WaYl_1jNhOTESDf1J2JTBjAIamrNVyZ9CBog.JPEG.queen7165/DSC04357.JPG?type=w800',
            name: '몽탄 용산점',
            nickname: '음바페',
            limitMember: 4,
            userCount: 0,
            locationName: '서울',
            meetingDate: '2022-02-16',
            contents: '',
            commentCnt: 0,
        },
        {
            meetingTitle: "리덕스 초기값 두번째 우대갈비",
            imgUrl: 'https://mblogthumb-phinf.pstatic.net/MjAyMDAyMjdfMTk1/MDAxNTgyNzMxMDQ5Njkw.ix16dWc4vxLvK-RLLVqZPnYS4Zus4xlpa7u_qJWchKYg.f4t2_bt1WaYl_1jNhOTESDf1J2JTBjAIamrNVyZ9CBog.JPEG.queen7165/DSC04357.JPG?type=w800',
            name: '몽탄 용산점',
            nickname: '음바페',
            limitMember: 4,
            userCount: 0,
            locationName: '서울',
            meetingDate: '2022-02-16',
            contents: '',
            commentCnt: 0,
        },
        {
            meetingTitle: "리덕스 초기값 세번째 우대갈비",
            imgUrl: 'https://mblogthumb-phinf.pstatic.net/MjAyMDAyMjdfMTk1/MDAxNTgyNzMxMDQ5Njkw.ix16dWc4vxLvK-RLLVqZPnYS4Zus4xlpa7u_qJWchKYg.f4t2_bt1WaYl_1jNhOTESDf1J2JTBjAIamrNVyZ9CBog.JPEG.queen7165/DSC04357.JPG?type=w800',
            name: '몽탄 용산점',
            nickname: '음바페',
            limitMember: 4,
            userCount: 0,
            locationName: '서울',
            meetingDate: '2022-02-16',
            contents: '',
            commentCnt: 0,
        },
        {
            meetingTitle: "리덕스 초기값 네번째 우대갈비",
            imgUrl: 'https://mblogthumb-phinf.pstatic.net/MjAyMDAyMjdfMTk1/MDAxNTgyNzMxMDQ5Njkw.ix16dWc4vxLvK-RLLVqZPnYS4Zus4xlpa7u_qJWchKYg.f4t2_bt1WaYl_1jNhOTESDf1J2JTBjAIamrNVyZ9CBog.JPEG.queen7165/DSC04357.JPG?type=w800',
            name: '몽탄 용산점',
            nickname: '음바페',
            limitMember: 4,
            userCount: 0,
            locationName: '서울',
            meetingDate: '2022-02-16',
            contents: '',
            commentCnt: 0,
        },
    ],
}


//Middleware



//Reducer
export default handleActions({
    [SET_POST] : (state, action) => produce(state, (draft) => {
        draft.list.push(...action.payload.postlist)
    }),
    [ADD_POST] : (state, action) => produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
    }),

}, initialState);





const actionsCreators ={
    setPost,


}

export { actionsCreators }