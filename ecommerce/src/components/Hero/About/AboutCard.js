import React from "react";
import styled from "styled-components";

const AboutCard = ({ cardIcon, cardHeading, cardInfo }) => {
  return (
    <StyledCard>
      <i className={cardIcon}></i>
      <h3>{cardHeading}</h3>
      <p>{cardInfo}</p>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 100%;
  max-width: 355px;
  i {
    color: #d94f2b;
    font-size: 3.6rem;
  }
  h3 {
    color: #fdbc2c;
    font-size: 2.2rem;
    padding: 16px 0;
  }
  p {
    color: whitesmoke;
    line-height: 1.8;
    font-weight: bold;
  }
`;

export default AboutCard;
