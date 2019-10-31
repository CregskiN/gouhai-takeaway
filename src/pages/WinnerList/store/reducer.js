import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    winnerList: [{
        id: 0,
        name: '张三',
        phone: '13347883433',
        date: '2019-10-31',
        award: 2
    },{
        id: 1,
        name: '李四',
        phone: '15713983746',
        date: '2019-10-31',
        award: 1
    },{
        id: 2,
        name: '刘老五',
        phone: '13867436823',
        date: '2019-10-31',
        award: 3
    }]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        // 删除本地的中奖者记录
        case constants.DELETE_LOCAL_WINNER:
            return state.update('winnerList', ($temList) => {
                const index = $temList.findIndex(($obj) => {
                    return $obj.get('id') === action.id;
                });
                if (index === -1) {
                    return $temList;
                } else {
                    return $temList.delete(index);
                }
            });

        default:
            return state;
    }
};