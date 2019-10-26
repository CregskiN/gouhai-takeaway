import {actionTypes} from './index';
import axios from 'axios';
import {fromJS} from 'immutable';


const _getOrderListAction = (orderList) => ({
    type: actionTypes.GET_ORDERLIST,
    foodList: orderList.foodList,
});

export const getOrderList = () => { //请求order首页数据
    return (dispatch) => {
        axios.get('/api/order/orderList.json').then(res => {
            const orderList = res.data;
            console.log(res.data);
            dispatch(_getOrderListAction(orderList));
        }).catch(() => {
            console.log("未请求到order页数据");
        })
    }

};

const _addShoppingCart = (item,currentPrice) => ({
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
        dispatch(_addShoppingCart(fromJS(item.get(0)),currentPrice));
    }
};