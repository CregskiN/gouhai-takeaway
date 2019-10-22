import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store/index';
import {
    OrderWrapper,
    ChooseWrapper,
} from './style';

class Order extends Component {

    render() { 
        const {handleTimeClick} = this.props;
        return (
            <OrderWrapper>
                <ChooseWrapper>
                    <div className='choose-time'>
                        <span onClick={handleTimeClick}>请选择送餐时间(免配送费)：</span>
                        {this.getTimeList()}
                    </div>
                    <div className='choose-school'>
                        <span>请选择学校名称：</span>
                    </div>
                </ChooseWrapper>
            </OrderWrapper>
        );
    }

    getTimeList = () => {
        const {isChoosingTime} = this.props;

    };

    getSchoolList = () => {
        const {isChoosingSchool} = this.props;
    };
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