import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    commodity: {
        id: null,
        name: '',
        originalPrice: '',
        currentPrice: '',
        enable: true,
        isUnderRevision: false
    },
});

export default (state = defaultState, action) => {
    switch (action.type) {
        // CommodityTitleInput的value改变时
        case constants.COMMODITY_TITLE_INPUT_CHANGE:
            return state.setIn(['commodity', 'name'], action.value);

        // OriginalPriceInput的value改变时
        case constants.ORIGINAL_INPUT_CHANGE:
            return state.setIn(['commodity', 'originalPrice'], action.value);

        // CurrentPriceInput的value改变时
        case constants.CURRENT_INPUT_CHANGE:
            return state.setIn(['commodity', 'currentPrice'], action.value);

        // 点击Switch开关时，切换enable
        case constants.COMMODITY_ENABLE_SWITCH:
            return state.setIn(['commodity', 'enable'], action.enable);

        // 点击"取消"时触发，返回后台管理首页
        case constants.ON_CANCEL:
            return state.set('commodity', fromJS({
                id: null,
                name: '',
                originalPrice: '',
                currentPrice: '',
                enable: true,
                isUnderRevision: false
            }));

        default:
            return state;
    }
};