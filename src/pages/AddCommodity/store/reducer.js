import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    commodity: {
        id: null,
        name: null,
        originalPrice: null,
        currentPrice: null,
        enable: true,
        isUnderRevision: false
    }
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

        default:
            return state;
    }
};