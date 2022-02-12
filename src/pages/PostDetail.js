import React from "react";
import CommentWrite from "../components/CommentWrite";
import CommentList from "../components/CommentList";
import {Grid, Button, Text, Image} from "../elements"

const PostDetail = (props) => {

    return (
        <React.Fragment>
            <Grid>
                <Image shape='rectangle' src={props.imgUrl} />
            프롭스 이미지
            프롭스 타이틀
            프롭스 닉네임
            프롭스 네임
            프롭스 유저카운트 / 리미트멤버 명
            프롭스 로케이션네임
            프롭스 미팅데이트
            프롭스 콘텐츠
            댓글 : 프롭스 커멘트 카운트 개
            머터리얼 체크
            참여자 : 누구누구님, 누구누구님

            코멘트 라이트
            코멘트 리스트
            </Grid>
        </React.Fragment>
    )
}

export default PostDetail;