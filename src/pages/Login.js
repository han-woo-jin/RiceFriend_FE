import React from "react";
import { Text, Grid, Button } from "../elements";
import { emailCheck } from "../shared/common";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import { yellow, grey } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1045,
    minWidth: 345,
    backgroundColor: grey[200],
  },
}));
const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  }

  const changePassword = (e) => {
    setPassword(e.target.value);
  }
  const classes = useStyles();

  const login = () => {

    console.log(email);

    if (email === "" || password === "") {
      window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
      return;
    }

    if (!emailCheck(email)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }
    // setCookie("user_id", id, 5);
    // setCookie("user_pwd", pwd, 5);

    dispatch(userActions.loginAction(email, password));

    history.push('/')
  };

  return (
    <React.Fragment>

      <Grid margin="auto" width="980px">

        <Card className={classes.root}>
          <Grid padding="10px">

            <Text size="64px" bold centertext >
              <>
                <img alt='' src="https://ricefriendimage.s3.ap-northeast-2.amazonaws.com/babfriend.png" width="200px" />
                <br></br>
              </>

              로그인
            </Text>

            <Grid padding="16px">
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <TextField fullWidth
                    id="outlined-basic"
                    variant="standard"
                    placeholder='아이디를 입력해주세요.'
                    label="아이디" value={email}
                    onChange={changeEmail} />
                </FormControl>
              </Box>

            </Grid>


            <Grid padding="16px">
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <TextField fullWidth
                    variant="standard"
                    type="password"
                    placeholder='비밀번호를 입력해주세요.'
                    label="비밀번호" id="패스워드" value={password}
                    onChange={changePassword} />
                </FormControl>
              </Box>
            </Grid>
            <Grid padding="16px">
              <Button
                text="로그인"
                _onClick={() => {
                  login();
                }}
              ></Button>
            </Grid>
            <Grid padding="5px 16px 36px 16px">
              <Button
                text="회원가입"
                _onClick={() => {
                  history.push('/signup')
                }}
              ></Button>
            </Grid>
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
background-color: white;
`

export default Login;