import styled from "styled-components";

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
            height: 40%;
        }
        .okk {
            height: 40%;
        }
    }
`;
