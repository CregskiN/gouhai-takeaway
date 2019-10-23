import React, {Component} from 'react';
import {Container, Button} from "./style";

class Management extends Component{
    render() {
        return (
            <Container>
                <div>Hello, World!</div>
                <Button>商品管理</Button>
                <Button>添加商品</Button>
            </Container>
        )
    }
}

export default Management;