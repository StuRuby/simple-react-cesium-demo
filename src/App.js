import React, { Component } from 'react';
import logo from './logo.svg';
import Viewer from "cesium/Source/Widgets/Viewer/Viewer";
import './App.css';
import CesiumGlobe from './cesium/CesiumGlobe'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <CesiumGlobe/>
      </div>
    );
  }
}

export default App;
