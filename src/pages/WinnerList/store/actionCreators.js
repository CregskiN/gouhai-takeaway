import {constants} from './index';
// import axios from 'axios';
// import {fromJS} from 'immutable';

// 点击"删除记录"时触发，本地删除此条记录，同时给服务器发送删除指令
const onDeleteButton = (id) => {
    return (dispatch) => {
        const isConfirm = window.confirm('确认删除？');
        if (isConfirm) {
            dispatch(_deleteLocalWinner(id));
        }
    };
};

// 删除本地的中奖者记录
const _deleteLocalWinner = (id) => ({
    type: constants.DELETE_LOCAL_WINNER,
    id,
});

export {
    onDeleteButton
};