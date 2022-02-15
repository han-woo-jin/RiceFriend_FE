import React from "react";
import { useSelector } from "react-redux";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { actionCreators as imageActions } from "../redux/modules/image";
import { styled } from '@mui/material/styles';
// import { actionCreators as imageActions } from "../redux/modules/image";

import FormControl from '@mui/material/FormControl';
const Upload = (props) => {

  const dispatch = useDispatch();

  const fileInput = React.useRef();
  const filePreview = () => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      console.log(reader.result);
      console.log(file);
      dispatch(imageActions.setPreview(reader.result));
    };
  };
  const Input = styled('input')({
    display: 'none',
  });
  return (
    <React.Fragment>
      <Stack direction="row" alignItems="center" spacing={2}>
        <label htmlFor="contained-button-file">
          <Input ref={fileInput} onChange={filePreview} accept="image/*" id="contained-button-file" multiple type="file" />
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label>
        {/* <label htmlFor="icon-button-file">
          <Input accept="image/*" id="icon-button-file" type="file" />
          <IconButton color="primary" aria-label="upload picture" component="span">
            <PhotoCamera />
          </IconButton>
        </label> */}
      </Stack>
    </React.Fragment>
  );
};

export default Upload;