import styled from "styled-components";

const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 92vh;
    background: #f2f2f2;
`;

const ComponentTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
    color: #222;
    margin-bottom: 15px;
    .line {
        width: 100%;
        height: 2px;
        background: rgb(234,111,90);
        border-radius: 1px;
    }
`;

const Password = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 355px;
    height: 60px;
    margin-top: 5px;
    margin-bottom: 5px;
    background: #fff;
    border-radius: 15px;
    padding: 15px;
    box-sizing: border-box;
    .input {
        display: block;
        width: 100%;
        height: 35px;
        font-size: 20px;
        box-sizing: border-box;
        border-radius: 5px;
        border: none;
    }
`;

const LoginPoster = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 355px;
    height: 60px;
    margin-top: 5px;
    margin-bottom: 5px;
    background: #fff;
    border-radius: 15px;
    padding: 15px;
    box-sizing: border-box;
`;

const PostArea = styled.div `
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .tips {        
        color: #777;
        font-size: 20px;
    }
`;
const LoginButton = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 34px;
    background: rgb(234,111,90);
    border-radius: 8px;
    color: #fff;
`;

export {
    Container,
    ComponentTitle,
    Password,
    LoginPoster,
    PostArea,
    LoginButton
}