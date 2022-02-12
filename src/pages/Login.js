import React from "react";
import { Text, Input, Grid, Button, Image } from "../elements";
import { emailCheck } from "../shared/common";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
// import { useDispatch } from "react-redux";
// import { actionCreators as userActions } from "../redux/modules/user";
const Login = (props) => {
  // const dispatch = useDispatch();
  const history = useHistory();
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

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

    //   dispatch(userActions.loginFB(id, pwd));
  };

  return (
    <React.Fragment>
      <Grid padding="16px">

        <Text size="32px" bold centertext >
          <>
            <img alt='babfriend' src="https://ricefriendimage.s3.ap-northeast-2.amazonaws.com/ricefriend.png" style={{ background: "white", height: "20vh", width: "15vw" }} />
            <br></br>
          </>

          로그인
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요 ex) aaa@aaa.com"
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Grid>


        <Grid padding="16px 0px">
          <Input
            label="패스워드"
            placeholder="패스워드 입력해주세요"
            type="password"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
            value={pwd}
            is_submit
            onSubmit={login}
          />
        </Grid>
        <Grid padding="16px 0px">
          <Button
            text="로그인하기"
            _onClick={() => {
              console.log("로그인 했어!");
              login();
            }}
          ></Button>
        </Grid>
        <Text centertext>밥친구가 처음이신가요? <span><a href='./signup'>회원가입하기</a></span></Text>
      </Grid>
    </React.Fragment>
  );
};

const Box = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
`;


export default Login;