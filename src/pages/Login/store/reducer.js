import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    password: '',
    isLogin: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        // PasswordInput的value发生改变时触发
        case constants.PASSWORD_INPUT_CHANGE:
            return state.set('password', action.value);

        // 密码匹配正确，更改isLogin为真
        case constants.TURN_IS_LOGIN_INTO_TRUE:
            return state.set('isLogin', true);

        // redux-thunk私有方法, 清空密码输入框内容
        case constants.CLEAR_PASSWORD_INPUT:
            return state.set('password', '');

        default:
            return state;
    }
};