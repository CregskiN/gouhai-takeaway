import React, {Component} from "react";
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {Link} from "react-router-dom";
import {
    Container,
    ComponentTitle,
    CommodityTitle,
    CommodityPrice,
    CommodityEnable,
    CommodityPoster,
    PostArea,
    PostButton,
    CancelArea,
    CancelButton
} from './style';
import Switch from "../../common/Switch";

class AddCommodity extends Component {
    render() {
        return (
            <Container>
                <ComponentTitle>
                    添加商品
                    <div className="line"/>
                </ComponentTitle>
                <CommodityTitle>
                    <input
                        className="input"
                        placeholder="名称"
                        value={this.props.commodity.get('name')}
                        onChange={this.props.handleCommodityTitleInputChange}
                    />
                </CommodityTitle>
                <CommodityPrice>
                    <input
                        className="input"
                        placeholder="原价"
                        value={this.props.commodity.get('originalPrice')}
                        onChange={this.props.handleOriginalPriceInputChange}
                    />
                    <div className="separator"/>
                    <input
                        className="input"
                        placeholder="现价"
                        value={this.props.commodity.get('currentPrice')}
                        onChange={this.props.handleCurrentPriceInputChange}
                    />
                </CommodityPrice>
                <CommodityEnable>
                    <div className="tips">是否可见：</div>
                    <Switch
                        isTurnOn={this.props.commodity.get('enable')}
                        color='1AAD19'
                        onClick={() => {this.props.handleSwitch(this.props.commodity.get('enable'));}}
                    />
                </CommodityEnable>
                <CommodityPoster>
                    <PostArea>
                        <div className="tips">添加</div>
                        <PostButton onClick={() => {this.props.handlePostButton(this.props.commodity)}}>OK</PostButton>
                    </PostArea>
                    <div className="separator"/>
                    <CancelArea>
                        <div className="tips">取消</div>
                        <Link to="/management">
                            <CancelButton onClick={this.props.handleCancelButton}>Cancel</CancelButton>
                        </Link>
                    </CancelArea>
                </CommodityPoster>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    commodity: state.getIn(['addCommodity', 'commodity']),
});

const mapDispatchToProps = (dispatch) => ({
    // CommodityTitleInput的value改变时
    handleCommodityTitleInputChange(e) {
        const value = e.target.value;
        dispatch(actionCreators.commodityTitleInputChange(value));
    },

    // OriginalPriceInput的value改变时
    handleOriginalPriceInputChange(e) {
        const value = e.target.value;
        dispatch(actionCreators.originalPriceInputChange(value));
    },

    // CurrentPriceInput的value改变时
    handleCurrentPriceInputChange(e) {
        const value = e.target.value;
        dispatch(actionCreators.currentPriceInputChange(value));
    },

    // 点击Switch开关时，切换enable
    handleSwitch(isTurnOn) {
        const newIsTurnOn = !isTurnOn;
        dispatch(actionCreators.commodityEnableSwitch(newIsTurnOn));
    },

    // 点击"添加"时触发，添加数据
    handlePostButton(immutableCommodity) {
        dispatch(actionCreators.onPost(immutableCommodity));
    },

    // 点击"取消"时触发，返回后台管理首页
    handleCancelButton() {
        dispatch(actionCreators.onCancel());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCommodity);