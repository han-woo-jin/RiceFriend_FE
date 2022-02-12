import styled from 'styled-components';
import React from "react";

const Image = (props) => {
    const {shape, src, size} = props;

    const styles = {
        src: src,
        size: size,
    }

    if(shape === 'rectangle'){
        return(
            <AspectOutter>
                <AspectInner {...styles}></AspectInner>
            </AspectOutter>
        )
    }

    return (
        <React.Fragment>
            <ImageDefault {...styles}></ImageDefault>
        </React.Fragment>
    )
}

Image.defaultProps = {
    shape: 'rectangle',
    src: 'http://img.insight.co.kr/static/2018/09/12/700/z7n04ul8ig3y27w6l6ok.jpg',
    size: 36,
};

const ImageDefault = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);

    background-image: url("${(props) => props.src}");
    background-size: cover;
`

const AspectOutter = styled.div`
    width: 100%
    max-width: 500px;
    min-width: 250px;
`;

const AspectInner = styled.div`
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
`;

export default Image;