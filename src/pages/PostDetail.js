import React, { useState } from "react";
import CommentWrite from "../components/CommentWrite";
import CommentList from "../components/CommentList";
import { Grid, Button, Text, Image } from "../elements"
import styled from "styled-components";
import { history } from "../redux/configStore";
import {actionCreators as postActions} from '../redux/modules/post'
import {actionCreators as userActions} from "../redux/modules/user";
import { useDispatch, useSelector } from "react-redux";
import {apis, instance} from '../shared/axios'

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import AddTaskIcon from '@mui/icons-material/AddTask';
import IconButton from '@mui/material/IconButton';

const PostDetail = (props) => {

    const dispatch = useDispatch()
    const id = props.match.params.meetingId;
    const is_edit = id ? true : false;

    const [meetingInfo, setMeetingInfo] = useState([])

    React.useEffect(() =>{
        apis.getPost()
        .then((response) =>{
            setMeetingInfo(response.data)
        })
        .catch((error)=> console.log(error))

   },[])


    //포스트 수정 => 작성페이지가 수정페이지로 바뀜
    const editThisPost = () => {
        history.push(`/write/${id}`)
    }

    //포스트 삭제
    const deleteThisPost = () => {
        const ok = window.confirm("정말로 삭제하시겠어요?")

        if(ok){
            dispatch(postActions.delPost(id))
        }else{
            return;
        }

        history.replace('/')
    }

    return (
        <React.Fragment>
            <Wrap>
                <Grid>
                    <TableHeader>
                        <Grid padding="10px" margin="40px 0px 0px 0px">
                            <Image src={meetingInfo.imgUrl} />

                        </Grid>
                        <Grid padding="5px">
                            <EditDeleteBtn>
                                <Button margin="0px 5px" _onClick={editThisPost}>수정</Button>
                                <Button margin="0px 5px" _onClick={deleteThisPost}>삭제</Button>
                            </EditDeleteBtn>

                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <Text margin="10px 10px 10px 20px" size="32px"> {meetingInfo.meetingTitle} </Text>
                                </FormControl>
                            </Box>

                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <Text  margin="10px 10px 10px 20px" size="32px"> {meetingInfo.nickname} </Text>
                                </FormControl>
                            </Box>

                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <Text  margin="10px 10px 10px 20px" size="32px"> {meetingInfo.name} </Text>
                                </FormControl>
                            </Box>

                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <Text  margin="10px 10px 10px 20px" size="32px"> {meetingInfo.locationName} </Text>
                                </FormControl>
                            </Box>

                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <Text  margin="10px 10px 10px 20px" size="32px"> 모집인원 : {meetingInfo.userCount} / {meetingInfo.limitMember} 명 </Text>
                                </FormControl>
                            </Box>

                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <Text  margin="10px 10px 10px 20px" size="32px"> {meetingInfo.meetingDate} </Text>
                                </FormControl>
                            </Box>

                        </Grid>
                    </TableHeader>

                    <Grid padding="16px">
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <Text size="24px"> {meetingInfo.contents} </Text>
                            </FormControl>
                        </Box>

                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <Text size="24px"> 참여자: 누구누구님, 누구누구님, 누구누구님, 누구누구님 </Text>
                            </FormControl>
                        </Box>

                        <Grid is_flex margin="0px 10px">
                            <IconButton aria-label="add to join">
                                <AddTaskIcon />
                            </IconButton>
                            <Grid is_flex margin="0px 20px">
                                <Text size="20px">댓글 {meetingInfo.comment_cnt}개</Text>
                            </Grid>
                        </Grid>

                        <CommentWrite></CommentWrite>
                        <CommentList></CommentList>

                    </Grid>
                </Grid>
            </Wrap>
        </React.Fragment >
    )
}

const TableHeader = styled.div`
    columns: 2;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
  `;

const Wrap = styled.div`
max-width : 1100px;
min-width:  920px;
min-height : 100vh;
margin : auto;
`

const EditDeleteBtn = styled.div`
display: flex;
width: 150px;
float: right;
margin-right: 40px;

`

export default PostDetail;