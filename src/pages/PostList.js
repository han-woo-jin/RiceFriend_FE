import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import { useSelector, useDispatch } from "react-redux";
import { actionsCreators as postActions } from "../redux/modules/post";
import { Button } from "../elements";
import { history } from "../redux/configStore";
import { apis, instance } from "../shared/axios";
import { Grid, } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';


import Paper from '@mui/material/Paper';
const PostList = (props) => {

  const dispatch = useDispatch()

  const [post_list, setPostList] = useState([]);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    apis.getPost('/api/post',)
      .then((response) => {
        setPostList(response.data)
      }).catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={16}>
          {post_list.map((p, i) => {
            return (
              <Grid item xs={4}>
                <Post key={i} {...p} />
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </React.Fragment>

  )
}


export default PostList;