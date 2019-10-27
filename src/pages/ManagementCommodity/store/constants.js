const LOAD_COMMODITY_LIST = 'managementCommodity/LOAD_COMMODITY_LIST';  // 从服务器加载商品列表
const CHANGE_COMMODITY_ENABLE = 'managementCommodity/CHANGE_COMMODITY_ENABLE';  // 点击Switch开关时，切换enable
const UNDER_REVISION = 'managementCommodity/UNDER_REVISION';    // 点击CommodityInfo时，进入编辑模式
const COMMODITY_TITLE_INPUT_CHANGE = 'managementCommodity/COMMODITY_TITLE_INPUT_CHANGE';    // 编辑模式下，CommodityTitleInput的value改变时
const ORIGINAL_PRICE_INPUT_CHANGE = 'managementCommodity/ORIGINAL_PRICE_INPUT_CHANGE';  // 编辑模式下，OriginalPriceInput改变时
const CURRENT_PRICE_INPUT_CHANGE = 'managementCommodity/CURRENT_PRICE_INPUT_CHANGE';  // 编辑模式下，CurrentPriceInput改变时
const SAVE_TEM_COMMODITY_TO_LOCAL = 'managementCommodity/SAVE_TEM_COMMODITY_TO_LOCAL';  // redux-thunk私有方法，保存编辑数据至本地store，并退出编辑模式
const ON_CANCEL = 'managementCommodity/ON_CANCEL';  //  点击"取消"触发，退出编辑模式
const ON_SEE_MORE = 'managementCommodity/ON_SEE_MORE';  // 点击seeMore触发，弹出气泡
const ON_MASK = 'managementCommodity/ON_MASK';  // 点击Mask遮罩触发，隐藏气泡，关闭Mask遮罩
const DELETE_LOCAL_COMMODITY = 'managementCommodity/DELETE_LOCAL_COMMODITY';  // 点击"删除商品"触发，本地删当前商品，关闭Mask遮罩，并向服务器发送删除指令

export {
    LOAD_COMMODITY_LIST,
    CHANGE_COMMODITY_ENABLE,
    UNDER_REVISION,
    COMMODITY_TITLE_INPUT_CHANGE,
    ORIGINAL_PRICE_INPUT_CHANGE,
    CURRENT_PRICE_INPUT_CHANGE,
    SAVE_TEM_COMMODITY_TO_LOCAL,
    ON_CANCEL,
    ON_SEE_MORE,
    ON_MASK,
    DELETE_LOCAL_COMMODITY
};