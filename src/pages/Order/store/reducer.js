import {fromJS} from 'immutable';

const defaultState = fromJS({
    isChoosingTime: false,
    isChoosingSchool: false,
});

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};