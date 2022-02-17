import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import { useSelector, useDispatch } from "react-redux";
import { actionsCreators as postActions } from "../redux/modules/post";
import { history } from "../redux/configStore";
import { apis, instance } from "../shared/axios";
import { Grid, } from '@mui/material';
import Box from '@mui/material/Box';
import { Button } from "../elements"

const PostList = (props) => {
  const token = document.cookie;

  const dispatch = useDispatch()

  const [post_list, setPostList] = useState([]);

  useEffect(() => {
    apis.getPost()
      .then(function (response) {
        setPostList(response.data)
      }).catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <React.Fragment>

      <Grid margin="50px 0px 0px 150px">

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={16}>
            {post_list.map((p, i) => {
              return (

                <Grid key={i} onClick={() => {
                  if (token) {
                    history.push(`/meeting/${p.meetingId}`)
                  } else {
                    window.alert('로그인 먼저 해주세요!')
                    history.push('/login')
                  }
                }} item xs={4}>
                  <Post key={i} {...p} />
                </Grid>

              )
            })}
          </Grid>
        </Box>
      </Grid >
    </React.Fragment>

  )
}

export default PostList;