import React from 'react';
import styled from "styled-components";

const Ggrid = (props) => {
  const { overflow, max_width, transition, hovertransition, hovershadow, hovercolor, shadow, border_radius, left, position, is_flex, curser, layout, children, padding, margin, border, width, height, display, alignit, justify, flexdir, textalign, bgcolor, _onClick } = props;
  const styles = {
    padding: padding,
    margin: margin,
    border: border,
    width: width,
    height: height,
    display: display,
    alignit: alignit,
    justify: justify,
    flexdir: flexdir,
    textalign: textalign,
    bgcolor: bgcolor,
    ...layout,
    curser: curser,
    is_flex: is_flex,
    position: position,
    left: left,
    border_radius: border_radius,
    shadow: shadow,
    hovercolor: hovercolor,
    hovershadow: hovershadow,
    hovertransition: hovertransition,
    transition: transition,
    max_width: max_width,
    overflow: overflow,
  }
  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
    </React.Fragment>
  );
};

Ggrid.defaultProps = {
  children: null,
  padding: false,
  margin: false,
  border: false,
  width: "100%",
  height: "",
  display: "block",
  alignit: false,
  justify: false,
  flexdir: false,
  textalign: false,
  bgcolor: false,
  _onClick: () => { },
  layout: null,
  curser: false,
  is_flex: false,
  position: false,
  left: false,
  border_radius: false,
  shadow: false,
  hovercolor: "",
  hovershadow: "",
  hovertransition: "",
  transition: "",
  max_width: "",
  overflow: "hidden"
}
const GridBox = styled.div`
    width: ${(props) => props.width};
    box-sizing: border-box;
    overflow: ${(props) => props.overflow};
    max-width: ${(props) => props.max_width};
    ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    ${(props) => (props.border ? `border: ${props.border};` : "")}
    ${(props) => (props.height ? `height: ${props.height};` : "")}
    ${(props) => (props.display ? `display: ${props.display};` : "")}
    ${(props) => (props.alignit ? `align-items: ${props.alignit};` : "")}
    ${(props) => (props.justify ? `justify-content: ${props.justify};` : "")}
    ${(props) => (props.flexdir ? `flex-direction: ${props.flexdir};` : "")}
    ${(props) => (props.textalign ? `text-align: ${props.textalign};` : "")}
    ${(props) => (props.bgcolor ? `background: ${props.bgcolor};` : "")}
    ${(props) => (props.curser ? `cursor: pointer;` : "")}
    ${(props) => (props.is_flex ? `display: flex; justify-content: space-between; align-items: center; ` : "")}
    ${(props) => (props.position ? `position: ${props.position};` : "")}
    ${(props) => (props.left ? `left: ${props.left};` : "")}
    ${(props) => (props.border_radius ? `border-radius: ${props.border_radius};` : "")}
    ${(props) => (props.shadow ? `box-shadow: ${props.shadow};` : "")}
    transition: ${(props) => props.transition};
    &:hover{
        background-color: ${(props) => props.hovercolor};
        box-shadow: ${(props) => props.hovershadow};
        transform:  ${(props) => props.hovertransition};
    }
    font-family: 'KyoboHand';
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
`;

export default Ggrid; 