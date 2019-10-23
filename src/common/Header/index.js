import React, {Component} from 'react';
import {
    HeaderWrapper,
    Title,
    SubTitle
} from './style';

class Header extends Component {

    render() {
        return (
            <HeaderWrapper>
                <img className='logo' src={require('../../images/Header/logo.jpg')} alt={''}/>
                <Title>够嗨美食城</Title>
                <SubTitle>· 外卖</SubTitle>
            </HeaderWrapper>
        )
    }
}

export default Header;

