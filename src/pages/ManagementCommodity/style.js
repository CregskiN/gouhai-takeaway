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

const CommodityList = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CommodityListTitle = styled.div `
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

const CommodityItem = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 355px;
    height: 90px;
    margin-top: 5px;
    margin-bottom: 5px;
    background: #fff;
    border-radius: 15px;
    padding: 15px;
    box-sizing: border-box;
    a {
        text-decoration: none;
    }
`;

const CommodityInfo = styled.div `
    display: flex;
    flex-direction: column;
    .commodity-title {
        color: #222;
        font-size: 22px;
        margin-bottom: 8px;
    }
`;

const CommodityPrice = styled.div `
    display: flex;
    flex-direction: row;
    align-items: baseline;
    .original-price {
        text-decoration:line-through;
        font-size: 18px;
        color: #777;
    }
    .arrow {
        margin: 0 5px;
        font-size: 18px;
        color: #777;
    }
    .current-price {
        font-size: 22px;
        color: #222;
    }
`;

const CommodityController = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    //background: aqua;
`;

export {
    Container,
    CommodityList,
    CommodityListTitle,
    CommodityItem,
    CommodityInfo,
    CommodityPrice,
    CommodityController
};