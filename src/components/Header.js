import React from "react";
import Grid from '../elements/Grid'
import Button from '../elements/Button'

const Header = () => {

    return (
        <Grid is_flex padding='4px 16px' bg="rgba(190,44,44,0.5)">
            <Grid>
                <Button>밥친구</Button>
            </Grid>
            <Grid>
                <Button>아무거나</Button>
            </Grid>

            <Button width='100px' margin='2px' padding='8px' text='로그인' ></Button>
            <Button width='150px' margin='2px' padding='8px' text='회원가입' ></Button>
        </Grid>
    )
};



export default Header;