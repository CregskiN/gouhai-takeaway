import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '../common/Header/store/index';
import {reducer as orderReducer} from '../pages/Order/store/index';

const reducer = combineReducers({
    header: headerReducer,
    order: orderReducer,
});

export default reducer;
