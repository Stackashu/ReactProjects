import React from "react";
import styled from "styled-components";


const HomePage = ({ toggleToPlay }) => {
  return (
    <>
      <Container>
        <div>
          <Img src="/images/dice.png" alt="dice" />
        </div>
        <div className="content">
          <h1>Dice Game</h1>
          <Button onClick={toggleToPlay}>Play Now</Button>

        </div>
      </Container>
    </>
  );
};

export default HomePage;

const Button = styled.button`
  background: black;
  color: white;
  min-width: 200px;
  padding: 5px 15px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in;
  border: 2px solid black;


  &:hover {
    background: white;
    color: black;
    border: 2px solid black;
  }
`;
const Img = styled.img`
  width: 30vw;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  gap: 4vw;

  .content {
    display: flex;
    flex-direction: column;
    align-items: end;
    
  }
  .content h1 {
    font-size: 8vw;
  }
`;
