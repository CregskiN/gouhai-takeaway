import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {
    ChooseWrapper,
    FoodItem,
    FoodWrapper,
} from "./style";
import {actionCreators} from "./store/index";


class Choose extends PureComponent {

    render() {
        const {showEnter ,foodList,handleAddFood} = this.props;
        return (
            <ChooseWrapper>
                <FoodWrapper className='choose-food'>
                    <span>请选择菜品：</span>
                    <TransitionGroup>
                        {
                            foodList.map((item,index) => {
                                if(item.get('enable') === false){
                                    return null;
                                } else {
                                    return (
                                        <CSSTransition
                                            key={index}
                                            timeout={500}
                                            classNames='listItems'
                                            in={showEnter}
                                        >
                                            <FoodItem key={item}>
                                                <img onClick={() => console.log(index)} className='food-left logo' src={item.get('imgURL')} alt={''}/>
                                                <div className='food-right'>
                                                    <div className='info'>
                                                        <div className='food-name'>
                                                            {item.get('name')}&nbsp;
                                                            <i className="iconfont ic">&#xe61f;</i>
                                                        </div>
                                                        <div className='food-desc'>{item.get('miaoshu')}</div>
                                                        <div className='food-price'>
                                                        <span
                                                            className='originalPrice'>原价:￥{item.get('originalPrice')}</span>
                                                            &nbsp;&nbsp;&nbsp;
                                                            <span
                                                                className='currentPrice'>现价:￥{item.get('currentPrice')}</span>
                                                        </div>
                                                    </div>
                                                    <div className='add'
                                                         onClick={() => handleAddFood(foodList, item.get('id'))}>
                                                        <span>+</span>
                                                    </div>
                                                </div>
                                            </FoodItem>
                                        </CSSTransition>
                                    )
                                }
                            })
                        }
                    </TransitionGroup>
                </FoodWrapper>
            </ChooseWrapper>
        )
    }

    componentDidMount() {
        let ws = new WebSocket("ws://hxsmallgame.cn:3006");
        let receiveList;
        const js = {
            type: "caidan"
        };

        ws.onopen = (event) => {
            console.log("Connection open...");
            ws.send(JSON.stringify(js));
        };

        ws.onmessage = (response) => {
            receiveList = JSON.parse(JSON.parse(response.data).data);
            console.log(receiveList);
            ws.close();
        };

        ws.onclose = (event) => {
            console.log("Connection closed");
            this.props.getOrderList(receiveList);
        };
    }

}


const mapStateToProps = (state) => ({
    foodList: state.getIn(['order', 'food', 'foodList']),
    totalChoosedKinds: state.getIn(['order', 'select', 'totalChoosedKinds']), //限制选中菜品种数
    showEnter: state.getIn(['order','food','showEnter'])
});

const mapDispatchToProps = (dispatch) => ({
    getOrderList(receiveList) {
        dispatch(actionCreators.getOrderList(receiveList));
    },
    handleAddFood(foodList, id) {
        dispatch(actionCreators.addShoppingCart(foodList, id));
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Choose);

