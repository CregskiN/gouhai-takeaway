import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {CSSTransition} from "react-transition-group";
import {
    HeaderWrapper,
    Title,
    SubTitle
} from './style';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEnter: false, //初始化数据在组件mount之前，直接设置true对CSSTransition不起作用
        }
    }

    render() {
        return (
            <HeaderWrapper>
                    <Link className='logo-wrapper' to={'/'}>
                        <CSSTransition
                            in={this.state.showEnter}
                            timeout={500}
                            classNames='logoEnter'
                        >
                        <img onClick={() => console.log(this.state.showEnter)} className='logo'
                             src={require('../../images/Header/logo.jpg')} alt={''}/>
                        </CSSTransition>
                    </Link>
                <Title>够嗨美食城</Title>
                <SubTitle>· 外卖</SubTitle>
            </HeaderWrapper>
        )
    }

    componentDidMount() {
        this.setState({
                showEnter: true,
            }
        )
    }

}

export default Header;

