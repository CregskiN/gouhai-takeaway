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

// CommodityImgURLInput的value改变时
const commodityImgURLInputChange = (value) => ({
    type: constants.COMMODITY_IMG_URL_INPUT_CHANGE,
    value,
});

// 点击Switch开关时，切换enable
const commodityEnableSwitch = (newIsTurnOn) => ({
    type: constants.COMMODITY_ENABLE_SWITCH,
    enable: newIsTurnOn
});

// 点击"添加"时触发，添加数据至服务器
const onPost = (immutableCommodity) => {
    return (dispatch) => {
        const myStr = JSON.stringify({
            type: "addcaidan",
            data: JSON.stringify(immutableCommodity.toJS())
        });
        let ws = new WebSocket("ws://hxsmallgame.cn:3006");
        ws.onopen = () => {
            alert('添加成功');
            ws.send(myStr);
        };
        dispatch(onCancel());
    };
};

// 点击"取消"时触发，清空temCommodity
const onCancel = () => ({
    type: constants.ON_CANCEL
});

export {
    commodityTitleInputChange,
    originalPriceInputChange,
    currentPriceInputChange,
    commodityImgURLInputChange,
    commodityEnableSwitch,
    onPost,
    onCancel
};