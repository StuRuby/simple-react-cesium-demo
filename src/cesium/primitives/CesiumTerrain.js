import React, { Component } from 'react';
import CesiumTerrainProvider from 'cesium/Source/Core/CesiumTerrainProvider';

class CesiumTerrain extends Component{
    constructor(){
        super()
    }
    componentDidMount(){
        const viewer=this.props.viewer;
        const terrainProvider=new CesiumTerrainProvider({
            url:'./cesiumData/terrain_tiles/'
        });
        viewer.terrainProvider=terrainProvider;
    }
    render(){
        return null;
    }
}
export default CesiumTerrain;