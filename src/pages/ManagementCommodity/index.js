import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {actionCreators} from './store'
import {
    Container,
    CommodityListTitle,
    CommodityList,
    CommodityItem,
    CommodityInfo,
    CommodityTitleSetting,
    CommodityTitleInput,
    CommodityPrice,
    OriginalPriceSetting,
    CommodityController,
    CommodityControllerButton
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
                                    {
                                        // 判断是否处于编辑模式
                                        !item.get('isUnderRevision') ?
                                            // 非编辑模式
                                            <Fragment>
                                                <CommodityInfo onClick={() => {
                                                    this.props.handleCommodityInfo(this.props.revisionEnable, item.get('id'), item);
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
                                                            this.props.handleSwitch(item.get('id'), item.get('enable'), item);
                                                        }}
                                                    />
                                                </CommodityController>
                                            </Fragment>
                                            :
                                            // 编辑模式
                                            <Fragment>
                                                <CommodityInfo>
                                                    <CommodityTitleSetting>
                                                        <div className="tips">名称: </div>
                                                        <CommodityTitleInput
                                                            value={this.props.temCommodity.get('name')}
                                                            onChange={this.props.handCommodityTitleInputChange}
                                                        />
                                                    </CommodityTitleSetting>
                                                    <CommodityPrice>
                                                        <OriginalPriceSetting>
                                                            <div className="tips">原价: </div>
                                                            <input className="input"
                                                                   value={this.props.temCommodity.get('originalPrice')}
                                                                   onChange={this.props.handleOriginalPriceInputChange}
                                                            />
                                                        </OriginalPriceSetting>
                                                        <OriginalPriceSetting>
                                                            <div className="tips">现价: </div>
                                                            <input className="input"
                                                                   value={this.props.temCommodity.get('currentPrice')}
                                                                   onChange={this.props.handleCurrentPriceInputChange}
                                                            />
                                                        </OriginalPriceSetting>
                                                    </CommodityPrice>
                                                </CommodityInfo>
                                                <CommodityController>
                                                    <CommodityControllerButton
                                                        className="save"
                                                        onClick={() => {this.props.handleSave(item.get('id'), this.props.temCommodity);}}
                                                    >保存
                                                    </CommodityControllerButton>
                                                    <CommodityControllerButton
                                                        className="cancel"
                                                        onClick={() => {this.props.handleCancel(item.get('id'));}}
                                                    >取消
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

    componentDidMount() {
        const typeStr = JSON.stringify({    // 指示灯，判断发送指令是什么
            type: "caidan"
        });
        let ws = new WebSocket("ws://hxsmallgame.cn:3006");
        ws.onopen = () => {
            console.log('connected');
            ws.send(typeStr);
        };
        ws.onmessage = (event) => {
            console.log(event);
            console.log(JSON.parse(event.data));
            this.props.loadCommodityList(JSON.parse(JSON.parse(event.data).data));
        };
    }
}

const mapStateToProps = (state) => ({
    commodityList: state.getIn(['managementCommodity', 'commodityList']),
    revisionEnable: state.getIn(['managementCommodity', 'revisionEnable']),
    temCommodity: state.getIn(['managementCommodity', 'temCommodity'])
});
const mapDispatchToProps = (dispatch) => ({
    // 从服务器加载商品列表
    loadCommodityList(commodityList) {
        console.log(commodityList);
        dispatch(actionCreators.loadCommodity(commodityList));
    },

    // 点击Switch开关时，切换enable，并向服务器发送enable更改信息。注意：这里的item是immutable对象
    handleSwitch(id, isTurnOn, item) {
        const newIsTurnOn = !isTurnOn;
        dispatch(actionCreators.switchTrigger(id, newIsTurnOn));    // 切换enable
        dispatch(actionCreators.switchTriggerPost(item));   // 向服务器发送enable更改信息
    },

    // 点击CommodityInfo时，进入编辑模式。注意：此处参数item为immutable对象
    handleCommodityInfo(revisionEnable, id, item) {
        if (revisionEnable) {
            dispatch(actionCreators.underRevision(id, item));
        }
    },

    // 编辑模式下，CommodityTitleInput的value改变时
    handCommodityTitleInputChange(e) {
        const value = e.target.value;
        dispatch(actionCreators.commodityTitleInputChange(value));
    },

    // 编辑模式下，OriginalPriceInput改变时
    handleOriginalPriceInputChange(e) {
        const value = e.target.value;
        dispatch(actionCreators.originalPriceInputChange(value));
    },

    // 编辑模式下，CurrentPriceInput改变时
    handleCurrentPriceInputChange(e) {
        const value = e.target.value;
        dispatch(actionCreators.currentPriceInputChange(value));
    },

    // 点击"保存"触发，保存编辑数据至本地store，同时post给服务器，并退出编辑模式
    handleSave(id, immutableTemCommodity) {
        dispatch(actionCreators.onSave(id, immutableTemCommodity));
    },

    //  点击"取消"触发，退出编辑模式
    handleCancel(id) {
        dispatch(actionCreators.onCancel(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ManagementCommodity);