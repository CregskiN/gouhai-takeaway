import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {
    Container,
    ButtonTitle,
    Commodity,
    CommodityButton,
    Activity,
    ActivityButton
} from "./style";

class Management extends Component{
    render() {
        if (!this.props.isLogin) {
            return <Redirect to="/management/login" />
        } else {
            return (
                <Container>
                    <Commodity>
                        <ButtonTitle>商品控制</ButtonTitle>
                        <Link to="/management/commodity">
                            <CommodityButton>商品管理</CommodityButton>
                        </Link>
                        <Link to="/management/addcommodity">
                            <CommodityButton>添加商品</CommodityButton>
                        </Link>
                    </Commodity>
                    <Activity>
                        <ButtonTitle>活动控制</ButtonTitle>
                        <Link to="/management/winnerlist">
                            <ActivityButton>中奖名单</ActivityButton>
                        </Link>
                    </Activity>
                </Container>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.getIn(['login', 'isLogin'])
});

export default connect(mapStateToProps, null)(Management);