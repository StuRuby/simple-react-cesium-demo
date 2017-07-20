import React, { Component } from 'react';

class ZoomOut extends Component{
    handleSpanClick(){

    }
    render(){
        return(
            <span onClick={this.handleSpanClick.bind(this)}>放大</span>
        )
    }
}

class ZoomIn extends Component{
    handleSpanClick(){

    }
    render(){
        return (
            <span onClick={this.handleSpanClick.bind(this)}>缩小</span>
        )
    }
}

class TurnLeft extends Component{
    handleSpanClick(){

    }
    render(){
        return(
            <span onClick={this.handleSpanClick.bind(this)}>左转</span>
        )
    }
}

class TurnRight extends Component{
    handleSpanClick(){

    }
    render(){
        return(
            <span onClick={this.handleSpanClick.bind(this)}>右转</span>
        )
    }
}

class TurnSlope extends Component{
    handleSpanClick(){

    }
    render(){
        return(
            <span onClick={this.handleSpanClick.bind(this)}>倾斜</span>
        )
    }
}

class FullScreen extends Component{
    handleSpanClick(){

    }
    render(){
        return(
            <span onClick={this.handleSpanClick.bind(this)}>全屏</span>
        )
    }
}