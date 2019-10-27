import styled from "styled-components";

const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10px;
    width: 100%;
    min-height: 92vh;
    background: #f2f2f2;
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

const CommodityList = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CommodityItem = styled.div `
    position: relative;
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
// 编辑状态下的CommodityInfo区域
const CommodityTitleInput = styled.input `
    display: block;
    width: 100px;
    height: 22px;
    margin-left: 5px;
    padding-left: 4px;
    box-sizing: border-box;
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

// 编辑状态下的CommodityInfo区域
const OriginalPriceSetting = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 8px;
    .tips {
        color: #777;
        font-size: 18px;
    }
    .input {
        display: block;
        margin-left: 4px;
        width: 30px;
        height: 18px;
        padding-left: 2px;
        box-sizing: border-box;
        border-radius: 5px;
        border: 1px solid #777;
    }
`;

const CommodityController = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
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
        font-size: 14px;
    }
    &.cancel {
        margin-left: 5px;
        background: #fff;
        border: 1px solid #777;
        font-size: 14px;
    }
`;

// "查看更多"组件，在最右侧三个竖排列灰点，以后迭代修改图片、删除商品用
const SeeMore = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 12px;
    height: 34px;
    margin-left: 6px;
    padding: 5px 12px 5px 12px;
    box-sizing: border-box;
    .spot {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: #777;
    }
`;

const CommodityBubble = styled.div `
    position: absolute;
    top: 70px;
    right: 18px;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    padding: 5px;
    background: #fff;
    border-radius: 8px;
`;

const DeleteCommodity = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 24px;
    font-size: 14px;
    color: rgb(234,111,90);
`;

const Mask = styled.div `
    position: fixed;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.4);
`;

export {
    Container,
    CommodityListTitle,
    CommodityList,
    CommodityItem,
    CommodityInfo,
    CommodityTitleSetting,
    CommodityTitleInput,
    CommodityPrice,
    OriginalPriceSetting,
    CommodityController,
    CommodityControllerButton,
    SeeMore,
    CommodityBubble,
    DeleteCommodity,
    Mask
};