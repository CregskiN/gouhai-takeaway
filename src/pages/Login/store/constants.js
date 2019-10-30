const PASSWORD_INPUT_CHANGE = 'login/PASSWORD_INPUT_CHANGE';    // PasswordInput的value发生改变时触发
const TURN_IS_LOGIN_INTO_TRUE = 'login/TURN_IS_LOGIN_INTO_TRUE';    // redux-thunk私有方法，密码匹配正确，更改isLogin为真
const CLEAR_PASSWORD_INPUT = 'login/CLEAR_PASSWORD_INPUT';  // redux-thunk私有方法, 清空密码输入框内容

export {
    PASSWORD_INPUT_CHANGE,
    TURN_IS_LOGIN_INTO_TRUE,
    CLEAR_PASSWORD_INPUT
};