import {constants} from './index';
// import axios from 'axios';
// import {fromJS} from 'immutable';

// 点击Switch开关时，切换enable
const switchTrigger = (id, newIsTurnOn) => ({
    type: constants.CHANGE_COMMODITY_ENABLE,
    id,
    enable: newIsTurnOn
});

// 点击CommodityInfo时，进入编辑模式。注意：此处参数item为immutable对象
const underRevision = (id, item) => ({
    type: constants.UNDER_REVISION,
    id,
    item,
});

// 编辑模式下，CommodityTitleInput的value改变时
const commodityTitleInputChange = (value) => ({
    type: constants.COMMODITY_TITLE_INPUT_CHANGE,
    value,
});

// 编辑模式下，OriginalPriceInput改变时
const originalPriceInputChange = (value) => ({
    type: constants.ORIGINAL_PRICE_INPUT_CHANGE,
    value,
});

// 编辑模式下，CurrentPriceInput改变时
const currentPriceInputChange = (value) => ({
    type: constants.CURRENT_PRICE_INPUT_CHANGE,
    value,
});

// 点击"保存"触发，保存编辑数据至服务器，并退出编辑模式
const onSave = (id) => ({
    type: constants.ON_SAVE,
    id,
});

//  点击"取消"触发，退出编辑模式
const onCancel = (id) => ({
    type: constants.ON_CANCEL,
    id,
});

export {
    switchTrigger,
    underRevision,
    commodityTitleInputChange,
    originalPriceInputChange,
    currentPriceInputChange,
    onSave,
    onCancel
};