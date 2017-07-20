import React, { Component } from 'react';
import Cesium3DTileset from 'cesium/Source/Scene/Cesium3DTileset';
import HeadingPitchRange from 'cesium/Source/Core/HeadingPitchRange';
//A 4x4 matrix, indexable as a column-major order array. Constructor parameters are in row-major order for code readability.
import Matrix4 from 'cesium/Source/Core/Matrix4';
import Cartographic from 'cesium/Source/Core/Cartographic';//A position defined by longitude, latitude, and height.
import Cartesian3 from 'cesium/Source/Core/Cartesian3';//一个3d的笛卡尔点

const GlobalConfig = require('../config');
GlobalConfig = GlobalConfig.globalConfig;

class Cesium3dtiles extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        const tileset = new Cesium3DTileset({
            url: './cesiumData/3d_tiles/'
        });
        this.props.viewer.scene.primitives.add(tileset);
        const self = this;
        tileset.readyPromise.then(function () {
            const boundingSphere = tileset.boundingSphere;
            self.props.viewer.camera.viewBoundingSphere(boundingSphere, new HeadingPitchRange(0.0, -0.5, boundingSphere.radius * 2));
            self.props.viewer.camera.lookAtTransform(Matrix4.IDENTITY);
            const height = -600;
            const cartographic = Cartographic.fromCartesian(tileset.boundingSphere.center);
            const surface = Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0.0);
            const offset = Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, height);
            const translation = Cartesian3.subtract(offset, surface, new Cartesian3());
            tileset.modelMatrix = Matrix4.fromTranslation(translation);
        }).otherwise(function (error) {
            throw (error);
        });
    }
    render() {
        return null;
    }
}
export default Cesium3dtiles;

