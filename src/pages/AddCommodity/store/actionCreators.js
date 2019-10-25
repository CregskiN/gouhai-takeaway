import {constants} from './index';
// import axios from 'axios';
// import {fromJS} from 'immutable';

// CommodityTitleInput的value改变时
const commodityTitleInputChange = (value) => ({
    type: constants.COMMODITY_TITLE_INPUT_CHANGE,
    value,
});

// OriginalPriceInput的value改变时
const originalPriceInputChange = (value) => ({
    type: constants.ORIGINAL_INPUT_CHANGE,
    value,
});

// CurrentPriceInput的value改变时
const currentPriceInputChange = (value) => ({
    type: constants.CURRENT_INPUT_CHANGE,
    value,
});

// 点击Switch开关时，切换enable
const commodityEnableSwitch = (newIsTurnOn) => ({
    type: constants.COMMODITY_ENABLE_SWITCH,
    enable: newIsTurnOn
});

export {
    commodityTitleInputChange,
    originalPriceInputChange,
    currentPriceInputChange,
    commodityEnableSwitch
};