import React, { Component } from 'react';

import Viewer from 'cesium/Source/Widgets/Viewer/Viewer';

import ArcGisMapServerImageryProvider from 'cesium/Source/Scene/ArcGisMapServerImageryProvider';

// import CesiumProjectContents from './CesiumProjectContents';
// import CesiumClickHandler from './CesiumClickHandler';

const GlobalConfig =require('./config')
GlobalConfig=GlobalConfig.globalConfig;

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

        this.viewer = new Viewer(this.cesiumContainer,
            GlobalConfig.viewerParam
        );
        this.setState({
            viewerLoaded: true
        })
    }

    render() {
        const containerStyle = {
            width: '100%',
            height: '100%',
            overflow:'hidden',
            margin: '0',
            padding: '0'
        }
        return (
            <div className='' style={containerStyle}>
                <div ref={(element) => { this.cesiumContainer = element }}>

                </div>
            </div>
        )
    }
}
export default CesiumGlobe;