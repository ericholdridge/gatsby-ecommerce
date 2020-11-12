import React from "react";
import styled from "styled-components";

const FormInput = ({ name, label, type, placeholder, value, onChange }) => {
  return (
    <StyledDiv>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;
const StyledLabel = styled.label`
  color: whitesmoke;
  padding: 2px 0;
`;
const StyledInput = styled.input`
  height: 34px;
  border: 1px solid whitesmoke;
  background: transparent;
  padding: 0 6px;
  color: whitesmoke;
  border-top: none;
  border-left: none;
  border-right: none;
  &:focus {
    outline: 1px solid #fdbc2c;
  }
`;

export default FormInput;
