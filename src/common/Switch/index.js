import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {
    Track,
    Slider
} from './style'

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
                <Track className={this.props.isTurnOn? "turn-on" : ""} onClick={this.props.onClick}>
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
