import React from "react";
import styled from "styled-components";
const Button = (props) => {
    const {margin, padding, bg, bold, children, _onClick, text, width, cursor, disabled, color} = props;

    const styles = {
        margin: margin,
        padding: padding,
        bg: bg,
        bold: bold,
        width: width,
        cursor: cursor,
        disabled:disabled,
        color: color,
    };

    return (
        <React.Fragment>
            <Btn {...styles} onClick={_onClick}>{text ? text : children}</Btn>
        </React.Fragment>
    );
};

Button.defaultProps = {
    children: null,
    text: false,
    _onClick: () => {},
    color: "#ffffff",
    margin: false,
    width: '100%',
    bold: false,
    cursor: 'pointer',
    bg: false,
};

const Btn = styled.button`
  width: ${(props) => props.width};
  border-radius: 10px;
  height: 40px;
  color: ${(props) => (props.color)}
  border-radius: 10px;
  box-sizing: border-box;
  border: none;
  padding: ${(props) => props.padding};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")};
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  font-size: 20px;
  border: 0;
  outline: 0;
  cursor: pointer;

  &:hover {
    background-color : #f8f3ee
  }
`;

export default Button;