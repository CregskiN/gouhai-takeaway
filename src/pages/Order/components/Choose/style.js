import styled from "styled-components";

export const ChooseWrapper = styled.div`
    width: 90vw;
    padding: 10px 2.5vw 20px 2.5vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FoodWrapper = styled.div`
    width: 90vw;
    padding: 0;
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
                font-size: 15px;
                .ic {
                    font-size: 15px;   
                    color: red;               
                }
            }
            .food-desc{
                margin: 0;
                font-size: 12px;
            }
            .originalPrice {
                font-size: 12px;
            }
            .currentPrice {
                font-size: 13px;
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
        .food-price{
            .originalPrice{
                text-decoration: line-through;
            }
            .currentPrice{
                
            }
        }
    }

    &.listItems-enter {
        transition: all .5s ease-out;
        transform: translate(0,150px);
        opacity: 0;
    }
    &.listItems-enter-active {
        transform: translate(0,0);
        opacity: 1;
    }
    &.listItems-enter-done {
        transform: translate(0,0);
        opacity: 1;
    }
    
`;


