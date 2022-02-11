import React from "react";
import { Text, Input, Grid, Button } from "../elements";
import { useHistory } from 'react-router-dom';
// import { useDispatch } from "react-redux";
// import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from "../shared/common";

const Signup = (props) => {
  //  const dispatch = useDispatch();
  const history = useHistory();
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");
  const [user_name, setUserName] = React.useState("");
  const [성별, 성별체크] = React.useState("")

  const signup = () => {
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
    console.log(id, pwd, 성별)
    //    dispatch(userActions.signupFB(id, pwd, user_name));
  };


  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="36px" bold>
          회원가입
        </Text>
        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요 ex) aaa@aaa.com"
            value={id}
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Grid>
        <Grid padding="16px 0px">
          <Input
            label="닉네임"
            placeholder="닉네임를 입력해주세요"
            value={user_name}
            _onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </Grid>
        <Grid padding="16px 0px">

          <label htmlFor='label'>성별 : </label>
          <input
            type='radio'
            name='gender'
            id='male'
            value="남성"
            onChange={(e) => {
              성별체크(e.target.value);
            }}
          />

          <label htmlFor='male'>남</label>
          <input
            type='radio'
            name='gender'
            id='female'
            value="여성"
            onChange={(e) => {
              성별체크(e.target.value);
            }}
          />

          <label htmlFor='female'>여</label>

        </Grid>
        <Grid padding="16px 0px">
          <Input
            label="비밀번호"
            placeholder="비민번호를 입력해주세요"
            value={pwd}
            type="password"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </Grid>
        <Grid padding="16px 0px">
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요"
            value={pwd_check}
            type="password"
            _onChange={(e) => {
              setPwdCheck(e.target.value);
            }}
          />
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
    </React.Fragment>
  );
};

Signup.defaultProps = {};

export default Signup;