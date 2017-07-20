import React, { Component } from 'react';
import logo from './logo.svg';
import Viewer from "cesium/Source/Widgets/Viewer/Viewer";
import './App.css';

class App extends Component {
  componentDidMount(){
    this.viewer=new Viewer(this.cesiumContainer);
  }
  render() {
    return (
      <div className="App">
        <div id="cesiumContainer" ref={element=>this.cesiumContainer=element}></div>
      </div>
    );
  }
}

export default App;
