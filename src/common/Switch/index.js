import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {
    Track,
    Slider
} from './style'

/**
 * 自定义Switch滑动开关
 * 可传入props：
 * isTurnOn: boolean,       // 设置Switch 开启 or 关闭
 * onClick: // 传入一个鼠标点击后触发的函数即可
 * color: String    // 开关打开后的颜色，默认值：#1AAD19
 */
class Switch extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CSSTransition
               in={this.props.isTurnOn}
               timeout={200}
               classNames="discolor"
            >
                <Track className={this.props.isTurnOn? "turn-on" : ""} color={this.props.color} onClick={this.props.onClick}>
                    <CSSTransition
                        in={this.props.isTurnOn}
                        timeout={200}
                        classNames="slide"
                    >
                        <Slider className={this.props.isTurnOn? "turn-on" : ""} />
                    </CSSTransition>
                </Track>
            </CSSTransition>
        )
    }
}

export default Switch;
