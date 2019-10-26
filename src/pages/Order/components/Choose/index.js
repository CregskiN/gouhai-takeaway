import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import {
    ChooseWrapper,
    FoodItem,
    FoodWrapper,
} from "./style";
import {actionCreators} from "./store/index";


class Choose extends PureComponent {
    render() {
        return (
            <ChooseWrapper>
                <FoodWrapper className='choose-food'>

                    <span>请选择菜品：</span>

                    {
                        this.props.foodList.map((item) => {
                            return (
                                <FoodItem key={item}>
                                    <img className='food-left logo' src={item.get('imgUrl')} alt={''}/>
                                    <div className='food-right'>
                                        <div className='info'>
                                            <div className='food-name'>
                                                {item.get('name')}&nbsp;
                                                <i className="iconfont ic">&#xe61f;</i>
                                            </div>
                                            <div className='food-desc'>{item.get('desc')}</div>
                                            <div className='food-price'>
                                                <span className='originalPrice'>原价:{item.get('originPrice')}￥</span>
                                                &nbsp;&nbsp;&nbsp;
                                                <span className='currentPrice'>现价:{item.get('currentPrice')}￥</span>
                                            </div>
                                        </div>
                                        <div className='add'
                                             onClick={() => this.props.handleAddFood(this.props.foodList, item.get('id'))}>+
                                        </div>
                                    </div>
                                </FoodItem>
                            )
                        })
                    }
                </FoodWrapper>


            </ChooseWrapper>
        )
    }

    componentDidMount() {
        this.props.getOrderList();
    }

}


const mapStateToProps = (state) => ({
    foodList: state.getIn(['order', 'food', 'foodList']),
});

const mapDispatchToProps = (dispatch) => ({
    getOrderList() {
        dispatch(actionCreators.getOrderList());
    },
    handleAddFood(foodList, id) {
        dispatch(actionCreators.addShoppingCart(foodList, id));
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Choose);

