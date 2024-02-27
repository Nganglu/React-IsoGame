import React from "react";
import "./IsoMap.css";
import Tile from "./Tile";

interface tileData {
    [key:string]: Tile;
}

class IsoMap{
    tileSize: number;
    xSize: number;
    ySize: number;
    
    isoMap: IsoMap;

    constructor(LevelData) {
        this.tileSize = LevelData.tileSize;
        this.xSize = LevelData.numOfCols;
        this.ySize = LevelData.numOfRows;
        this.isoMap = LevelData.isoMap;
    }
}

// IsoMap will handle the loading, saving and modification of the current level map.
// Background process, might handle preloading in the future, unless delegated to own class.
// if a coordinate has no tile reference, no display. Map > Array[][]