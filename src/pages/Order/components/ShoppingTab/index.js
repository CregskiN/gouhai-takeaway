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
        return (
            <ShoppingWrapper>
                <TabLeft>
                    <img className='takeaway-img' src={require('../../images/Shopping/takeaway.png')} alt={''}/>
                    <div className='totalPrice'>
                        ￥10.00
                    </div>
                </TabLeft>

                <TabRight>
                    <Link className='button' to={'/Checkout'}>
                        <div className='ok'>选好了</div>
                        <div className='okk'>order</div>
                    </Link>
                </TabRight>
            </ShoppingWrapper>
        )
    }

}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingTab);