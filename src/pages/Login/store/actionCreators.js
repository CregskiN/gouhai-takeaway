import {constants} from './index';
// import axios from 'axios';
// import {fromJS} from 'immutable';

// PasswordInput的value发生改变时触发
const passwordInputChange = (value) => ({
    type: constants.PASSWORD_INPUT_CHANGE,
    value,
});

// 点击"login"时触发，登录
const login = (password) => {
    return (dispatch) => {
        if (password === '88888888') {
            alert('登录成功');
            dispatch(_clearPasswordInput());
            dispatch(_turnIsLoginIntoTrue());
        } else {
            alert('抱歉，密码错误');
            dispatch(_clearPasswordInput());
        }
    }
};

// redux-thunk私有方法，密码匹配正确，更改isLogin为真
const _turnIsLoginIntoTrue = () => ({
    type: constants.TURN_IS_LOGIN_INTO_TRUE
});

// redux-thunk私有方法, 清空密码输入框内容
const _clearPasswordInput = () => ({
    type: constants.CLEAR_PASSWORD_INPUT
});

export {
    passwordInputChange,
    login
};