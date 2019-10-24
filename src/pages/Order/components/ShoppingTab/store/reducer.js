import {fromJS} from 'immutable';

const defaultState = fromJS({
    totalPrice:0,
});

export default (state = defaultState, action) => {
    switch(action.type) {

        default:
            return state;
    }
}