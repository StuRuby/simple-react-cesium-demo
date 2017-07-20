import React, { Component } from 'react';
import Cesium3dmodels from './primitives/Cesium3dmodels';
import Cesium3dtiles from './primitives/Cesium3dtiles';
import CesiumTerrain from './primitives/CesiumTerrain';

class CesiumProjectContents extends Component {
    constructor() {
        super();

    }
    render() {
        return (
            <span>
                <Cesium3dtiles viewer={this.props.viewer} />
                <Cesium3dmodels viewer={this.props.viewer}/>
                <CesiumTerrain viewer={this.props.viewer}/>
            </span>
        )

    }
}
export default CesiumProjectContents;