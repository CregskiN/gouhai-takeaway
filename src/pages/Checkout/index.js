import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Cascader} from "antd";
import {options} from "./options/cascaderoptions";
import {actionCreators} from './store/index';
import {
    CheckoutWrapper,
    SchoolWrapper,
    CheckoutTable,
    CheckoutHeader,
    HasChoosedItem,
    ShoppingWrapper,
    TabLeft,
    TabRight,
} from "./style";

class Checkout extends PureComponent {

    render() {
        const {ChoosedList,totalPrice,handleSubmit} = this.props;

        return (
            <CheckoutWrapper>
                <SchoolWrapper className='choose-schoolAndTime'>
                    <div className='wrap'>
                        <Cascader className='schoolAndTime-cas' options={options}
                                  onChange={() => console.log('Cas changed!')} placeholder="请在此选择学校和时间"/>
                    </div>
                </SchoolWrapper>


                <CheckoutTable>
                    <CheckoutHeader>
                        <div className='dish'>菜品</div>
                        <div className='sum'>价格</div>
                        <div className='operate'>份数</div>
                    </CheckoutHeader>
                    {
                        ChoosedList.map((item, index) => {
                            return getChoosedItem(item);
                        })
                    }
                </CheckoutTable>

                <ShoppingWrapper>

                    <TabLeft>

                        <img className='takeaway-img' src={require('../Order/images/Shopping/takeaway.png')} alt={''}/>

                        <div className='totalPrice'>
                            &nbsp;&nbsp;{'￥' + totalPrice + '.00'}
                        </div>
                    </TabLeft>

                    <TabRight>
                        <div className='button'>
                            <div onClick={() => {handleSubmit(ChoosedList,totalPrice)}} className='ok'>结账</div>
                        </div>
                    </TabRight>
                </ShoppingWrapper>


            </CheckoutWrapper>
        )
    }
}

const getChoosedItem = (item) => {
    return (
        <HasChoosedItem key={item.get('id')}>
            <div className='dish'>
                <div>{item.get('name')}</div>
            </div>
            <div className='price'>
                <div>{'￥' + item.get('sum') * item.get('currentPrice') + '.00'}</div>
            </div>
            <div className='operate'>
                <div className='add'>-</div>
                <div className='sum'>{item.get('sum')}</div>
                <div className='less'>+</div>
            </div>
        </HasChoosedItem>
    )
};


const mapStateToProps = (state) => ({
    ChoosedList: state.getIn(['order', 'select', 'ChoosedList']),
    totalPrice: state.getIn(['order', 'select', 'totalPrice']),
});

const mapDispatchToProps = () => ({
    handleSubmit(postList,totalPrice){
        actionCreators.postInfo(postList,totalPrice);
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);