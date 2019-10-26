import {fromJS} from 'immutable';
import {actionTypes} from './index';

const defaultState = fromJS({
    school: '',
    mealTime: '',

    personName: '',
    cellphoneNumber: '',

    orderTime: '',
    totalPrice: '',
    selectedList: [], //????????

    /*orderTime: '',
    name: '',
    orderList: '',*/

});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SELECT_SCHOOLANDMEALTIME:
            return _addSchoolAndMealTime(state, action);
        case actionTypes.CHANGE_INPUTNAME:
            return _changeName(state, action);
        case actionTypes.CHANGE_INPUTCELLPHONENUMBER:
            return _changeCellphoneNumber(state, action);
        case actionTypes.CHECKOUT_ORDERTIMEANDTOTALPRICE:
            return _addOrderTimeAndTotalPrice(state,action);
        default:
            return state;
    }
}

const _addOrderTimeAndTotalPrice = (state,action) => {
    return state.merge({
        orderTime: fromJS(action.orderTime),
        totalPrice: fromJS(action.totalPrice),
        selectedList: fromJS(action.selectedFoodList),
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