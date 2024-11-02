import React from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import SelectNum from "./SelectNum";
import RoleDice from "./RoleDice";
import { useState } from "react";

const PlayGame = () => {
  const [nums, setNums] = useState();
  const [diceNum, setDiceNUm] = useState(1);
  const [score ,setScore] = useState(0);
  const [ error,setError] = useState();
  
  const scoreReset = ()=>{
    setScore(0);
  }

  const generateRandomDiceNUm = () => {
   return Math.floor(Math.random() * 6) + 1;
  
  };
  
  const rolldice = () => {

    if(!nums){
      setError("Please Select a number");
      return;
    }
    const randomNum = generateRandomDiceNUm();
    setDiceNUm((prev) => generateRandomDiceNUm());
   
   
    if(nums == randomNum){
      setScore((prev) => prev + nums);
    }else{
      setScore((prev) => prev - nums);
    }

    setNums(" ")
  };
//  how to hide a comopnent after clicking on a button?
  
  return (
    <>
      <Container>
        <div className="topSection">
        <TotalScore score={score} />
        <SelectNum  setNums={setNums} nums={nums} error={error} setError={setError} />

        </div>
      <RoleDice  rolldice={rolldice} diceNum={diceNum} scoreReset={scoreReset}  />

      </Container>
    </>
  );
};

export default PlayGame;

const Container = styled.div`
.topSection{
    display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5vw;
  font-size: 3vw;
}


  .score {
    font-weight: 900;
    line-height: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 150px;
    font-size: 2vw;
    margin-top: -2%;
  }
`;
