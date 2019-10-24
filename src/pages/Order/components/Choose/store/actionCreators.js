import {actionTypes} from './index';
import axios from 'axios';


const _getOrderList = (orderList) => ({
    type: actionTypes.GET_ORDERLIST,
    foodList: orderList.foodList,
});

export const getOrderList = () => { //请求order首页数据
    return (dispatch) => {
        axios.get('/api/order/orderList.json').then(res => {
            const orderList = res.data;
            console.log(res.data);
            dispatch(_getOrderList(orderList));
        }).catch(() => {
            console.log("未请求到order页数据");
        })
    }

};