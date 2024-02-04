import styled from "styled-components";
const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  /* border: 1px solid red; */

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
  .error {
    color: red;
  }
  @media (max-width: 768px){
    /* border: 1px solid blue; */
    width: 100%;
    /* justify-content: start; */
    /* align-items: center; */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    .flex{
      display: flex;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      /* background-color: aquamarine; */
      
    }
    p{
      margin-top: 20px;
    }
  }

  
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  @media (max-width: 768px){
    height: 56px;
    width: 56px;
    font-size: 18px;

  }
  
`;
