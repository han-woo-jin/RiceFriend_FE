import React, { useState } from "react";
import { Grid, Text, Button, Image, Input } from "../elements";
// import Upload from "../shared/Upload";
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";
import { history } from "../redux/configStore";
import { actionCreators as postActions } from "../redux/modules/post";
// import { actionCreators as imageActions } from "../redux/modules/image";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import moment from "moment";

const PostWrite = (props) => {
  const dispatch = useDispatch()
  const post = useSelector(state => state.post.list)
  const [postInfo, setPostInfo] = useState([])

  const [meetingTitle, setMeetingTitle] = useState()
  const [imgUrl, setimgUrl] = useState();
  const [restaurantName, setRestaurantName] = useState();
  const [limitMember, setlimitMember] = useState();
  const [locationId, setlocationId] = useState();
  const [meetingDate, setmeetingDate] = useState();
  const [content, setContent] = useState()
  const date = moment().format("YYYY-MM-DD")



  const addpost = () => {

    if( !meetingTitle || !content || !restaurantName || !limitMember || !locationId || !meetingDate ){
      window.alert("빈 공간을 채워주세요!")
      return ;
  }

    dispatch(postActions.addPostAction(
      {
      meetingTitle: meetingTitle,
      // imgUrl: imgUrl,
      restaurantName: restaurantName,
      content: content,
      limitMember: limitMember,
      locationId: locationId,
      meetingDate: meetingDate,
    }
    
    ))
    history.push('/')
  }


  //수정관련
  const id = props.match.params.id
  const is_edit = id ? true : false
  // let postInfo = is_edit ? post.find((p) => p.postId === id) : null

  const editpost = () => {
    dispatch(postActions.editPostAction({
      meetingTitle: meetingTitle,
      imgUrl: imgUrl,
      restaurantName: restaurantName,
      content: content,
      limitMember: limitMember,
      locationId: locationId,
      meetingDate: meetingDate,
    }))
    history.push('/')
  }

  const saveFile = (e) => {
    setimgUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleRegion = (e) => {
    setlocationId(e.target.value);
  };
  const handlePeople = (e) => {
    setlimitMember(e.target.value);
  };
  const handlename = (e) => {
    setMeetingTitle(e.target.value);
  };
  const handlerest = (e) => {
    setRestaurantName(e.target.value);
  };
  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleDate = (e) => {
    setmeetingDate(e.target.value)
  }

  return (
    <React.Fragment>
      <Wrap>
        <Grid>
          <TableHeader>
            <Grid padding="5px">
              <Image
                shape="preview"
                src={imgUrl}
                _onClick={() => { history.push('/login') }}
              />
              <input type="file" onChange={saveFile} />

            </Grid>
            <Grid padding="5px" margin="120px 0px 0px 0px">
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <TextField fullWidth label="모임이름" id="meetingTitle" value={meetingTitle}
                    onChange={handlename} />
                </FormControl>
              </Box>

              <br />

              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <TextField fullWidth label="맛집이름" id="name" value={restaurantName}
                    onChange={handlerest} />
                </FormControl>
              </Box>

              <br />
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">지역선택</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={locationId}
                    label="지역선택"
                    onChange={handleRegion}
                  >
                    <MenuItem value={11}>서울</MenuItem>
                    <MenuItem value={28}>인천</MenuItem>
                    <MenuItem value={30}>대전</MenuItem>
                    <MenuItem value={29}>광주</MenuItem>
                    <MenuItem value={27}>대구</MenuItem>
                    <MenuItem value={31}>울산</MenuItem>
                    <MenuItem value={26}>부산</MenuItem>
                    <MenuItem value={41}>경기</MenuItem>
                    <MenuItem value={42}>강원</MenuItem>
                    <MenuItem value={43}>충북</MenuItem>
                    <MenuItem value={44}>충남</MenuItem>
                    <MenuItem value={45}>전북</MenuItem>
                    <MenuItem value={46}>전남</MenuItem>
                    <MenuItem value={47}>경북</MenuItem>
                    <MenuItem value={48}>경남</MenuItem>
                    <MenuItem value={50}>제주</MenuItem>
                    <MenuItem value={36}>세종</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <br />
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">모집인원</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={limitMember}
                    label="모집인원"
                    onChange={handlePeople}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

          </TableHeader>
          <Grid padding="16px">
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <TextField id="outlined-multiline-flexible"
                  label="입력"
                  multiline
                  rows={5}
                  value={content}
                  onChange={handleChange}
                />
              </FormControl>
            </Box>

            <Grid >
              <Text bold size="20px">
                마감일 :
                <input type="datetime-local" label="마감일" min={date}
                  onChange={handleDate} />
              </Text>

            </Grid>
          </Grid>
        </Grid>
        <Grid padding="16px">
          {is_edit ? (
            <Button text="게시글 수정" _onClick={editpost}></Button>
          ) : (
            <Button text="게시글 작성" _onClick={addpost}></Button>
          )}
        </Grid>
      </Wrap>
    </React.Fragment >
  );
};


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

export default PostWrite;