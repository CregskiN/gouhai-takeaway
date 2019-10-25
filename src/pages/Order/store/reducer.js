import {combineReducers} from 'redux-immutable';
import {reducer as foodList} from '../components/Choose/store/index';
import {reducer as choosedList} from '../components/ShoppingTab/store/index';


const reducer =combineReducers({
    food: foodList,
    select: choosedList,
});

export default reducer;