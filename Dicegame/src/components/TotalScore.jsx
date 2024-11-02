import React from "react";

const TotalScore = ({score}) => {
 
  return (
    <>
      <div className="score">
        <h1>{score}</h1>
        <p>Total Score</p>
      </div>
    </>
  );
};

export default TotalScore;
