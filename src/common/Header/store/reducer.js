import {fromJS} from 'immutable';

const defaultState = fromJS({

});

export default (state = defaultState, action) => {
    switch(action.type){
        default:
            return state;
    }
};