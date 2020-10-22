import React from "react";
import styled from "styled-components";
import BlueIphone from "../../images/blue.jpeg";

const Color = ({imageColor, setImageColor}) => {
  return (
    <StyledColor className="prodcutColor">
      <div className="image" onClick={() => setImageColor(imageColor)}>
        <img src={BlueIphone} alt="blue iPhone 12" />
      </div>
    </StyledColor>
  );
};

const StyledColor = styled.div`
  width: 100%;
  max-width: 80px;
  border: 1px solid #ccc;
  img {
  }
`;

export default Color;
