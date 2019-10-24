import React, {Component} from 'react';
import {connect} from "react-redux";
import {actionCreators} from './store'
import {
    Container,
    CommodityList,
    CommodityListTitle,
    CommodityItem,
    CommodityInfo,
    CommodityPrice,
    CommodityController
} from "./style";
import Switch from "../../common/Switch";

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
                                    <CommodityInfo>
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
                                            color='rgb(234,111,90)'
                                            onClick={() => {
                                                this.props.handleSwitch(item.get('id'), item.get('enable'))
                                            }}
                                        />
                                    </CommodityController>
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
    commodityList: state.getIn(['managementCommodity', 'commodityList'])
});
const mapDispatchToProps = (dispatch) => ({
    // 点击Switch开关时，切换enable
    handleSwitch(id, isTurnOn) {
        const newIsTurnOn = !isTurnOn;
        dispatch(actionCreators.switchTrigger(id, newIsTurnOn));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ManagementCommodity);