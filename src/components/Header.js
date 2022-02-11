import React from "react";
import Grid from '../elements/Grid'
import Button from '../elements/Button'
import Text from '../elements/Text'
import styled from "styled-components";

const Header = () => {

    return (
        <React.Fragment>
            <HeaderForm>
                <Grid is_flex>
                    <img src="img/babfriend.png" width="100px" />
                    <Grid is_flex>
                        <LogoText>
                            <Text margin='0px' size="36px">밥친구</Text>
                            <Text margin='0px' size="30px">맛집 탐방 모임 커뮤니티</Text>
                        </LogoText>

                        <Grid is_flex width="200px" margin="2em">
                            <Button width='100px' margin='2px' padding='8px' bold text='로그인' ></Button>
                            <Button width='120px' margin='2px' padding='8px' bold text='회원가입' ></Button>
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
`



export default Header;