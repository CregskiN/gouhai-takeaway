import {fromJS} from 'immutable';
import {actionTypes as chooseActionTypes} from '../../Choose/store/index'
import {actionTypes as checkoutActionTypes} from '../../../../Checkout/store/index';

const defaultState = fromJS({
    ChoosedList: [],
    totalPrice: 0,
    totalChoosedKinds: 0,

    showTransition: false,
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case chooseActionTypes.ADD_FOOD: //用户点击 添加至购物车
            return _add_food(state, action);
        case checkoutActionTypes.ADD_SUM: //增加相同菜品数
            return _change_sum(state, action);
        case checkoutActionTypes.LESS_SUM: //减少相同菜品数
            return _change_sum(state, action);


        default:
            return state;
    }
}

const _change_sum = (state, action) => {
    const newList = state.get('ChoosedList').toJS();
    let newTotalPrice = state.get('totalPrice');
    const changeSum_id = action.id;
    let newTotalChoosedKinds = state.get('totalChoosedKinds');


    if (action.type === checkoutActionTypes.ADD_SUM) {
        for (let i = newList.length - 1; i >= 0; i--) {
            if (newList[i].id === changeSum_id) {
                if (newTotalPrice >= 0 && newList[i].sum >= 0) {
                    newList[i].sum += 1;
                    newTotalPrice += newList[i].currentPrice;
                }
            }
        }
    }

    let zeroSumItem = -1; //记录less操作后 sum为0的项
    if (action.type === checkoutActionTypes.LESS_SUM) {
        for (let i = newList.length - 1; i >= 0; i--) {
            if (newList[i].id === changeSum_id) {
                if (newTotalPrice > 0 && newList[i].sum > 0) {
                    newList[i].sum -= 1;
                    newTotalPrice -= newList[i].currentPrice;
                    if(newList[i].sum === 0){
                        zeroSumItem = i;
                    }
                }
            }
        }
    }
    if(zeroSumItem !== -1){ //删除sum为0的项
        newList.splice(zeroSumItem,1);
        newTotalChoosedKinds -= 1;
    }

    return state.merge({
        ChoosedList: fromJS(newList),
        totalPrice: fromJS(newTotalPrice),
        totalChoosedKinds: newTotalChoosedKinds,
    })

};


const _add_food = (state, action) => { //逻辑通！ 算法待优化！！
    const oldChoosedList = state.get('ChoosedList').toJS(); //转为JS对象
    let newId = (action.item.toJS()).id;
    let flag = 0;   //加入的菜品是否重复标志
    const newTotalPrice = state.get('totalPrice') + action.currentPrice;
    let newTotalChoosedKinds = state.get('totalChoosedKinds');

    //遍历查看 已有选中列表是否有 与 新选中 相同的项
    for (let i = 0; i < oldChoosedList.length; i++) {
        if (oldChoosedList[i].id === newId) {
            oldChoosedList[i].sum += 1;
            ++flag;
        }
    }

    if (flag > 0) {
        return state.merge({
            ChoosedList: fromJS(oldChoosedList),
            totalPrice: newTotalPrice,
            showTransition: !state.get('showTransition'),
        });
    } else {
        if(newTotalChoosedKinds > 0){
            alert("对不起，目前只支持添加一道菜");
            return state;
        }
        newTotalChoosedKinds += 1;
        const newChoosedList = state.get('ChoosedList').push(action.item);
        return state.merge({
            ChoosedList: newChoosedList,
            totalPrice: newTotalPrice,
            totalChoosedKinds: newTotalChoosedKinds,
            showTransition: !state.get('showTransition'),
        });
    }

};
