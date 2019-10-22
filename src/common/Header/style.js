import styled from 'styled-components';

export const HeaderWrapper = styled.span`
    display: block;
    flex-direction: row;
    width: 100%;
    height: 60px;
    background: #f2f2f2;
    .logo {
        float: left;
        align-items: center;
        height: 100%;
        border-radius: 50%;
    }
`;

export const NavItem = styled.div`
    margin: 15px 0 0 14px;
    height: 27px;
    text-align: center;
    line-height: 25px;
    font-size: 17px;
    
    &.orderItem{
        color: rgb(234,111,90);
        border-bottom-style: solid;
        float: left;
    }
    
`;