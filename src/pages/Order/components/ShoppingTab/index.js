import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {CSSTransition} from "react-transition-group";
import {
    ShoppingWrapper,
    TabLeft,
    TabRight,
} from './style';

class ShoppingTab extends PureComponent {

    render() {
        const {showTransition,totalPrice, totalChoosedKinds} = this.props;
        return (
            <ShoppingWrapper>

                <TabLeft>
                    <CSSTransition
                        in={showTransition}
                        timeout={250}
                        classNames='fastFoodIcon'
                    >
                        <img className='takeaway-img' src={require('../../images/Shopping/fastfood.png')} alt={''}/>
                    </CSSTransition>
                    <div className='totalPrice'>
                        &nbsp;&nbsp;￥{totalPrice}.00
                    </div>
                </TabLeft>

                <TabRight>
                    <Link className='button' to={totalChoosedKinds === 0 ? '' : '/Checkout'}>
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
    showTransition:state.getIn(['order','select','showTransition']),
    totalChoosedKinds: state.getIn(['order', 'select', 'totalChoosedKinds']),

});

const mapDispatchToProps = (dispatch) => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingTab);