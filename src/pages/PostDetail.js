import React, { useState } from "react";
import CommentWrite from "../components/CommentWrite";
import CommentList from "../components/CommentList";
import { Grid, Button, Text, Image } from "../elements"
import styled from "styled-components";
import { history } from "../redux/configStore";
import { actionCreators as postActions } from '../redux/modules/post'
import user, { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch, useSelector } from "react-redux";
import { apis, instance } from '../shared/axios'

import { yellow, grey } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import AddTaskIcon from '@mui/icons-material/AddTask';
import IconButton from '@mui/material/IconButton';
import image from "../redux/modules/image";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1045,
    minWidth: 345,
    backgroundColor: grey[200],
  },
}));

const PostDetail = (props) => {

  const classes = useStyles();

  const dispatch = useDispatch()
  const id = props.match.params.meetingId;
  const is_edit = id ? true : false;
  const user_id = props.match.userId;


  const [info, setInfo] = useState([])
  const [정보, 정보변경] = useState([]);
  const [성별, 성전환] = useState(false);

  React.useEffect(() => {
    instance.get(`api/meeting/${id}`)
      .then((response) => {
        console.log(response)
        setInfo(response.data.meetingResonseDto)
      })
      .catch((error) => console.log(error))
  }, [id])


  React.useEffect(() => {
    instance.get(`api/meeting/${id}`)
      .then((response) => {
        console.log(response)
        정보변경(response.data.meetingUserResponseDtos[0].gender)
      })
      .catch((error) => console.log(error))
  }, [id])

  console.log(정보)



  //포스트 수정 => 작성페이지가 수정페이지로 바뀜
  const editThisPost = () => {
    history.push(`/write/${id}`)
  }

  //포스트 삭제
  const deleteThisPost = () => {
    const ok = window.confirm("정말로 삭제하시겠어요?")

    if (ok) {
      dispatch(postActions.delPostAction(id))

      history.replace('/')
    } else {
      return;
    }

  }
  // 참여 버튼
  const addJoinMeeting = () => {
    apis.createJoin()
      .then((response) => {
        console.log(response)
      })
      .catch((error) => console.log(error))
  }

  // 탈퇴버튼
  const deleteJoinMeeting = () => {
    apis.deleteJoin()
      .then((response) => {
        console.log(response)
      })
      .catch((error) => console.log(error))
  }

  return (

    <React.Fragment>
      <Grid margin="auto" width="980px">

        <Card className={classes.root}>

          <EditDeleteBtn >

            <Button margin="0px 5px" _onClick={editThisPost}>수정</Button>
            <Button margin="0px 5px" _onClick={deleteThisPost}>삭제</Button>

          </EditDeleteBtn>
          <TableHeader>
            <Grid padding="10px 20px" margin="0px 0px 0px 0px">
              <Image shape="preview" src={info.imgUrl} />
            </Grid>
            <Grid padding="10px 20px 0px 0px" >
              <Box sx={{ minWidth: 120 }} border=" 1px solid black" borderRadius="5px">
                <FormControl fullWidth>
                  <Text margin="10px 10px 10px 20px" size="32px">모임이름 :  {info.meetingTitle} </Text>
                </FormControl>
                <FormControl fullWidth>
                  {정보 === "male" ? (
                    <Text color="red" margin="10px 10px 10px 20px" size="32px">닉네임 : {info.nickname} </Text>
                  ) : (
                    <Text color="blue" margin="10px 10px 10px 20px" size="32px">닉네임 : {info.nickname} </Text>
                  )}
                </FormControl>

                <FormControl fullWidth>
                  <Text margin="10px 10px 10px 20px" size="32px"> {info.name} </Text>
                </FormControl>
                <FormControl fullWidth>
                  <Text margin="10px 10px 10px 20px" size="32px"> 지역 : {info.locationName} </Text>
                </FormControl>
                <FormControl fullWidth>
                  <Text margin="10px 10px 10px 20px" size="32px"> 모집인원 : {info.userCount} / {info.limitMember} 명 </Text>
                </FormControl>
                <FormControl fullWidth>
                  <Text margin="10px 10px 10px 20px" size="32px"> 마감일 : {info.meetingDate} </Text>
                </FormControl>
              </Box>

            </Grid>
          </TableHeader>

          <Grid padding="16px" >
            <Box sx={{ minWidth: 120 }} border=" 1px solid black" borderRadius="5px" >
              <FormControl fullWidth>
                <Text margin="50px" size="24px"> {info.content} </Text>
              </FormControl>
            </Box>
            <br></br>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <Text margin="10px" size="24px"> 참여자: 누구누구님, 누구누구님, 누구누구님, 누구누구님 </Text>
              </FormControl>
            </Box>

            <Grid is_flex margin="0px 10px">
              <IconButton aria-label="add to join">
                <AddTaskIcon onClick={addJoinMeeting} />
              </IconButton>
              <Grid is_flex margin="0px 20px">
                <Text size="20px">댓글 {info.commentCount + ","}개</Text>
              </Grid>
            </Grid>

            <CommentWrite meetingId={id}></CommentWrite>
            <CommentList meetingId={id}></CommentList>

          </Grid>

        </Card>
      </Grid>
    </React.Fragment>
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
margin-left : auto;
margin-right : auto;
margin-top: 20px;
`

const EditDeleteBtn = styled.div`
display: flex;
width: 150px;
float: right;
margin-right: 10px;
padding-top: 15px;
`

export default PostDetail;