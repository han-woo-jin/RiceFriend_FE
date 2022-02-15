import React, { useState } from "react";
import { Grid, Text, Button, Image, Input } from "../elements";
import Upload from "../shared/Upload";
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";
import { history } from "../redux/configStore";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as imageActions } from '../redux/modules/image';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

import moment from "moment";
import axios from 'axios';

const PostWrite = (props) => {
  const dispatch = useDispatch()
  const post = useSelector(state => state.post.list)
  const token = document.cookie

  const [imageFile, setImageFile] = useState(null);

  const [meetingTitle, setMeetingTitle] = useState()
  const [restaurantName, setRestaurantName] = useState();
  const [limitMember, setlimitMember] = useState();
  const [locationId, setlocationId] = useState();
  const [meetingDate, setmeetingDate] = useState();
  const [content, setContent] = useState()

  const date = moment().format("YYYY-MM-DD hh:mm:ss")

  const preview = useSelector(state => state.image.preview)


  const fileInput = React.useRef();

  const filePreview = (e) => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      // console.log(reader.result);
      dispatch(imageActions.setPreview(reader.result));
    };
    if (file) {
      setImageFile(file)
    }

  };


  const addpost = () => {

    if (!meetingTitle || !content || !restaurantName || !limitMember || !locationId || !meetingDate) {
      window.alert("빈 공간을 채워주세요!")
      return;
    }

    // 폼데이터 생성
    let formData = new FormData()
    // 보낼 데이터 묶음
    const data = {
      meetingTitle: meetingTitle,
      restaurantName: restaurantName,
      content: content,
      limitMember: limitMember,
      locationId: locationId,
      meetingDate: meetingDate,
    };

    // 폼데이터에 이미지 데이터 추가
    formData.append("image", imageFile)
    formData.append(
      "data",
      new Blob([JSON.stringify(data)], { type: "application/json" })
    );

    dispatch(postActions.addPostAction(formData))
    history.push('/')
  }


  //수정관련
  const id = props.match.params.id
  const is_edit = id ? true : false
  // let postInfo = is_edit ? post.find((p) => p.postId === id) : null

  const editpost = () => {
    dispatch(postActions.editPostAction({
      meetingTitle: meetingTitle,
      imgUrl: " ",
      restaurantName: restaurantName,
      content: content,
      limitMember: limitMember,
      locationName: locationId,
      meetingDate: meetingDate,
    }))
    history.push('/')
  }

  const handleRegion = (e) => {
    setlocationId(e.target.value);
  };
  const handlePeople = (e) => {
    setlimitMember(e.target.value);
  };
  const handleMeetingTitle = (e) => {
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
  const ElInput = styled('input')({
    display: 'none',
  });
  return (
    <React.Fragment>
      <Wrap>
        <Grid>
          <TableHeader>
            <Grid padding="5px">
              <Image
                shape="preview"
                src={preview ? preview : "http://via.placeholder.com/400x300"}
                _onClick={() => { history.push('/login') }}
              />
              <Stack direction="row" alignItems="center" spacing={2}>
                {/* <label htmlFor="contained-button-file">
          <Input ref={fileInput} onChange={filePreview} accept="image/*" id="contained-button-file" multiple type="file" />
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label> */}
                <label htmlFor="icon-button-file">
                  <ElInput ref={fileInput} onChange={filePreview} accept="image/*" id="icon-button-file" type="file" />
                  <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                  </IconButton>
                </label>
              </Stack>

            </Grid>
            <Grid padding="5px" margin="120px 0px 0px 0px">
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <TextField fullWidth label="모임이름" id="meetingTitle" value={meetingTitle || ""}
                    onChange={handleMeetingTitle} />
                </FormControl>
              </Box>

              <br />

              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <TextField fullWidth label="맛집이름" id="name" value={restaurantName || ""}
                    onChange={handlerest} />
                </FormControl>
              </Box>

              <br />
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">지역선택</InputLabel>
                  <Select
                    defaultValue=""
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={locationId || ""}
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

                    defaultValue=""
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={limitMember || ""}
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

            <Grid padding="16px 0px">
              <Stack component="form" noValidate spacing={3}>

                <TextField
                  defaultValue={date}
                  onChange={handleDate}
                  id="datetime-local"
                  label="Next appointment"
                  type="datetime-local"
                  sx={{ width: 250 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Stack>

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