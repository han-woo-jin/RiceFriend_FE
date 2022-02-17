import React from "react";
import { Text, Input, Grid, Button } from "../elements";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from "../shared/common";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';

import { yellow, grey } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1045,
    minWidth: 345,
    backgroundColor: grey[200],
  },
}));

const Signup = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordCheck, setPasswordCheck] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [gender, setGender] = React.useState("")

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changeNickname = (e) => {
    setNickname(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
  };
  const changeGender = (e) => {
    setGender(e.target.value);
  };

  const signup = () => {
    if (email === "" || password === "" || nickname === "") {
      window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
      return;
    }
    // 이메일 형식 Check
    if (!emailCheck(email)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }
    // 비밀번호 Check
    if (password !== passwordCheck) {
      window.alert("패스워드와 패스워드 확인이 일치하지 않습니다!");
      return;
    }
    console.log(email, nickname, password, gender)
    dispatch(userActions.signupAction(email, password, passwordCheck, nickname, gender));

    history.push('/')
  };
  const classes = useStyles();


  return (
    <React.Fragment>
      <Grid margin="auto" width="980px">

        <Card className={classes.root}>

          <Grid padding="0px">
            <Text size="64px" bold centertext>
              <>
                <img alt='' src="https://ricefriendimage.s3.ap-northeast-2.amazonaws.com/babfriend.png" width="200px" />
                <br></br>
              </>
              회원가입
            </Text>
            <Grid padding="0px 30px 16px 30px">
              <FormControl fullWidth>
                <TextField fullWidth
                  variant="standard"

                  placeholder="아이디를 입력해주세요. ex)aaa@aaa.com"
                  label="아이디" email="아이디" value={email}

                  color='primary'
                  onChange={changeEmail} />
              </FormControl>
            </Grid>
            <Grid padding="30px">
              <FormControl fullWidth>
                <TextField fullWidth
                  variant="standard"
                  placeholder='닉네임을 입력해주세요.'
                  color='primary'
                  label="닉네임" email="닉네임"
                  value={nickname}
                  onChange={changeNickname} />
              </FormControl>
            </Grid>
            <Grid padding="30px">
              <FormControl>
                <FormLabel email="demo-row-radio-buttons-group-label">성별을 선택하세요</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={gender}
                  onChange={changeGender}
                >
                  <FormControlLabel value="male" control={<Radio />} label="남자" />
                  <FormControlLabel value="female" control={<Radio />} label="여자" />

                </RadioGroup>
              </FormControl>

            </Grid>
            <Grid padding="30px">
              <FormControl fullWidth>
                <TextField fullWidth
                  variant="standard"
                  label="비밀번호"
                  placeholder='비밀번호를 입력해주세요'
                  email="비밀번호"
                  value={password} type="password"
                  color='primary'
                  onChange={changePassword} />
              </FormControl>
            </Grid>
            <Grid padding="30px">
              <FormControl fullWidth>
                <TextField fullWidth
                  variant="standard"
                  email="비밀번호확인"
                  label="비밀번호확인"
                  placeholder='비밀번호를 다시 입력해주세요'
                  color='primary'
                  value={passwordCheck} type="password"
                  onChange={changePasswordCheck} />
              </FormControl>
            </Grid>

            <Grid padding="30px">
              <Button
                text="회원가입하기"
                _onClick={signup}
                is_active={email && password && nickname && passwordCheck ? false : true}
              ></Button>
            </Grid>
            <Text centertext>아이디가 있으신가요? <span><a href='./login'>로그인하기</a></span></Text>
          </Grid>
        </Card>
      </Grid>
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