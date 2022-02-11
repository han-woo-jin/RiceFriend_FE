import React from "react";
import styled from "styled-components";

import Text from './Text';


const Input = () => {

  const {label, placeholder, type, _onChange, textarea, value} = props;

  return (
    <React.Fragment>
      <InputForm>
        <Text>{label}</Text>
        <input type={type} placeholder={placeholder} onChange={_onChange} value={value} />
      </InputForm>
    </React.Fragment>
  );
};

Input.defaultProps = {
  label: "텍스트",
  placeholder: "텍스트를 작성해주세요",
  type: "text",
  _onChange: () => {},
  textarea: false,
  value: "",
}

const InputForm = styled.div`
  margin: 0px;
  input{
    padding: 10px 10px;
    outline: none;
    width: 100%;
    border: 1px solid #dddddd
}
`;