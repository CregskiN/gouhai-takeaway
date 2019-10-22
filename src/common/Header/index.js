import React, {Component} from 'react';
import {
    HeaderWrapper,
    NavItem,
} from './style';

class Header extends Component {

    render() {
        return (
            <HeaderWrapper>
                <img className='logo' src={require('../../images/Header/logo.jpg')} alt={''}/>
                <NavItem className='orderItem'>点餐</NavItem>
                <NavItem className='orderItem'>管理</NavItem>
            </HeaderWrapper>
        )
    }


}

export default Header;

