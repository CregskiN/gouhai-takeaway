import React, {Component} from "react";
import {connect} from "react-redux";
import {actionCreators} from './store';
import {Redirect} from 'react-router-dom';
import {
    Container,
    ComponentTitle,
    Password,
    LoginPoster,
    PostArea,
    LoginButton
} from './style';

class Login extends Component {
    render() {
        if (this.props.isLogin) {
            return <Redirect to='/management' />
        } else {
            return (
                <Container>
                    <ComponentTitle>
                        后台管理
                        <div className="line" />
                    </ComponentTitle>
                    <Password>
                        <input
                            className="input"
                            placeholder="密码"
                            type="password"
                            value={this.props.password}
                            onChange={this.props.handlePasswordInputChange}
                        />
                    </Password>
                    <LoginPoster>
                        <PostArea>
                            <div className="tips">登录</div>
                            <LoginButton onClick={() => {this.props.handleLoginButton(this.props.password);}}>login</LoginButton>
                        </PostArea>
                    </LoginPoster>
                </Container>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    password: state.getIn(['login', 'password']),
    isLogin: state.getIn(['login', 'isLogin'])
});

const mapDispatchToProps = (dispatch) => ({
    // PasswordInput的value发生改变时触发
    handlePasswordInputChange(e) {
        const value = e.target.value;
        dispatch(actionCreators.passwordInputChange(value));
    },

    // 点击"login"时触发，登录
    handleLoginButton(password) {
        dispatch(actionCreators.login(password));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);