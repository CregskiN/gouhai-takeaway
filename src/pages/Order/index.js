import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store/index';
import { Cascader } from 'antd';
import {options} from './components/cascaderoptions';
import 'antd/dist/antd.css';

import {
    OrderWrapper,
    ChooseWrapper,
    FoodWrapper,
    SchoolWrapper,
    FoodItem,
} from './style';

class Order extends Component {

    render() {
        const {handleTimeClick} = this.props;
        return (
            <OrderWrapper>
                <ChooseWrapper>
                    <div className='menu'>
                        Menu图标
                    </div>

                    <FoodWrapper className='choose-food'>
                    <span onClick={handleTimeClick}>请选择菜品：</span>

                        <FoodItem>
                            <img className='food-left logo' src={require('./images/logo.jpg')} alt={''}/>
                            <div className='food-right'>
                                <div className='info'>
                                    <div className='food-name'>够嗨卤肉饭</div>
                                    <div className='food-des'>
                                        好吃不贵，大家都说好
                                    </div>
                                </div>
                                <div className='add'>
                                    +
                                </div>
                            </div>
                        </FoodItem>
                        <FoodItem>
                            <img className='logo' src={require('./images/logo.jpg')} alt={''}/>
                        </FoodItem>
                        <FoodItem>
                            <img className='logo' src={require('./images/logo.jpg')} alt={''}/>
                        </FoodItem>
                        <FoodItem>
                            <img className='logo' src={require('./images/logo.jpg')} alt={''}/>
                        </FoodItem>

                    </FoodWrapper>

                    <SchoolWrapper className='choose-schoolAndTime'>
                        <Cascader className='schoolAndTime-cas' options={options} onChange={() => console.log('Cas changed!')} placeholder="请在此选择学校" />
                    </SchoolWrapper>

                </ChooseWrapper>
            </OrderWrapper>
        );
    }

}

const mapStateToProps = (state) => ({
    isChoosingTime: state.get(['header', 'isChoosingTime']),
    isChoosingSchool: state.get(['header', 'isChoosingTime']),
});

const mapDispatchToProps = (dispatch) => {
    return {
        handleTimeClick() {
            dispatch(actionCreators.changeChoosingTime());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);