/* eslint-disable */

import React from 'react';
import { Image, Text, Grid } from '../elements'
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
import { CardActionArea } from '@mui/material';
import Ggrid from '../elements/Ggrid';


const Post = (props) => {
  const dday = props.meetingDate.split("T")[0];

  return (
    <Ggrid
      shadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
      transition="all ease 0.5s"
      hovertransition=" scale( 1.05, 1.05 )"
      hovercolor="#D1DEF1"
      hovershadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
      border_radius="20px"
      bgcolor="white"
      margin="5px"
      width="370px"
      height="458px"
    >
      <Grid >
        <Card sx={{ maxWidth: 400, minWidth: 200 }}>
          <CardActionArea >

            <CardHeader
              title={props.meetingTitle}
              subheader={props.restaurantName}
            ></CardHeader>

            <CardMedia
              component="img"
              height="200"
              image={props.imgUrl}
            />
            <CardContent>
              <Text margin="0px" size="20px">
                지역 : {props.locationName}
              </Text>
              <Text margin="0px 0px" size="20px">
                모집인원 : {props.limitMember} 명
              </Text>
              <Text margin="0px" size="20px">
                모집자 : {props.nickname}
              </Text>
              <Text margin="0px" size="20px">
                모임일자 : {dday}
              </Text>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to join" onClick={() => { history.push('/login') }}>
                <AddTaskIcon />
                <Text margin="0px 0px 0px 10px" size='24px'>{props.userCount} / {props.limitMember}</Text>
              </IconButton>
              <IconButton aria-label="note">
                <NotesIcon />
                <Text margin="0px 0px 0px 10px" size='24px'>{props.commentCnt}</Text>
              </IconButton>
            </CardActions>
          </CardActionArea>
        </Card>
      </Grid>
    </Ggrid>

  )
}

Post.defaultProps = {
  meetingTitle: "우대갈비 뜯으러 갈 사람!!",
  imgUrl: 'https://mblogthumb-phinf.pstatic.net/MjAyMDAyMjdfMTk1/MDAxNTgyNzMxMDQ5Njkw.ix16dWc4vxLvK-RLLVqZPnYS4Zus4xlpa7u_qJWchKYg.f4t2_bt1WaYl_1jNhOTESDf1J2JTBjAIamrNVyZ9CBog.JPEG.queen7165/DSC04357.JPG?type=w800',
  restaurantName: '몽탄 용산점',
  nickname: '음바페',
  limitMember: 4,
  userCount: 0,
  locationName: '서울',
  meetingDate: '2022-02-16',
  commentCnt: 0,
}



export default Post;