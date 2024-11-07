import React from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import SelectNum from "./SelectNum";
import RoleDice from "./RoleDice";
import { useState } from "react";

const PlayGame = () => {
  const [nums, setNums] = useState(null);
  const [diceNum, setDiceNUm] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState();

  const scoreReset = () => {
    setScore(0);
  }; 

  const generateRandomDiceNUm = () => {
    return Math.floor(Math.random() * 6) + 1;
  };
const rolldice = () => {
  if (nums == null) {
    setError("Please Select a number");
    return;
  }
  setError('')
  
  const randomNum = generateRandomDiceNUm();
  setDiceNUm((prev) => randomNum);

  if (nums == randomNum) {
    setScore((prev) => prev + nums);
  } else if(nums!= randomNum) {
    setScore((prev) => prev - nums);
  }

  setNums(null);
};

  return (
    <>
      <Container>
        <div className="topSection">
          <TotalScore score={score} />
          <SelectNum
            setNums={setNums}
            nums={nums}
            error={error}
            setError={setError}
          />
        </div>
        <RoleDice
          rolldice={rolldice}
          diceNum={diceNum}
          scoreReset={scoreReset}
        />
      </Container>
    </>
  );
};

export default PlayGame;

const Container = styled.div`
  .topSection {
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
