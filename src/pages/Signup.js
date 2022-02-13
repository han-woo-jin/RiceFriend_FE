import React from "react";
import { Text, Input, Grid, Button } from "../elements";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from "../shared/common";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';

import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const Signup = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");
  const [user_name, setUserName] = React.useState("");
  const [성별, 성별체크] = React.useState("")

  const handleChange = (event) => {
    성별체크(event.target.value);
  };

  const signup = () => {
    if (id === "" || pwd === "" || user_name === "") {
      window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
      return;
    }
    // 이메일 형식 체크
    if (!emailCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }
    // 비밀번호 체크
    if (pwd !== pwd_check) {
      window.alert("패스워드와 패스워드 확인이 일치하지 않습니다!");
      return;
    }
    console.log(id, user_name, pwd, 성별)
    dispatch(userActions.signupAction(id, pwd, user_name));
  };


  return (
    <React.Fragment>
      <Wrap>
        <Grid padding="16px">
          <Text size="36px" bold centertext>
            <>
              <img alt='babfriend' src="https://ricefriendimage.s3.ap-northeast-2.amazonaws.com/ricefriend.png" style={{ background: "white", height: "20vh", width: "15vw" }} />
              <br></br>
            </>
            회원가입
          </Text>
          <Grid padding="16px 0px">
            <FormControl fullWidth>
              <TextField fullWidth

                placeholder="ID를 입력해주세요. ex)aaa@aaa.com"
                label="ID" id="아이디" value={id}

                color='primary'
                onChange={(e) => {
                  setId(e.target.value);
                }} />
            </FormControl>
          </Grid>
          <Grid padding="16px 0px">
            <FormControl fullWidth>
              <TextField fullWidth
                placeholder='닉네임을 입력해주세요.'
                color='primary'
                label="닉네임" id="닉네임"
                value={user_name}
                onChange={(e) => {
                  setUserName(e.target.value);
                }} />
            </FormControl>
          </Grid>
          <Grid padding="16px 0px">
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">성별</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={성별}
                onChange={handleChange}
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />

              </RadioGroup>
            </FormControl>

          </Grid>
          <Grid padding="16px 0px">
            <FormControl fullWidth>
              <TextField fullWidth
                label="비밀번호"
                placeholder='비밀번호를 입력해주세요'
                id="비밀번호"
                value={pwd} type="password"
                color='primary'
                onChange={(e) => {
                  setPwd(e.target.value);
                }} />
            </FormControl>
          </Grid>
          <Grid padding="16px 0px">
            <FormControl fullWidth>
              <TextField fullWidth
                id="비밀번호확인"
                label="비밀번호확인"
                placeholder='비밀번호를 다시 입력해주세요'
                color='primary'
                value={pwd_check} type="password"
                onChange={(e) => {
                  setPwdCheck(e.target.value);
                }} />
            </FormControl>
          </Grid>
          <Button
            text="회원가입하기"
            _onClick={() => {
              signup();
            }}
            is_active={id && pwd && user_name && pwd_check ? false : true}
          ></Button>
          <Text centertext>아이디가 있으신가요? <span><a href='./login'>로그인하기</a></span></Text>
        </Grid>
      </Wrap>
    </React.Fragment>
  );
};


const Wrap = styled.div`
max-width : 1100px;
min-width:  720px;
min-height : 100vh;
margin : auto;
`
Signup.defaultProps = {};

export default Signup;