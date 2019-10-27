import {actionTypes} from './index';
import {fromJS} from 'immutable';


export const getOrderList = (receiveList) => {
    console.log(receiveList);
    return (dispatch) =>
        dispatch({
            type: actionTypes.GET_ORDERLIST,
            foodList: receiveList
        })
};


const _addShoppingCart = (item, currentPrice) => ({
    type: actionTypes.ADD_FOOD,
    item,
    currentPrice,
});

export const addShoppingCart = (foodList, id) => { //dispatch到ShoppingTab的reducer组件
    return (dispatch) => {
        const item = foodList.filter((value, index, array) =>
            value.get('id') === id
        );//这个item为 filter后返回的数组！！ 需要将其中[0]再筛出来
        const currentPrice = (item.toJS()[0]).currentPrice;
        dispatch(_addShoppingCart(fromJS(item.get(0)), currentPrice));
    }
};