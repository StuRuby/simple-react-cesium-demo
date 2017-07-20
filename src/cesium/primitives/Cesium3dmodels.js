import React, { Component } from 'react';
import Transforms from 'cesium/Source/Core/Transforms';
import Cartesian3 from 'cesium/Source/Core/Cartesian3';//一个3d的笛卡尔点
import Model from 'cesium/Source/Scene/Model';

class Cesium3dmodels extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        const viewer = this.props.viewer;
        const scene = viewer.scene;
        const modelMatrix = Transforms.eastNorthUpToFixedFrame(
            Cartesian3.fromDegrees(120.1504771300, 30.2764960400, 0.0)
        );
        var model = Model.fromGltf({
            url:'./cesiumData/3d_models/towl.gltf',
            modelMatrix: modelMatrix,
            scale: 200.0
        });
        scene.primitives.add(model);
    }
    render() {
        return null
    }
}
export default Cesium3dmodels;
