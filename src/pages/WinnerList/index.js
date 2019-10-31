import React, {Component} from "react";
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {
    Container,
    ComponentTitle,
    Winner,
    WinnerInfo,
    ButtonArea,
    DeleteButton
} from './style'

class WinnerList extends Component {
    render() {
        return (
            <Container>
                <ComponentTitle>
                    中奖名单
                    <div className="line"/>
                </ComponentTitle>
                {
                    this.props.winnerList.map((item) => {
                        return (
                            <Winner key={item.id}>
                                <WinnerInfo>姓名: {item.get('name')}</WinnerInfo>
                                <WinnerInfo>电话: {item.get('phone')}</WinnerInfo>
                                <WinnerInfo>日期: {item.get('date')}</WinnerInfo>
                                <ButtonArea>
                                    <DeleteButton onClick={() => {this.props.handleDeleteButton(item.get('id'));}}>删除记录</DeleteButton>
                                </ButtonArea>
                            </Winner>
                        )
                    })
                }
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    winnerList: state.getIn(['winnerList', 'winnerList'])
});

const mapDispatchToProps = (dispatch) => ({
    // 点击"删除记录"时触发，本地删除此条记录，同时给服务器发送删除指令
    handleDeleteButton(id) {
        dispatch(actionCreators.onDeleteButton(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(WinnerList);

