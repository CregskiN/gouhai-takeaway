import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    commodityList: [{
        id: 0,
        name: "卤肉饭",
        originalPrice: 12,
        currentPrice: 10,
        enable: true,
        isUnderRevision: false
    },{
        id: 1,
        name: "炸鸡饭",
        originalPrice: 12,
        currentPrice: 10,
        enable: true,
        isUnderRevision: false
    },{
        id: 2,
        name: "烤肉拌饭",
        originalPrice: 12,
        currentPrice: 10,
        enable: false,
        isUnderRevision: false
    },{
        id: 3,
        name: "黑椒肥牛饭",
        originalPrice: 15,
        currentPrice: 12,
        enable: true,
        isUnderRevision: false
    },{
        id: 4,
        name: "麻辣火锅",
        originalPrice: 20,
        currentPrice: 17,
        enable: true,
        isUnderRevision: false
    },{
        id: 5,
        name: "鸡米花",
        originalPrice: 10,
        currentPrice: 8,
        enable: true,
        isUnderRevision: false
    }],
    revisionEnable: true,
    temCommodity: {}
});

export default (state = defaultState, action) => {

    switch (action.type) {
        // 点击Switch开关时，切换enable
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

        // 点击CommodityInfo时，进入编辑模式。注意：此处action.item为immutable对象
        case constants.UNDER_REVISION:
            // immutable深层嵌套查找并修改。.update()为immutable方法， .findIndex()为ES6数组的方法
            // 确定index
            const index = state.get('commodityList').findIndex(($obj) => {
                return $obj.get('id') === action.id;
            });
            return state.merge({
                revisionEnable: false,
                temCommodity: state.get('commodityList').get(index)
            }).update('commodityList', ($temList) => {
                if (index === -1) {
                    return $temList;
                } else {
                    return $temList.update(index, ($obj) => {
                        return $obj.set('isUnderRevision', true);
                    });
                }
            });

        // 编辑模式下，CommodityTitleInput的value改变时
        case constants.COMMODITY_TITLE_INPUT_CHANGE:
            return state.setIn(['temCommodity', 'name'], action.value);

        // 编辑模式下，OriginalPriceInput改变时
        case constants.ORIGINAL_PRICE_INPUT_CHANGE:
            return state.setIn(['temCommodity', 'originalPrice'], action.value);

        // 编辑模式下，CurrentPriceInput改变时
        case constants.CURRENT_PRICE_INPUT_CHANGE:
            return state.setIn(['temCommodity', 'currentPrice'], action.value);

        // 点击"保存"触发，保存编辑数据至服务器，并退出编辑模式
        case constants.ON_SAVE:
            return state.update('commodityList', ($temList) => {
                const index = $temList.findIndex(($obj) => {
                    return $obj.get('id') === action.id;
                });
                if (index === -1) {
                    return $temList;
                } else {
                    return $temList.set(index, state.get('temCommodity'));
                }
            }).set('revisionEnable', true);

        //  点击"取消"触发，退出编辑模式
        case constants.ON_CANCEL:
            // immutable深层嵌套查找并修改。.update()为immutable方法， .findIndex()为ES6数组的方法
            return state.update('commodityList', ($temList) => {
                const index = $temList.findIndex(($obj) => {
                    return $obj.get('id') === action.id;
                });
                if (index === -1) {
                    return $temList;
                } else {
                    return $temList.update(index, ($obj) => {
                        return $obj.set('isUnderRevision', false);
                    });
                }
            }).merge({
                revisionEnable: true,
                temCommodity: {}
            });

        default:
            return state;
    }
};