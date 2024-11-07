import React from "react";
import styled from "styled-components";
const Rules = () => {
  return (
    <>
      <Container>
        <ul>
          <li>Select any number of your choice</li>
          <li>Click on the dice</li>
          <li>
            If your  selected number is equal to the dice the score will
            incresase by the number of dice
          </li>
          <li>
            If the seleted number is not similar as dice then the score will
            decrease by the selected number
          </li>
        </ul>
      </Container>
    </>
  );
};

export default Rules;

const Container = styled.div`
  font-size: 1vw;
  padding: 2vw;
  font-weight: 600;
  background-color: #e69e9e;
`;
