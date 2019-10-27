import {actionTypes} from './index';

export const changeSum = (operate, id) => { //传送至shoppingTab的reducer
    if (operate === actionTypes.ADD_SUM) {
        const addSumAction = {
            type: actionTypes.ADD_SUM,
            id,
        };
        return (dispatch) => {
            dispatch(addSumAction);
        }
    }
    if (operate === actionTypes.LESS_SUM) {
        const lessSumAction = {
            type: actionTypes.LESS_SUM,
            id,
        };
        return (dispatch) => {
            dispatch(lessSumAction)
        }
    }

};

export const selectSchoolAndMealTime = (SchoolAndMealTime) => {

    const addSchoolAndMealTimeAction = {
        type: actionTypes.SELECT_SCHOOLANDMEALTIME,
        school: SchoolAndMealTime[1],
        mealTime: SchoolAndMealTime[2],
    };
    return (dispatch) => {
        dispatch(addSchoolAndMealTimeAction);
    }
};

export const changeInputName = (name) => {
    const changeInputNameAction = {
        type: actionTypes.CHANGE_INPUTNAME,
        name,
    };
    return (dispatch) => {
        dispatch(changeInputNameAction);
    }
};

export const changeInputCellphoneNumber = (cellphoneNumber) => {
    const changeInputCellphoneNumberAction = {
        type: actionTypes.CHANGE_INPUTCELLPHONENUMBER,
        cellphoneNumber: cellphoneNumber,
    };
    return (dispatch) => {
        dispatch(changeInputCellphoneNumberAction);
    }
};

export const changeShowTransition = () => {
    const changeShowTransitionAction = {
        type: actionTypes.CHANGE_SHOWTRANSITION,
    };
    return (dispatch) => {
        dispatch(changeShowTransitionAction);
    };
};

/*export const checkoutasd = (totalPrice,selectedFoodList) => {
    const date = new Date();
    const checkoutAction = {
        type: actionTypes.CHECKOUT_ORDERTIMEANDTOTALPRICE,
        orderTime: date,
        totalPrice: totalPrice,
        selectedFoodList,
    };
    return (dispatch) => {
        dispatch(checkoutAction);
    }
};*/


//websocket试验！ 试验成功！
export const checkout = (list) => {
    const readyList = list.toJS();
    const time = new Date();
    const pay_time = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate() + ' ' + time
        .getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
    let flagzhifu = false;

    //校验送餐地点
    if (readyList.school === '') {
        alert("请选择送餐地点");
        return null;
    } else if (readyList.school === '_forbidden') {
        alert("对不起，您选择的送餐地点不在服务区");
        return null;
    }
    //校验送餐时间

    console.log("小时", readyList.mealTime.slice(0, 2));
    console.log("分钟", readyList.mealTime.slice(3, 5));
    console.log("小时", pay_time.slice(11, 13));
    console.log("分钟", pay_time);

    let minutesDelete = parseInt(parseInt(readyList.mealTime.slice(0, 2)) * 60 + parseInt(readyList.mealTime.slice(3, 5)))
        - (time.getHours() * 60 + time.getMinutes());
    console.log("距离送餐时间" + minutesDelete + "分钟");

    if (readyList.mealTime === '') {
        alert("请选择送餐时间");
        return null;
    } /*else if (minutesDelete < 0 || minutesDelete > 60) {
        alert("我们目前只接受一个小时前点餐~");
        return null;
    }*/

    //校验选择菜品数
    if (readyList.ChoosedList.length === 0) {
        alert("请选择菜品");
        return null;
    }
    //校验取餐人姓名
    if (readyList.personName === '') {
        alert("请输入取餐人姓名");
        return null;
    }
    //校验手机号
    if (readyList.cellphoneNumber === '') {
        alert("请输入取餐人电话");
        return null;
    } else if (readyList.cellphoneNumber.length > 11 || readyList.cellphoneNumber.length < 11) {
        alert("请核实电话号位数是否正确");
        return null;
    }


    const myjson = [];

    for (let i = 0; i < readyList.ChoosedList.length; i++) {
        let json = {
            "type": "xie",
            "food_time": readyList.mealTime,
            "food_qunlia": readyList.school,
            "food_name": readyList.ChoosedList[i].name,
            "personmessage_name": readyList.personName,
            "personmessage_phone": readyList.cellphoneNumber,
            "pay_money": readyList.ChoosedList[i].sum * readyList.ChoosedList[i].currentPrice,
            "pay_time": pay_time
        };
        myjson.push(json);
    }
    console.log(myjson[0]);

    document.cookie = "you_paymoney=" + String(readyList.ChoosedList[0].sum * readyList.ChoosedList[0].currentPrice);
    const myqueren = {
        "type": "querenfukuan",
        "food_time": readyList.mealTime,
        "food_qunlia": readyList.school,
        "food_name": readyList.ChoosedList[0].name,
        "personmessage_name": readyList.personName,
        "personmessage_phone": readyList.cellphoneNumber,
        "pay_money": readyList.ChoosedList[0].sum * readyList.ChoosedList[0].currentPrice,
        "pay_time": pay_time
    };

    localStorage.removeItem('tempqueren');
    localStorage.removeItem('mypaymoney');
    localStorage.setItem("tempqueren", JSON.stringify(myqueren));
    localStorage.setItem("mypaymoney", String(readyList.ChoosedList[0].sum * readyList.ChoosedList[0].currentPrice));


    let ws = new WebSocket("ws://hxsmallgame.cn:3002");

    ws.onerror = (evt) => { //指定报错时的回调
        alert("网络错误，请稍后重试");
        flagzhifu = false;
        return null;
    };

    ws.onopen = (evt) => {  //服务器连接成功后的回调
        console.log("Connect success");
        flagzhifu = true;
        ws.send(JSON.stringify(myjson));
        _locationToDianCanIndex();
    };

    ws.onmessage = (cb) => { //收到服务器数据 后的回调
        console.log("Received Message" + JSON.parse(cb.data));
        ws.close();
    };

    ws.onclose = (evt) => { //连接关闭后的回调
        console.log("Connect closed")
    }
};

const _locationToDianCanIndex = () => {
    window.location.href = '../diancan.html';
};

/*//localStorage试验！
export const checkoutLocalStorage = () => {

};*/


/*

export const submit = () => {
    const time = new Date();
    const submitAction = {
        type: actionTypes.SUBMIT_INFO,
        name:
        money:

    }
};*/
