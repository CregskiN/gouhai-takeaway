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

//  点击"取消"触发，退出编辑模式
const onCancel = (id) => ({
    type: constants.ON_CANCEL,
    id,
});

export {
    switchTrigger,
    underRevision,
    onCancel
};