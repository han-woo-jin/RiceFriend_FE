import React from 'react';
import {Grid, Input, Button} from '../elements'
import { useState } from 'react';
import { actionCreators as commentActions } from '../redux/modules/comment';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../redux/configStore';

const CommentWrite = (props) => {
    const dispatch = useDispatch()
    const [comment_text, setCommentText] = useState()

    const id = props.meetingId

    const onChange = (e) => {
        setCommentText(e.target.value);
    }

    const write = () => {
        const data = {
            content: comment_text
        }
        console.log(data)
        dispatch(commentActions.addCommentAction(id, data))
        document.location.reload();
    }

    return (
        <React.Fragment>
            <Grid padding='16px' is_flex>

                <Input 
                label='댓글달기'
                placeholder='댓글 내용을 입력해주세요!'
                _onChange={onChange}
                value={comment_text}
                is_Submit 
                onSubmit={write}
                />
                <Button width='50px' margin='14px 2px 0px 2px' _onClick={write} >작성</Button>

            </Grid>
        </React.Fragment>
    )

}

export default CommentWrite