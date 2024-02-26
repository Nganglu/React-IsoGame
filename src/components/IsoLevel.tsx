import React from "react";
import "./IsoLevel.css";
import IsoGrid from "./IsoGrid.tsx";

interface IsoLevel {
}

interface LevelData {
  tileSize: number;
  numOfCols: number;
  numOfRows: number;
  zLayers:{
    layer: { type: string; subtype: string} [][]
  }[];
}

const IsoLevel: React.FC<IsoLevel> = (LevelData) => {
  const levelData: LevelData = {
    tileSize: 64,
    numOfCols: 6,
    numOfRows: 7,
    zLayers: []
  };


  return (
    <div className="iso-level">
      <IsoGrid tileSize={levelData.tileSize} numOfCols={levelData.numOfCols} numOfRows={levelData.numOfRows} zLayer={0} />
      <IsoGrid tileSize={levelData.tileSize} numOfCols={levelData.numOfCols} numOfRows={levelData.numOfRows} zLayer={1} />
      <IsoGrid tileSize={levelData.tileSize} numOfCols={levelData.numOfCols} numOfRows={levelData.numOfRows} zLayer={2} />
      <IsoGrid tileSize={levelData.tileSize} numOfCols={levelData.numOfCols} numOfRows={levelData.numOfRows} zLayer={3} />
    </div>
  );
};

export default IsoLevel;