import React from "react";
import { Grid, Text, Button, Image, Input } from "../elements";

import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const PostWrite = (props) => {
  const [지역, 지역선택] = React.useState("");
  const [인원, 인원선택] = React.useState("");
  const [모임이름, 모임이름변경] = React.useState("");
  const [맛집이름, 맛집이름변경] = React.useState("");
  const [입력, 입력변경] = React.useState("");
  const [이미지, 이미지변경] = React.useState("");

  const saveFile = (e) => {
    이미지변경(URL.createObjectURL(e.target.files[0]));
  };

  const handleRegion = (e) => {
    지역선택(e.target.value);
  };
  const handlePeople = (e) => {
    인원선택(e.target.value);
  };
  const handlename = (e) => {
    모임이름변경(e.target.value);
  };
  const handlerest = (e) => {
    맛집이름변경(e.target.value);
  };
  const handleChange = (e) => {
    입력변경(e.target.value);
  };

  const post_id = props.match.params.id;
  const is_edit = post_id ? true : false;
  const history = useHistory();

  return (
    <React.Fragment>
      <Wrap>
        <Grid>
          <TableHeader>
            <Grid padding="5px">
              <Image
                shape="preview"
                src={이미지}
                _onClick={() => { history.push('/login') }}
              />
              <input type="file" onChange={saveFile} />

            </Grid>
            <Grid padding="5px">
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <TextField fullWidth label="모임이름" id="모임이름" value={모임이름}
                    onChange={handlename} />
                </FormControl>
              </Box>

              <br />

              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <TextField
                    fullWidth label="맛집이름" id="맛집이름" value={맛집이름}
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
                    value={지역}
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
                    value={인원}
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
                  value={입력}
                  onChange={handleChange}
                />
              </FormControl>
            </Box>

          </Grid>
        </Grid>
        <Grid padding="16px">
          {is_edit ? (
            <Button text="게시글 수정" _onClick={() => { }}></Button>
          ) : (
            <Button text="게시글 작성" _onClick={() => { console.log(모임이름, 맛집이름, 지역, 인원, 입력) }}></Button>
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