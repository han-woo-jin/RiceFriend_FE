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
            <ElButton {...styles} onClick={_onClick}>{text ? text : children}</ElButton>
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
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  background-color: #
  color: #ffffff;
  border-radius: 10px;
  padding: 12px 0px;
  box-sizing: border-box;
  border: none;
  padding: ${(props) => props.padding};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

export default Button;