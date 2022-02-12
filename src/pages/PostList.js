import React, { useState } from "react";
import Post from "../components/Post";
import { useSelector, useDispatch } from "react-redux";
import { actionsCreators as postActions } from "../redux/modules/post";
import { Grid } from "../elements";
import styled from "styled-components";


const PostList = () => {

    const post_list = useSelector(state => state.post.list)

    return (
        <Grid is_flex _onClick={null}>
            {post_list.map((p, i) => {
                return (
                    <Post key={i} {...p} />
                )
            })}
        </Grid>
    )
}

const Contents = styled.div`
`

export default PostList;