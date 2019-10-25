import styled from "styled-components";

const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 92vh;
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

// 编辑状态下的CommodityInfo区域

const CommodityTitleSetting = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
    .tips {
        color: #777;
        font-size: 22px;
    }
`;
const CommodityTitleInput = styled.input `
    display: block;
    width: 100px;
    height: 22px;
    border-radius: 5px;
    border: 1px solid #777;
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

// 编辑状态下的CommodityController区域
const CommodityControllerButton = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 34px;
    background: green;
    border-radius: 8px;
    &.save {
        background: rgb(234,111,90);
        color: #fff;
    }
    &.cancel {
        margin-left: 5px;
        background: #fff;
        border: 1px solid #777;
    }
`;

// "查看更多"组件，在最右侧三个竖排列灰点，以后迭代修改图片、删除商品用
// const SeeMore = styled.div `
//     width: 6px;
//     height: 34px;
//     margin-left: 12px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: space-around;
//     .spot {
//         width: 4px;
//         height: 4px;
//         border-radius: 50%;
//         background: #777;
//     }
// `;

export {
    Container,
    CommodityList,
    CommodityListTitle,
    CommodityItem,
    CommodityInfo,
    CommodityTitleSetting,
    CommodityTitleInput,
    CommodityPrice,
    CommodityController,
    CommodityControllerButton
};