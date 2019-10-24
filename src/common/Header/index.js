import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
    HeaderWrapper,
    Title,
    SubTitle
} from './style';

class Header extends Component {

    render() {
        return (
            <HeaderWrapper>
                <Link className='logo-wrapper' to={'/'}>
                <img className='logo' src={require('../../images/Header/logo.jpg')} alt={''}/>
                </Link>
                <Title>够嗨美食城</Title>
                <SubTitle>· 外卖</SubTitle>
            </HeaderWrapper>
        )
    }
}

export default Header;

