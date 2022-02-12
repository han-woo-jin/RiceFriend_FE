import React, { useState } from "react";
import Post from "../components/Post";
import { useSelector, useDispatch } from "react-redux";
import { actionsCreators as postActions } from "../redux/modules/post";
import { Button, Grid } from "../elements";
import styled from "styled-components";
import AddCircleIcon from '@mui/icons-material/AddCircle';


const PostList = () => {

    const post_list = useSelector(state => state.post.list)

    return (
        <React.Fragment>

            <Grid is_flex _onClick={null}>
                {post_list.map((p, i) => {
                    return (
                        <Post key={i} {...p} />
                    )
                })}
            </Grid>

            <Button is_float>+</Button>
        </React.Fragment>

    )
}


export default PostList;