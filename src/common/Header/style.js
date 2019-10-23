import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 8vh;
    background: #f2f2f2;
    .logo {
        height: 100%;
        border-radius: 50%;
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