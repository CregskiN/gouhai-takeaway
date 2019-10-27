import {constants} from './index';
// import axios from 'axios';
import {fromJS} from 'immutable';

// 从服务器加载商品列表
const loadCommodity = (commodityList) => ({
    type: constants.LOAD_COMMODITY_LIST,
    commodityList:  fromJS(commodityList)
});

// 点击Switch开关时，切换enable
const switchTrigger = (id, newIsTurnOn) => ({
    type: constants.CHANGE_COMMODITY_ENABLE,
    id,
    enable: newIsTurnOn
});

// 点击Switch开关时，向服务器发送enable更改信息
const switchTriggerPost = (item) => {
    return (dispatch) => {
        item.set('enable', !item.get('enable'));
        const myStr = JSON.stringify({    // 指示灯，判断发送指令是什么
            type: "changecaidan",
            data: item.toJS()
        });
        let ws = new WebSocket("ws://hxsmallgame.cn:3006");
        ws.onopen = () => {
            console.log('connected');
            ws.send(myStr);
        };
        console.log(item.toJS());
        console.log("switchTriggerPost done");
    }
};

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

// 点击"保存"触发，保存编辑数据至本地store，同时post给服务器，并退出编辑模式
const onSave = (id, temCommodity) => {
    return (dispatch) => {
        const myCommodity = temCommodity.toJS();
        const myStr = JSON.stringify({    // 指示灯，判断发送指令是什么
            type: "changecaidan",
            data: myCommodity
        });
        let ws = new WebSocket("ws://hxsmallgame.cn:3006");
        ws.onopen = () => {
            console.log('connected');
            ws.send(myStr);
        };
        dispatch(_SaveTemCommodityToLocal(id));
    }
};

// redux-thunk私有方法，保存编辑数据至本地store，并退出编辑模式
const _SaveTemCommodityToLocal = (id) => ({
    type: constants.SAVE_TEM_COMMODITY_TO_LOCAL,
    id,
});

//  点击"取消"触发，退出编辑模式
const onCancel = (id) => ({
    type: constants.ON_CANCEL,
    id,
});

// 点击seeMore触发，弹出气泡，打开Mask遮罩
const onSeeMore = (id) => ({
    type: constants.ON_SEE_MORE,
    id,
});

// 点击"删除商品"触发，本地删当前商品，关闭Mask遮罩，并向服务器发送删除指令
const onDeleteCommodity = (id) => {
    return (dispatch) => {
        dispatch(_deleteLocalCommodity(id));
    }
};

// redux-thunk私有方法，本地删当前商品，关闭Mask遮罩
const _deleteLocalCommodity = (id) => ({
    type: constants.DELETE_LOCAL_COMMODITY,
    id,
});

// 点击Mask遮罩触发，隐藏气泡，关闭Mask遮罩
const onMask = (id) => ({
    type: constants.ON_MASK,
    id
});

export {
    loadCommodity,
    switchTrigger,
    switchTriggerPost,
    underRevision,
    commodityTitleInputChange,
    originalPriceInputChange,
    currentPriceInputChange,
    onSave,
    onCancel,
    onSeeMore,
    onMask,
    onDeleteCommodity,
};