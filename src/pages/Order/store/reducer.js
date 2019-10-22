import {fromJS} from 'immutable';
import {actionTypes} from './index';

const defaultState = fromJS({
    isChoosingTime: false,
    isChoosingSchool: false,
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_ISCHOOSINGTIME:
            console.log("执行到reducer了！");
            return state.set('isChoosingTime',!state.isChoosingTime);
        default:
            return state;
    }
};