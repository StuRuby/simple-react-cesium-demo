import React, { Component } from 'react';

class ZoomOut extends Component {
    handleSpanClick() {
        this.props.camera.moveForward();
    }
    render() {
        return (
            <span onClick={this.handleSpanClick.bind(this)}>放大</span>
        )
    }
}

class ZoomIn extends Component {
    handleSpanClick() {
        this.props.camera.moveBackward();
    }
    render() {
        return (
            <span onClick={this.handleSpanClick.bind(this)}>缩小</span>
        )
    }
}

class TurnLeft extends Component {
    handleSpanClick() {
        this.props.camera.moveLeft();
    }
    render() {
        return (
            <span onClick={this.handleSpanClick.bind(this)}>左转</span>
        )
    }
}

class TurnRight extends Component {
    handleSpanClick() {
        this.props.camera.moveRight();
    }
    render() {
        return (
            <span onClick={this.handleSpanClick.bind(this)}>右转</span>
        )
    }
}

class TurnSlopeUp extends Component {
    handleSpanClick() {
        this.props.camera.moveUp();
    }
    render() {
        return (
            <span onClick={this.handleSpanClick.bind(this)}>向上倾斜</span>
        )
    }
}

class TurnSlopeDown extends Component {
    handleSpanClick() {
        this.props.camera.moveDown();
    }
    render() {
        return (
            <span onClick={this.handleSpanClick.bind(this)}>向下倾斜</span>
        )
    }
}

class FullScreen extends Component {
    handleSpanClick() {
        this.props.camera.moveForward();
    }
    render() {
        return (
            <span onClick={this.handleSpanClick.bind(this)}>全屏</span>
        )
    }
}

class CesiumUtils extends Component {
    constructor(){
        super();
    }
    componentWillMount(){
        
    }
    render() {
        return (
            <div className='cesiumUtils' style={{
                position: 'absolute',
                top: '10px',
                left: '10px'
            }}>
                <ZoomOut camera={this.props.camera}/>
                <ZoomIn camera={this.props.camera}/>
                <TurnLeft camera={this.props.camera}/>
                <TurnRight camera={this.props.camera}/>
                <TurnSlopeUp camera={this.props.camera}/>
                <TurnSlopeUp camera={this.props.camera}/>
                <FullScreen camera={this.props.camera}/>
            </div>
        )
    }
}
export default CesiumUtils;