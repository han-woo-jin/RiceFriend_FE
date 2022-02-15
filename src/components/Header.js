import React from "react";
import { Grid, Text, Button } from '../elements'
import styled from "styled-components";
import { history } from '../redux/configStore'
import { getCookie, deleteCookie } from '../shared/Cookie';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as userActions } from "../redux/modules/user";


const Header = (props) => {

  const dispatch = useDispatch();
  let is_login = useSelector((state) => state.user.is_login);

  const is_token = document.cookie

  if (is_login === false && is_token === true) {
    is_login = true;
  }

  if (is_token) {
    return (
      <React.Fragment>
        <HeaderForm>
          <Grid is_flex>
            <img alt="" src="https://ricefriendimage.s3.ap-northeast-2.amazonaws.com/babfriend.png" width="100px" />
            <Grid is_flex>
              <LogoText>
                <Text margin='0px' bold size="36px">밥친구</Text>
                <Text margin='0px' bold size="30px">맛집 탐방 모임 커뮤니티</Text>
              </LogoText>


              <Grid is_flex width="200px" margin="2em">
                <Button width='100px' margin='2px' padding='8px' bold
                  _onClick={() => {
                    dispatch(userActions.logoutAction());
                    alert("로그아웃 되었습니다.");
                    window.location.href='/'
                  }} text='로그아웃' ></Button>
                <Button width='120px' margin='2px' padding='8px' bold _onClick={() => history.push('/signup')} text='회원가입' ></Button>
              </Grid>
            </Grid>
          </Grid>
        </HeaderForm>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <HeaderForm>
        <Grid is_flex>
          <img alt='' src="https://ricefriendimage.s3.ap-northeast-2.amazonaws.com/babfriend.png" width="100px" />
          <Grid is_flex>
            <LogoText>
              <Text margin='0px' bold size="36px">밥친구</Text>
              <Text margin='0px' bold size="30px">맛집 탐방 모임 커뮤니티</Text>
            </LogoText>


            <Grid is_flex width="200px" margin="2em">
              <Button width='100px' margin='2px' padding='8px' bold _onClick={() => history.push('/login')} text='로그인' ></Button>
              <Button width='120px' margin='2px' padding='8px' bold _onClick={() => history.push('/signup')} text='회원가입' ></Button>
            </Grid>
          </Grid>
        </Grid>
      </HeaderForm>
    </React.Fragment>
  )
};

const HeaderForm = styled.div`
background-color: rgba(249,125,102,1);
padding: 0px 70px;
height: 120px;
`

const LogoText = styled.div`
margin : 10px;
`



export default Header;