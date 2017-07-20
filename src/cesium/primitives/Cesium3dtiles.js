import React, { Component } from 'react';
import Cesium3DTileset from 'cesium/Source/Scene/Cesium3DTileset';
import HeadingPitchRange from 'cesium/Source/Core/HeadingPitchRange';
import Matrix4 from 'cesium/Source/Core/Matrix4';

const GlobalConfig = require('../config');
GlobalConfig = GlobalConfig.globalConfig;

class Cesium3dtiles extends Component {
    constructor() {
        super();
        
    }
    componentWillMount() {

    }
    componentDidMount() {
        const tileset = new Cesium3DTileset({
            url: '../../../public/cesiumData/3d_tiles/'
        });
        this.props.viewer.scene.primitives(tileset);
        tileset.readyPromise.then(function () {
            var boundingSphere = tileset.boundingSphere;
            this.props.viewer.camera.viewBoundingSphere(boundingSphere, new HeadingPitchRange(0.0, -0.5, boundingSphere.radius * 2));
            this.props.viewer.camera.lookAtTransform(Matrix4.IDENTITY);
        }).otherwise(function (error) {
            throw (error);
        });
    }
    render() {
        return null;
    }
}
export default Cesium3dtiles;

