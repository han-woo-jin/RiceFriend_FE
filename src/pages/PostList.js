import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import { useSelector, useDispatch } from "react-redux";
import { actionsCreators as postActions } from "../redux/modules/post";
import { Button, Grid } from "../elements";
import { history } from "../redux/configStore";
import { apis, instance } from "../shared/axios";

const PostList = (props) => {

    const dispatch = useDispatch()

    const [post_list, setPostList] = useState([]);

    useEffect( () => {
        apis.getPost('/api/post',)
        .then(function(response){
            setPostList(response.data)
        }).catch(function(error){
            console.log(error)
        })
    },[])

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