import {fromJS} from 'immutable';
import {actionTypes} from './index';

const defaultState = fromJS({
    school: '',
    mealTime: '',

    personName: '',
    cellphoneNumber: '',

    orderTime: '',
    totalPrice: '', //没有赋值， 作为需要传参的参考

    showTransition: false,

});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SELECT_SCHOOLANDMEALTIME: //选择学校和送餐时间
            return _addSchoolAndMealTime(state, action);
        case actionTypes.CHANGE_INPUTNAME: //输入名字
            return _changeName(state, action);
        case actionTypes.CHANGE_INPUTCELLPHONENUMBER: //输入手机号码
            return _changeCellphoneNumber(state, action);
        case actionTypes.CHECKOUT_ORDERTIMEANDTOTALPRICE: //下单时间
            return _addOrderTimeAndTotalPrice(state,action);
        case actionTypes.CHANGE_SHOWTRANSITION: //控制小车动画
            return _changeShowTransition(state,action);

        default:
            return state;
    }
}


const _changeShowTransition = (state,action) => {
    return state.merge({
        showTransition: !state.get('showTransition')
    })
};



const _addOrderTimeAndTotalPrice = (state,action) => {
    return state.merge({
        orderTime: fromJS(action.orderTime),
        totalPrice: fromJS(action.totalPrice),
    })
};

const _changeCellphoneNumber = (state, action) => {
    return state.merge({
        cellphoneNumber: fromJS(action.cellphoneNumber),
    });
};

const _changeName = (state, action) => {
    return state.merge({
        personName: fromJS(action.name),
    });
};


const _addSchoolAndMealTime = (state, action) => {
    return state.merge({
        school: fromJS(action.school),
        mealTime: fromJS(action.mealTime),
    });
};