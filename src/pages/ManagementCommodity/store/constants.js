const LOAD_COMMODITY_LIST = 'managementCommodity/LOAD_COMMODITY_LIST';  // 从服务器加载商品列表
const CHANGE_COMMODITY_ENABLE = 'managementCommodity/CHANGE_COMMODITY_ENABLE';  // 点击Switch开关时，切换enable
const SWITCH_TRIGGER_POST = 'managementCommodity/SWITCH_TRIGGER_POST';  // 点击Switch开关时，向服务器发送enable更改信息
const UNDER_REVISION = 'managementCommodity/UNDER_REVISION';    // 点击CommodityInfo时，进入编辑模式
const COMMODITY_TITLE_INPUT_CHANGE = 'managementCommodity/COMMODITY_TITLE_INPUT_CHANGE';    // 编辑模式下，CommodityTitleInput的value改变时
const ORIGINAL_PRICE_INPUT_CHANGE = 'managementCommodity/ORIGINAL_PRICE_INPUT_CHANGE';  // 编辑模式下，OriginalPriceInput改变时
const CURRENT_PRICE_INPUT_CHANGE = 'managementCommodity/CURRENT_PRICE_INPUT_CHANGE';  // 编辑模式下，CurrentPriceInput改变时
const ON_SAVE = 'managementCommodity/ON_SAVE';  // 点击"保存"触发，保存编辑数据至服务器，并退出编辑模式
const ON_CANCEL = 'managementCommodity/ON_CANCEL';  //  点击"取消"触发，退出编辑模式

export {
    LOAD_COMMODITY_LIST,
    CHANGE_COMMODITY_ENABLE,
    UNDER_REVISION,
    COMMODITY_TITLE_INPUT_CHANGE,
    ORIGINAL_PRICE_INPUT_CHANGE,
    CURRENT_PRICE_INPUT_CHANGE,
    ON_SAVE,
    ON_CANCEL
};