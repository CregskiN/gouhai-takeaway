import {constants} from './index';
// import axios from 'axios';
// import {fromJS} from 'immutable';

const switchTrigger = (id, newIsTurnOn) => ({
    type: constants.CHANGE_COMMODITY_ENABLE,
    id,
    enable: newIsTurnOn
});

export {
    switchTrigger
};