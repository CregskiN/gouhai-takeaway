import {combineReducers} from 'redux-immutable';
import {reducer as foodList} from '../components/Choose/store/index';


const reducer =combineReducers({
    food: foodList,
});

export default reducer;