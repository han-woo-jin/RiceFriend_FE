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
  const token = localStorage.getItem('token')

  const [meetingTitle, setMeetingTitle] = useState()
  const [imgUrl, setimgUrl] = useState();
  const [name, setName] = useState();
  const [limitMember, setlimitMember] = useState();
  const [locationName, setlocationName] = useState();
  const [meetingDate, setmeetingDate] = useState();
  const [contents, setContents] = useState()
  const date = moment().format("YYYY-MM-DD")

  // postInfo ? postInfo.contents : "" 같은 수정식별자 달아주기



  const addpost = () => {
    dispatch(postActions.addPost({
      meetingTitle: meetingTitle,
      imgUrl: imgUrl,
      name: name,
      contents: contents,
      limitMember: limitMember,
      locationName: locationName,
      meetingDate: meetingDate,
    }))
    history.push('/')
  }

  //수정관련
  const id = props.match.params.id
  const is_edit = id ? true : false
  // let postInfo = is_edit ? post.find((p) => p.postId === id) : null

  const editpost = () => {
    dispatch(postActions.editPost({
      meetingTitle: meetingTitle,
      imgUrl: imgUrl,
      name: name,
      contents: contents,
      limitMember: limitMember,
      locationName: locationName,
      meetingDate: meetingDate,
    }))
    history.push('/')
  }

  const saveFile = (e) => {
    setimgUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleRegion = (e) => {
    setlocationName(e.target.value);
  };
  const handlePeople = (e) => {
    setlimitMember(e.target.value);
  };
  const handlename = (e) => {
    setMeetingTitle(e.target.value);
  };
  const handlerest = (e) => {
    setName(e.target.value);
  };
  const handleChange = (e) => {
    setContents(e.target.value);
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
                  <TextField fullWidth label="맛집이름" id="name" value={name}
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
                    value={locationName}
                    label="지역선택"
                    onChange={handleRegion}
                  >
                    <MenuItem value={"서울"}>서울</MenuItem>
                    <MenuItem value={"인천"}>인천</MenuItem>
                    <MenuItem value={"대전"}>대전</MenuItem>
                    <MenuItem value={"광주"}>광주</MenuItem>
                    <MenuItem value={"대구"}>대구</MenuItem>
                    <MenuItem value={"울산"}>울산</MenuItem>
                    <MenuItem value={"부산"}>부산</MenuItem>
                    <MenuItem value={"경기"}>경기</MenuItem>
                    <MenuItem value={"강원"}>강원</MenuItem>
                    <MenuItem value={"충북"}>충북</MenuItem>
                    <MenuItem value={"충남"}>충남</MenuItem>
                    <MenuItem value={"전북"}>전북</MenuItem>
                    <MenuItem value={"전남"}>전남</MenuItem>
                    <MenuItem value={"경북"}>경북</MenuItem>
                    <MenuItem value={"경남"}>경남</MenuItem>
                    <MenuItem value={"제주"}>제주</MenuItem>
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
                  value={contents}
                  onChange={handleChange}
                />
              </FormControl>
            </Box>

            <Grid >
              <Text bold size="20px">
                마감일 :
                <input type="date" label="마감일" min={date}
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