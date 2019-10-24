import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    commodityList: [{
        id: 0,
        name: "卤肉饭",
        originalPrice: "12",
        currentPrice: "10",
        enable: true
    },{
        id: 1,
        name: "炸鸡饭",
        originalPrice: "12",
        currentPrice: "10",
        enable: true
    },{
        id: 2,
        name: "烤肉拌饭",
        originalPrice: "12",
        currentPrice: "10",
        enable: false
    },{
        id: 3,
        name: "黑椒肥牛饭",
        originalPrice: "15",
        currentPrice: "12",
        enable: true
    },{
        id: 4,
        name: "麻辣火锅",
        originalPrice: "20",
        currentPrice: "17",
        enable: true
    },{
        id: 5,
        name: "鸡米花",
        originalPrice: "10",
        currentPrice: "8",
        enable: true
    }]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_COMMODITY_ENABLE:
            // immutable深层嵌套查找并修改。.update()为immutable方法， .findIndex()为ES6数组的方法
            return state.update('commodityList', ($temList) => {
                const index = $temList.findIndex(($obj) => {
                    return $obj.get('id') === action.id;
                });
                if (index === -1) {
                    return $temList;
                } else {
                    return $temList.update(index, ($obj) => {
                        return $obj.set('enable', action.enable);
                    });
                }
            });
        default:
            return state;
    }
};