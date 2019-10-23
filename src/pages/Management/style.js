import styled from "styled-components";

const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 92vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f2f2f2;
`;

const Button = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 340px;
    height: 40px;
    border-radius: 5px;
    background: rgb(234,111,90);
    color: #fff;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export {Container, Button};