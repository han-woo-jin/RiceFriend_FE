import React from 'react';
import { Image, Text, Button, Grid } from '../elements'
import styled from 'styled-components';
import { history } from '../redux/configStore';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import AddTaskIcon from '@mui/icons-material/AddTask';
import NotesIcon from '@mui/icons-material/Notes';

const Post = (props) => {

  return (
    <Grid _onClick={() => { history.push(`/post/${props.id}`) }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title={props.meetingTitle}
          subheader={props.name}
        />
        <CardMedia
          component="img"
          height="194"
          image={props.imgUrl}
        />
        <CardContent>
          <Text margin="0px" size="20px">
            지역 : {props.locationName}
          </Text>
          <Text margin="5px 0px" size="20px">
            모집인원 : {props.limitMember} 명
          </Text>
          <Text margin="0px" size="20px">
            모집자 : {props.nickname}
          </Text>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to join">
            <AddTaskIcon />
            <Text margin="0px 0px 0px 10px" size='24px'>{props.userCount} / {props.limitMember}</Text>
          </IconButton>
          <IconButton aria-label="note">
            <NotesIcon />
            <Text margin="0px 0px 0px 10px" size='24px'>{props.commentCnt}</Text>
          </IconButton>
          <Text margin="0px 0px 0px 30px" size="24px">
            마감일 : {props.meetingDate}
          </Text>
        </CardActions>
      </Card>
    </Grid>
  )
}

Post.defaultProps = {
  meetingTitle: "우대갈비 뜯으러 갈 사람!!",
  imgUrl: 'https://mblogthumb-phinf.pstatic.net/MjAyMDAyMjdfMTk1/MDAxNTgyNzMxMDQ5Njkw.ix16dWc4vxLvK-RLLVqZPnYS4Zus4xlpa7u_qJWchKYg.f4t2_bt1WaYl_1jNhOTESDf1J2JTBjAIamrNVyZ9CBog.JPEG.queen7165/DSC04357.JPG?type=w800',
  name: '몽탄 용산점',
  nickname: '음바페',
  limitMember: 4,
  userCount: 0,
  locationName: '서울',
  meetingDate: '2022-02-16',
  commentCnt: 0,
}



export default Post;