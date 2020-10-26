import React, {useState} from "react";
import styled from "styled-components";

const MenuAddBtn = ({pizza}) => {
  const [getId, setGetId] = useState([]);
  console.log(getId)
  return (
    <StyledButton>
      <button onClick={() => setGetId(pizza)}>Add</button>
    </StyledButton>
  );
};

const StyledButton = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 0 0 0;
  button {
    margin: 0 auto;
    padding: 8px 28px;
    background: #fdbc2c;
    color: black;
    font-weight: bold;
    border: none;
    cursor: pointer;
  }
`;

export default MenuAddBtn;
