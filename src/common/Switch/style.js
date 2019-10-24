import styled from "styled-components";

const Track = styled.div `
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 60px;
    height: 34px;
    border-radius: 34px;
    background: rgb(204, 204, 204);
    &.turn-on {
        background: rgb(234, 111, 90);
    }
    &.discolor-enter {
        transition: all .2s ease-out;
    }
    &.discolor-enter-active {
        background: rgb(234, 111, 90);
    }
    &.discolor-exit {
        transition: all .2s ease-out;
    }
    &.discolor-exit-active {
        background: rgb(204, 204, 204);
    }
`;

const Slider = styled.div `
    position: absolute;
    left: 4px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: #fff;
    &.turn-on {
        left: 30px;
    }
    &.slide-enter {
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        left: 30px;
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        left: 4px;
    }
`;

export {
    Track,
    Slider
};