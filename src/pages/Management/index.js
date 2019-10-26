import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {
    Container,
    ButtonTitle,
    Commodity,
    CommodityButton
} from "./style";

class Management extends Component{
    render() {
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
            </Container>
        )
    }
}

export default Management;