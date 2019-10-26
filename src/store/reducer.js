import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '../common/Header/store/index';
import {reducer as orderReducer} from '../pages/Order/store/index';
import {reducer as managementCommodityReducer} from '../pages/ManagementCommodity/store';
import {reducer as checkoutReducer} from '../pages/Checkout/store/index';

const reducer = combineReducers({
    header: headerReducer,
    order: orderReducer,
    managementCommodity: managementCommodityReducer,
    checkout: checkoutReducer,
});

export default reducer;
