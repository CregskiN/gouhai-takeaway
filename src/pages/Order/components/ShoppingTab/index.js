import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
    ShoppingWrapper,
    TabLeft,
    TabRight,
} from './style';

class ShoppingTab extends PureComponent {

    render() {
        const {totalPrice, totalSum} = this.props;
        return (
            <ShoppingWrapper>
                <TabLeft>
                    <img className='takeaway-img' src={require('../../images/Shopping/fastfood.png')} alt={''}/>
                    <div className='totalPrice'>
                        &nbsp;&nbsp;￥{totalPrice}.00
                    </div>
                </TabLeft>

                <TabRight>
                    <Link className='button' to = {totalSum === 0 ? '' : '/Checkout'}>
                        <div className='ok'>选好了</div>
                        <div className='okk'>order></div>
                    </Link>
                </TabRight>
            </ShoppingWrapper>
        )
    }

}

const mapStateToProps = (state) => ({
    totalPrice: state.getIn(['order', 'select', 'totalPrice']),
    totalSum: state.getIn(['order', 'select', 'totalSum']),
});

const mapDispatchToProps = (dispatch) => ({});


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingTab);