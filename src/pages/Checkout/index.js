import React, {PureComponent} from 'react';
import {Cascader} from "antd";
import {options} from "./option/cascaderoptions";
import {
    CheckoutWrapper,
    SchoolWrapper,
} from "./style";

class Checkout extends PureComponent {
    render() {
        return (
            <CheckoutWrapper>
                <SchoolWrapper className='choose-schoolAndTime'>
                    <Cascader className='schoolAndTime-cas' options={options}
                              onChange={() => console.log('Cas changed!')} placeholder="请在此选择学校和时间"/>
                </SchoolWrapper>


            </CheckoutWrapper>
        )
    }
}

export default Checkout;