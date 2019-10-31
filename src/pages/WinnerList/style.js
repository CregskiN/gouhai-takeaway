import styled from "styled-components";

const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 92vh;
    background: #f2f2f2;
`;

const ComponentTitle = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
    color: #222;
    margin-bottom: 15px;
    .line {
        width: 100%;
        height: 2px;
        background: #f4c25b;
        border-radius: 1px;
    }
`;

const Winner = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 355px;
    margin-top: 5px;
    margin-bottom: 5px;
    background: #fff;
    border-radius: 15px;
    padding: 15px;
    box-sizing: border-box;
`;

const WinnerInfo = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 30px;
    font-size: 20px;
    color: #222;
`;

const ButtonArea = styled.div `
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    width: 100%;
    height: 30px;
`;

const DeleteButton = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 34px;
    color: #222;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #777;
`;

export {
    Container,
    ComponentTitle,
    Winner,
    WinnerInfo,
    ButtonArea,
    DeleteButton
}