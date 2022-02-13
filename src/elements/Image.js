import styled from 'styled-components';
import React from "react";

const Image = (props) => {
  const { shape, src, size, _onClick, cursor } = props;

  const styles = {
    src: src,
    size: size,

    cursor: cursor,
  }
  if (shape === 'preview') {
    return (
      <AspectOutter>
        <ImgInner {...styles} onClick={_onClick}></ImgInner>
      </AspectOutter>
    )
  }

  if (shape === 'rectangle') {
    return (
      <AspectOutter>
        <AspectInner {...styles} onClick={_onClick}></AspectInner>
      </AspectOutter>
    )
  }

  return (
    <React.Fragment>
      <ImageDefault {...styles} onClick={_onClick}></ImageDefault>
    </React.Fragment>
  )
}

Image.defaultProps = {
  shape: 'rectangle',
  src: 'https://ricefriendimage.s3.ap-northeast-2.amazonaws.com/1330259.png',
  size: 10,
  cursor: 'potiner',
  _onClick: () => { }
};

const ImageDefault = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);

    background-image: url("${(props) => props.src}");
    background-size: cover;
`

const AspectOutter = styled.div`
    width: 100%;
    min-width: 30px;
    max-height: 400px;
    max-width: 400px;
`;

const AspectInner = styled.div`
    position: relative;
    padding: 50%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
`;


const ImgInner = styled.div`
    position: relative;
    padding: 50%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
    background-position: center;
    object-fit: cover;

    min-width: 30px;
    max-height: 40px;
`;



export default Image;