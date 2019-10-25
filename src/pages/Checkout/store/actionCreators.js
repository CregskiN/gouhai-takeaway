import axios from 'axios';


export const postInfo = (list,totalPrice) => {
    const postList = list.toJS();
    console.log(postList,totalPrice);
};