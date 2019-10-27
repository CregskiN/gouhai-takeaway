import {actionTypes} from './index';

export const changeShowTransition = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.CHANGE_SHOWTRANSITION,
        })
    }
};