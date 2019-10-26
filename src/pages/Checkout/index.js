import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Cascader} from "antd";
import {options} from "./options/cascaderoptions";
import {actionCreators} from './store/index';
import {actionTypes} from './store/index';
import {fromJS} from 'immutable';
import {
    CheckoutWrapper,
    SchoolWrapper,
    CheckoutTable,
    CheckoutHeader,
    HasChoosedItem,
    Input,
    ShoppingWrapper,
    TabLeft,
    TabRight,
} from "./style";


class Checkout extends PureComponent {

    render() {
        const {
            mealTime,
            school,
            personName,
            cellphoneNumber,
            totalSum,
            ChoosedList,
            totalPrice,
            handleChangeInputName,
            handleChangeInputCellphoneNumber,
            handleCheckout,
            handleSelectSchoolAndMealTime,
            handleChangeSum
        } = this.props;

        return (
            <CheckoutWrapper>

                <CheckoutTable>
                    <CheckoutHeader>
                        <div className='dish'>菜品</div>
                        <div className='sum'>价格</div>
                        <div className='operate'>份数</div>
                    </CheckoutHeader>
                    {
                        ChoosedList.map((item, index) => {
                            return getChoosedItem(item, handleChangeSum);
                        })
                    }
                </CheckoutTable>

                <SchoolWrapper className='choose-schoolAndTime'>
                    <Input onChange={() => handleChangeInputName(this.inputNameRef)} className='inputName'
                           placeholder='请在此输入你的名字'
                           ref={(inputName) => this.inputNameRef = inputName}/>
                    <Input onChange={() => handleChangeInputCellphoneNumber(this.inputCellphoneNumberRef)}
                           className='inputCellphoneNum' placeholder='请在此输入你的手机号'
                           ref={(inputCellphoneNum) => this.inputCellphoneNumberRef = inputCellphoneNum}/>
                    <div className='wrap'>
                        <Cascader className='schoolAndTime-cas' options={options}
                                  onChange={(value, selectedOptions) => handleSelectSchoolAndMealTime(value)}
                                  placeholder="请在此选择学校和时间"/>
                    </div>
                    {/*<SubmitButton>提交</SubmitButton>*/}
                </SchoolWrapper>

                <ShoppingWrapper>
                    <TabLeft>

                        <img className='takeaway-img' src={require('../Order/images/Shopping/takeaway.png')} alt={''}/>

                        <div className='totalPrice'>
                            &nbsp;&nbsp;{'￥' + totalPrice + '.00'}
                        </div>
                    </TabLeft>

                    <TabRight>
                        <div className='button'>
                            <div onClick={() =>
                                (totalSum === 0
                                    ? null
                                    : handleCheckout(fromJS({
                                        mealTime,
                                        school,
                                        ChoosedList,
                                        personName,
                                        cellphoneNumber,
                                        totalPrice})))
                            } className='ok'>结账
                            </div>
                        </div>
                    </TabRight>
                </ShoppingWrapper>


            </CheckoutWrapper>
        )
    }
}

const getChoosedItem = (item, handleChangeSum) => {
    return (
        <HasChoosedItem key={item.get('id')}>
            <div className='dish'>
                <div>{item.get('name')}</div>
            </div>
            <div className='price'>
                <div>{'￥' + item.get('sum') * item.get('currentPrice') + '.00'}</div>
            </div>
            <div className='operate'>
                <div className='less' onClick={() => handleChangeSum(actionTypes.LESS_SUM, item.get('id'))}>-</div>
                <div className='sum'>{item.get('sum')}</div>
                <div className='add' onClick={() => handleChangeSum(actionTypes.ADD_SUM, item.get('id'))}>+</div>
            </div>
        </HasChoosedItem>
    )

};


const mapStateToProps = (state) => ({
    ChoosedList: state.getIn(['order', 'select', 'ChoosedList']),
    totalPrice: state.getIn(['order', 'select', 'totalPrice']),
    totalSum: state.getIn(['order', 'select', 'totalSum']),
    school: state.getIn(['checkout', 'school']),
    mealTime: state.getIn(['checkout', 'mealTime']),
    cellphoneNumber: state.getIn(['checkout', 'cellphoneNumber']),
    orderTime: state.getIn(['checkout', 'orderTime']),
    personName: state.getIn(['checkout', 'personName']),
    foodNames: state.getIn(['checkout', 'foodNames']),

});

const mapDispatchToProps = (dispatch) => ({
    handleChangeSum(operate, id) {
        dispatch(actionCreators.changeSum(operate, id))
    },

    handleChangeInputName(inputNameRef) {
        const name = inputNameRef.value;
        console.log(name);
        dispatch(actionCreators.changeInputName(name));
    },

    handleChangeInputCellphoneNumber(inputCellphoneNumberRef) {
        const cellphoneNumber = inputCellphoneNumberRef.value;
        dispatch(actionCreators.changeInputCellphoneNumber(cellphoneNumber))
    },

    handleSelectSchoolAndMealTime(selectSchoolAndMealTime) {
        dispatch(actionCreators.selectSchoolAndMealTime(selectSchoolAndMealTime))
    },

    handleCheckout(totalPrice, choosedFoodList) { //已上传
        console.log("结账被点击了！");
        actionCreators.checkout(totalPrice, choosedFoodList);
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);