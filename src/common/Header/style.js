import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 9vh;
    background: #f2f2f2;
    .logo-wrapper{
        height: 100%;
        .logo {
            height: 100%;
            border-radius: 50%;
            
        &.logoEnter-enter{
            transition: all .5s;
            opacity: .5;
        }
        &.logoEnter-enter-active{
            opacity: 1;
        }
         &.logoEnter-enter-done{
            opacity: 1;
         }
            
        
    }
`;

export const Title = styled.div `
    display: flex;
    flex-direction: column;
    margin-left: 15px;
`;

export const SubTitle = styled.div `
    display: flex;
    flex-direction: column;
    font-weight: bold;
    margin-left: 5px;
`;