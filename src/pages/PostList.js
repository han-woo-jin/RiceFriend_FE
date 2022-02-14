import React, { useState } from "react";
import Post from "../components/Post";
import { useSelector, useDispatch } from "react-redux";
import { actionsCreators as postActions } from "../redux/modules/post";
import { Button, Grid } from "../elements";
import { history } from "../redux/configStore";

const PostList = (props) => {

    const post_list = useSelector(state => state.post.list)

    return (
        <React.Fragment>

            <Grid is_flex>
                {post_list.map((p, i) => {
                    return (
                        <Post key={i} {...p} />
                    )
                })}
            </Grid>

        </React.Fragment>

    )
}


export default PostList;