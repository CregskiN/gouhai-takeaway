import {fromJS} from 'immutable';
import {actionTypes} from '../../Choose/store/index'

const defaultState = fromJS({
    ChoosedList: [],
    totalPrice: 0,
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.ADD_FOOD: //用户点击 添加至购物车
            return _add_food(state,action);

        default:
            return state;
    }
}


const _add_food = (state, action) => { //逻辑通！ 算法待优化！！
    const oldChoosedList = state.get('ChoosedList').toJS(); //转为JS对象
    let newId = (action.item.toJS()).id;
    let flag = 0;   //判断新加入的菜品重复标志

    for (let i = 0; i < oldChoosedList.length; i++) {
        if(oldChoosedList[i].id === newId){
            oldChoosedList[i].sum += 1;
            ++flag;
        }
    }

    const newTotalPrice = state.get('totalPrice') + action.currentPrice;
    if(flag > 0){
        return state.merge({
            ChoosedList: fromJS(oldChoosedList),
            totalPrice: newTotalPrice,
        });
    }else {
        const newChoosedList = state.get('ChoosedList').push(action.item);
        return state.merge({
            ChoosedList: newChoosedList,
            totalPrice: newTotalPrice,
        });
    }

    
};
