import React, { useState } from "react";
import styled from "styled-components";
import Rules from "./Rules";
const RoleDice = ({diceNum,rolldice,scoreReset}) => {
 
const [isVisible,setIsVisible] =  useState(false);

   const  handleDiceClick = () => {
    setIsVisible((prev) => !prev);
   }

  return (
    <>
      <Container>
        <img
          src={`/images/dices/inverted-dice-${diceNum}.png`}
          onClick={rolldice}
          alt={`dice${diceNum}`}
        />
        <h3>Click on the dice</h3>
        <Button onClick={scoreReset}>Reset</Button>
        <Button onClick={handleDiceClick}>Show Rules</Button>
         {isVisible ? <Rules/> : " " }
      </Container> 
    </>
  );
};

export default RoleDice;

const Container = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 10vw;
    border-radius: 10px;
    cursor: pointer;
  }
  h3{
    font-size: 1vw;
    opacity: 0.7;
    margin:1vw 0;
  }
`;
const Button = styled.button`
  background: black;
  color: white;
  min-width: 200px;
  padding: 5px 15px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in;
  border: 2px solid black;
  font-size: 1vw;
  margin: 1vw 0;


  &:hover {
    background: white;
    color: black;
    border: 2px solid black;
  }
`;