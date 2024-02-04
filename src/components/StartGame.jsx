import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="dice"/>
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  width: auto;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  @media (max-width: 768px){
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;
    
  }

  .content {
    h1 {
      font-size: 76px;
      white-space: nowrap;
    }
    @media (max-width: 768px){
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      h1{
        font-size: 66px;
      }
      Button{
        /* border: 1px solid green; */
        /* padding: 0; */
        width: 60%;
        margin: 0;

      }

    }

  }
  @media (max-width: 768px){
    div img{
      width: 400px;
      height: 400px;
      /* border: 1px solid blue; */
    }
  }
`;
