import React, { useState } from 'react'
import styled from 'styled-components'
const NumberSelect = () => {
    const boxArray = [1,2,3,4,5,6];
    const [selectedNum, setSelecedNum] = useState();
    console.log(selectedNum); 

  return (
    <>
    <BoxContainer>
           <div>
                {
                    boxArray.map((value, i) => (<Boxes 
                    isselected ={value === selectedNum} key={i}
                    onClick={ () => setSelecedNum(value)}>
                    {value}
                </Boxes> ))}

           </div>
            <p>Select </p>

            
    </BoxContainer>
    </>

  )
}

export default NumberSelect;


const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    border: 1px solid red;
    div{
        display: flex;
    border: 1px solid red;

    }
    p{
        font-size: 24px;
        font-weight: 700px;
        display: flex;

    }

`
const Boxes = styled.div`
    width: 72px;
    height: 72px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    gap: 10px;
    margin: 10px;
    font-weight: 700;
    cursor: pointer;
    border: 1px solid red;

    transition: 0.2s background ease-in;
    background: ${(props) => props.isselected ? "black" : "white"};
    color: ${(props) => !props.isselected ? "black" : "white"};

    /* color: ${(props) => props.isselected ? 'white' : "black"}; */



`
