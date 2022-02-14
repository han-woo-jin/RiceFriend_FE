import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../elements";

// import { actionCreators as imageActions } from "../redux/modules/image";

const Upload = (props) => {
  const uploading = useSelector((state) => state.image.uploading);
  const fileInput = React.useRef();

  const selectFile = (e) => {
    // e.target은 input이죠!
    // input이 가진 files 객체를 살펴봅시다.

    const reader = new FileReader();
    const file = e.target.files[0];

    // 파일 내용을 읽어옵니다.
    reader.readAsDataURL(file);

    // 읽기가 끝나면 발생하는 이벤트 핸들러예요! :)
    reader.onloadend = () => {
      // reader.result는 파일의 컨텐츠(내용물)입니다!
      console.log(reader.result);
      //dispatch(imageActions.setPreview(reader.result));

    };
  };

  // const uploadFB = () => {
  //   if (!fileInput.current || fileInput.current.files.length === 0) {
  //     window.alert("파일을 선택해주세요!");
  //     return;
  //   }

  //   //dispatch(imageActions.uploadImageFB(fileInput.current.files[0]));
  // };

  return (
    <React.Fragment>
      <input
        type="file"
        ref={fileInput}
        onChange={selectFile}
        disabled={uploading}
      />
      <Button>업로드하기</Button>
    </React.Fragment>
  );
};

export default Upload;