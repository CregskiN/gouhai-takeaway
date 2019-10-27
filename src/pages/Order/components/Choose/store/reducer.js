import {fromJS} from 'immutable';
import {actionTypes} from './index';

const defaultState = fromJS({
    foodList: [],
    showEnter: true,
});


export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_ORDERLIST:
            console.log(action.foodList);
            return _getOrderList(state,action);

        default:
            return state;
    }
};


const _getOrderList = (state, action) => {
    return(
        state.merge({
            foodList: fromJS(action.foodList),
        })
    )
};