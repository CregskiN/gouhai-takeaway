import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {actionCreators} from './store'
import {
    Container,
    CommodityList,
    CommodityListTitle,
    CommodityItem,
    CommodityInfo,
    CommodityTitleSetting,
    CommodityTitleInput,
    CommodityPrice,
    CommodityController,
    CommodityControllerButton
} from "./style";
import Switch from "../../common/Switch";
import {get} from "immutable";

class ManagementCommodity extends Component {
    render() {
        return (
            <Container>
                <CommodityList>
                    <CommodityListTitle>
                        商品管理
                        <div className="line" />
                    </CommodityListTitle>
                    {
                        this.props.commodityList.map((item) => {
                            return (
                                <CommodityItem key={item.get('id')}>
                                    {
                                        !item.get('isUnderRevision') ?
                                            <Fragment>
                                                <CommodityInfo onClick={() => {
                                                    this.props.handleCommodityInfo(this.props.revisionEnable, item.get('id'), item)
                                                }}>
                                                    <div className="commodity-title">{item.get('name')}</div>
                                                    <CommodityPrice>
                                                        <div className="original-price">¥{item.get('originalPrice')}</div>
                                                        <div className="arrow">-></div>
                                                        <div className="current-price">¥{item.get('currentPrice')}</div>
                                                    </CommodityPrice>
                                                </CommodityInfo>
                                                <CommodityController>
                                                    <Switch
                                                        isTurnOn={item.get('enable')}
                                                        color='1AAD19'
                                                        onClick={() => {
                                                            this.props.handleSwitch(item.get('id'), item.get('enable'))
                                                        }}
                                                    />
                                                </CommodityController>
                                            </Fragment>
                                            :
                                            <Fragment>
                                                <CommodityInfo>
                                                    <CommodityTitleSetting>
                                                        <div className="tips">名称: </div>
                                                        <CommodityTitleInput placeholder={item.get('name')} />
                                                    </CommodityTitleSetting>
                                                    <CommodityPrice>
                                                        <div className="original-price">¥{item.get('originalPrice')}</div>
                                                        <div className="arrow">-></div>
                                                        <div className="current-price">¥{item.get('currentPrice')}</div>
                                                    </CommodityPrice>
                                                </CommodityInfo>
                                                <CommodityController>
                                                    <CommodityControllerButton className="save">保存</CommodityControllerButton>
                                                    <CommodityControllerButton
                                                        className="cancel"
                                                        onClick={() => {this.props.handleCancel(item.get('id'));}}
                                                    >
                                                        取消
                                                    </CommodityControllerButton>
                                                </CommodityController>
                                            </Fragment>
                                    }
                                </CommodityItem>
                            )
                        })
                    }
                </CommodityList>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    commodityList: state.getIn(['managementCommodity', 'commodityList']),
    revisionEnable: state.getIn(['managementCommodity', 'revisionEnable'])
});
const mapDispatchToProps = (dispatch) => ({
    // 点击Switch开关时，切换enable
    handleSwitch(id, isTurnOn) {
        const newIsTurnOn = !isTurnOn;
        dispatch(actionCreators.switchTrigger(id, newIsTurnOn));
    },
    // 点击CommodityInfo时，进入编辑模式。注意：此处参数item为immutable对象
    handleCommodityInfo(revisionEnable, id, item) {
        if (revisionEnable) {
            dispatch(actionCreators.underRevision(id, item));
        }
    },
    //  点击"取消"触发，退出编辑模式
    handleCancel(id) {
        dispatch(actionCreators.onCancel(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ManagementCommodity);