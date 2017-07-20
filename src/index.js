import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import "cesium/Source/Widgets/widgets.css";
//配置Cesium，让它知道如何为所有资源构造URL。@author :4
import buildModuleUrl from 'cesium/Source/Core/buildModuleUrl';
buildModuleUrl.setBaseUrl('./cesium/');


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
