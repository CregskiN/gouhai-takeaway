import styled from "styled-components";

export const CheckoutWrapper = styled.div`
    position: absolute;
    top: 9vh; left: 0; right: 0;
    width: 100%;
    padding:  0 10px 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    

`;

export const CheckoutTable = styled.div`
     margin: 15px 0 0 0;
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CheckoutHeader = styled.div`
    width: 100%;
    height: 5vh;
    background: #fff;
    box-shadow: #f2f2f2 0 0 10px;
    text-align: center;
    font-size: 2.3vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    .dish {
        width: 40%; 
        border-right: solid 1.5px #ccccd6;
    }
    .sum {
        width: 30%;
        border-right: solid 1.5px #ccccd6;
    }
    .operate {
        width: 30%;
    }
`;

export const HasChoosedItem = styled.div`
    width: 100%;
    height: 8vh;
    background: #fff;
    margin: 3px;
    border-radius: 3px;
    box-shadow: #f2f2f2 0 0 10px;
    display: flex;
    flex-direction: row;
    .dish {
        width: 40%; 
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .price {
        width: 30%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .operate {
        width: 30%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
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
       .less{
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
    width: 100%;
    margin: 10px;
    .ic {
        display: inline-block;
    }
    .wrap{
        width: 100%;
        .schoolAndTime-cas { //可以加点击动画
            width: 50vw;
        }
    }
`;

export const Input = styled.input`
    padding: 5px 5px 5px 20px;
    border: solid 1px #f2f2f2;
    border-radius: 5px;
    box-shadow: #f2f2f2 0 0 10px;
`;

export const ShoppingWrapper = styled.div`
    position: fixed;
    bottom: 0;
    height: 8vh;
    width: 100vw;
    background: #f2f2f2;
    display: flex;
    flex-direction: row;
    align-items: center;
    
`;

export const TabLeft = styled.div`
    width: 75vw;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-right: solid 1.5px #fff;  /*1.5px 生效！*/
    .takeaway-img{
        height: 70%;
        margin: 0 6px 0 20px;    
        
        &.takeaway-enter {
            transition: all 1s ;
        }
         &.takeaway-enter,&.takeaway-enter-active {
            transform: translate(400% ,0);
        }
        &.takeaway-enter-done {
            transform: translate(400%,0);
        }
        &.takeaway-exit {
            transition: all 1s ;
        }
         
    }
    .totalPrice{
        font-size: 20px;
    }
`;

export const TabRight = styled.div`
    width: 25vw;
    height: 100%;
    
    .button {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .ok{
           
            font-size: 20px;
            font-weight: 600;
            color:cornflowerblue;
        }
    }
`;
