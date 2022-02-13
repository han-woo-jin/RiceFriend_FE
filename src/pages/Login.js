import React from "react";
import { Text, Input, Grid, Button, Image } from "../elements";
import { emailCheck } from "../shared/common";
import { useHistory } from 'react-router-dom';
import { setCookie } from '../shared/Cookie';
import styled from 'styled-components';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const changeId = (e) => {
    setId(e.target.value);
  }

  const changePwd = (e) => {
    setPwd(e.target.value);
  }



  const login = () => {

    console.log(id);

    if (id === "" || pwd === "") {
      window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
      return;
    }

    if (!emailCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }
    // setCookie("user_id", id, 5);
    // setCookie("user_pwd", pwd, 5);

    dispatch(userActions.loginAction({ user_name: "perl" }));
  };

  return (
    <React.Fragment>
      <Wrap>
        <Grid padding="16px">

          <Text size="32px" bold centertext >
            <>
              <img alt='babfriend' src="https://ricefriendimage.s3.ap-northeast-2.amazonaws.com/ricefriend.png" style={{ background: "white", height: "20vh", width: "15vw" }} />
              <br></br>
            </>

            로그인
          </Text>

          <Grid padding="16px 0px">
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <TextField fullWidth
                  placeholder='아이디를 입력해주세요.'
                  label="아이디" id="아이디" value={id}
                  onChange={changeId} />
              </FormControl>
            </Box>

          </Grid>


          <Grid padding="16px 0px">
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <TextField fullWidth
                  placeholder='비밀번호를 입력해주세요.'
                  label="패스워드" id="패스워드" value={pwd}
                  onChange={changePwd} />
              </FormControl>
            </Box>
          </Grid>
          <Grid padding="16px 0px">
            <Button
              text="로그인하기"
              _onClick={() => {
                login();
              }}
            ></Button>
          </Grid>
          <Text centertext>밥친구가 처음이신가요? <span><a href='./signup'>회원가입하기</a></span></Text>
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

export default Login;