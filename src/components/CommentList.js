import React from 'react';
import { Grid, Image, Text, Button } from '../elements'
import { useState } from 'react';
import { apis, instance } from '../shared/axios';
import styled from 'styled-components';
import { history } from '../redux/configStore';

import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as commentActions } from '../redux/modules/comment';

const CommentList = (props) => {

    const dispatch = useDispatch()
    const [comment_list, setCommentList] = useState([])

    const id = props.meetingId

    React.useEffect(() => {
        instance.get(`api/meeting/${props.meetingId}`)
            .then((response) => {
                console.log(response)
                setCommentList(response.data.commentResponseDtos)
            })
            .catch((error) => console.log(error))
    }, [])

    return (
        <React.Fragment>
            <Grid padding='16px'>
                {comment_list.map((c, i) => {
                    return <CommentItem key={i} id={id} {...c} />
                })}
            </Grid>
        </React.Fragment>
    );
};

CommentList.defaultProps = {
    meetingId: null,
}

export default CommentList


const CommentItem = (props) => {

    const { nickname, createdAt, content, } = props;

    const dispatch = useDispatch()

    const meetingId = props.id
    const commentId = props.commentId
    console.log(meetingId, commentId)

    const deleteComment = () => {
        dispatch(commentActions.delCommentAction(meetingId, commentId))
    }

    return (
        <Grid is_flex >
            <Grid width="150px">
                <Text bold size="20px">{nickname}</Text>
            </Grid>
            <Grid is_flex margin='0px 16px'>
                <Grid is_flex>
                    <Text margin='0px' size="20px">{content}</Text>
                </Grid>
                <Grid is_flex>
                    <Timegrid>
                        <Text margin='0px' size="20px">{createdAt}</Text>
                    </Timegrid>
                </Grid>
            </Grid>
            <CommentBtn>
                <Button margin="0px 5px" _onClick={deleteComment} >삭제</Button>
            </CommentBtn>
        </Grid>
    )
}

CommentItem.defaultProps = {
    user_name: 'minjae',
    user_id: '',
    post_id: 1,
    insert_dt: '2022-01-01 10:00:00',
    contents: '맛있겠네요!',
}

const CommentBtn = styled.div`
display: flex;
width: 80px;
float: right;
`
const Timegrid = styled.div`
display: flex;
margin-left: 150px;
`