import React, { Component } from 'react';

import Viewer from 'cesium/Source/Widgets/Viewer/Viewer';

import ArcGisMapServerImageryProvider from 'cesium/Source/Scene/ArcGisMapServerImageryProvider';

import CesiumProjectContents from './CesiumProjectContents';
// import CesiumClickHandler from './CesiumClickHandler';
import CesiumUtils from './utils/CesiumUtils';

const GlobalConfig = require('./config')
GlobalConfig = GlobalConfig.globalConfig;

class CesiumGlobe extends Component {
    constructor() {
        super();
        this.state = {
            viewerLoaded: false,
        }
    }
    componentWillMount() {
        if (this.viewer) {
            this.viewer.destroy();
        }
    }
    componentDidMount() {
        const imageryProvider = new ArcGisMapServerImageryProvider({
            url: GlobalConfig.arcgisMapServerImageryProviderUrl
        });

        this.viewer = new Viewer(this.cesiumContainer
           // GlobalConfig.viewerParam
        );
        this.camera=this.viewer.camera;
        this.setState({
            viewerLoaded: true
        })
    }
    renderContents(){
        const viewerLoaded=this.state.viewerLoaded;
        let contents=null;
        if(viewerLoaded){
            contents=(
                <span>
                    <CesiumProjectContents viewer={this.viewer}/>
                </span>
            )
        }
        return contents;
    }
    render() {
        const containerStyle = {
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            margin: '0',
            padding: '0'
        }
        const contents=this.renderContents();

        return (
            <div className='' style={containerStyle}>
                <div ref={(element) => { this.cesiumContainer = element }}>
                    {contents}
                </div>
                <CesiumUtils viewer={this.viewer} camera={this.camera}/>
            </div>
        )
    }
}
export default CesiumGlobe;