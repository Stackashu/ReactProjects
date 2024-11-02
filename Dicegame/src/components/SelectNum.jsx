
import styled from "styled-components";
const SelectNum = ({nums , setNums, error, setError}) => {
  
  const numArray = [1, 2, 3, 4, 5, 6];

  const clickedNumber = (value)=>{
    setError(" ");
    setNums(value)

  }
  return (
    <>
      <Container>
        <p>{error}</p>
        <div className="num">
          {numArray.map((value, i) => (
            <Box
              key={i}
              onClick={()=>clickedNumber(value)}
              isSelect={value == nums}
            >
              {value}
            </Box>
          ))}
        </div>
        <h2>Select Number</h2>
      </Container>
    </>
  );
};

export default SelectNum;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
   
  p{
    font-size: 2vw;
    color: red;
  }
  .num {
    display: flex;
    gap: 5vw;
  }
  h2{
    font-size: 2vw;
  }
`;

const Box = styled.div`
  border: 2px solid black;
  width: 4vw;
  text-align: center;
  padding: 2%;
  cursor: pointer;
  font-size: 1.7vw;
  background-color: ${(props) => (props.isSelect ? "black" : "white")};
  color: ${(props) => (props.isSelect ? "white" : "black")};

  &:hover {
    background-color: #313131;
    color: white;
  }
`;
