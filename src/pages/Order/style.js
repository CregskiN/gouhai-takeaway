import styled from "styled-components";

export const OrderWrapper = styled.div`
    position: absolute;
    top: 60px; left: 0; right: 0; bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
`;

export const ChooseWrapper = styled.div`
    width: 90vw;
    padding: 20px 5vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    .menu {
        width: 100%;
        height: 30px;
    }
`;

export const FoodWrapper = styled.div`
    width: 90vw;
    padding: 10px 0;
`;

export const FoodItem = styled.div` /*还未设置高度！！*/
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 10px 0 0 0;
    background: #fff;
    border-radius: 10px;
    box-shadow: #f2f2f2 0 0 10px;
    .logo {
            width: 22%;
            border-radius: 10%;
        }
    .food-right{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 78%;
        .info{
            height: 100%;
            margin: 0 0 0 3%;
            .food-name{
                font-size: 14px;
            }
            .food-des{
                font-size: 10px;
            }
        }
        
        .add{
            background: #ea6f5a;
            margin: 10px;
            width: 20px;
            height: 20px;
            color: white;
            font-size: 18px;
            line-height: 18px;
            text-align: center;
            border-radius: 50%;
        }
    }

`;

export const SchoolWrapper = styled.div`
    margin: 10px 0 0 0;
    .schoolAndTime-cas { //可以加点击动画
        width: 45vw;
    }
`;



