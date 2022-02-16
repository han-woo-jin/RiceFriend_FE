import React from "react";
import styled from "styled-components";
const Button = (props) => {
  const { margin, padding, bg, bold, children, _onClick, text, width, cursor, disabled, color, is_float } = props;

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
      </React.Fragment>
    );
  }

  const styles = {
    margin: margin,
    padding: padding,
    bg: bg,
    bold: bold,
    width: width,
    cursor: cursor,
    disabled: disabled,
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
  _onClick: () => { },
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
  color: ${(props) => (props.color)};
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
  background-color: lightgray;
  color: black;
  cursor: pointer;

  &:hover {
    background-color : black;
    color:white;
  }
`;

const FloatButton = styled.button`
  width: 60px;
  height: 60px;
  background-color: rgba(249,125,102,1);
  color: #ffffff;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 50px;
  right: 24px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background-color : #FA9705
  }
`;

export default Button;