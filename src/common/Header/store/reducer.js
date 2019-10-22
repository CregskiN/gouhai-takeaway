import {fromJS} from 'immutable';

const defaultState = fromJS({
    in: true,
});

export default (state = defaultState, action) => {
    switch(action.type){
        default:
            return state;
    }
};