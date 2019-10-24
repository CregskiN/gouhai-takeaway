import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '../common/Header/store/index';
import {reducer as orderReducer} from '../pages/Order/store/index';
import {reducer as managementCommodityReducer} from '../pages/ManagementCommodity/store';

const reducer = combineReducers({
    header: headerReducer,
    order: orderReducer,
    managementCommodity: managementCommodityReducer
});

export default reducer;
