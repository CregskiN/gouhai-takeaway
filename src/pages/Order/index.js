import {OrderIconfont} from './images/iconfont/iconfont.js';
import React from 'react';
import ShoppingTab from './components/ShoppingTab/index';
import Choose from './components/Choose/index';
import {
    OrderWrapper,
} from './style';

const Order = () => { //  可改为无状态组件
        return (
            <OrderWrapper>
                <Choose />

                <ShoppingTab />

                <OrderIconfont />
            </OrderWrapper>
        );
};

export default Order;