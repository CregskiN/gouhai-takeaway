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

const ButtonTitle = styled.div `
    color: #222;
`;

const Commodity = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 355px;
    margin-top: 25px;
    margin-bottom: 25px;
    background: #fff;
    border-radius: 15px;
    padding: 15px;
    box-sizing: border-box;
    a {
        text-decoration: none;
    }
`;

const CommodityButton = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 320px;
    height: 40px;
    border-radius: 15px;
    background: rgb(234,111,90);
    color: #fff;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export {
    Container,
    ButtonTitle,
    Commodity,
    CommodityButton
};