import React from "react";
import "./IsoGrid.css";
import Tile from "./Tile.tsx";

interface IsoGrid {
  tileSize: number;
  numOfRows: number;
  numOfCols: number;
  zLayer: number;
}

interface TileData {
  type: string;
  subtype: string;
}

const IsoGrid: React.FC<IsoGrid> = ({ tileSize, numOfRows, numOfCols, zLayer }) => {
  const grid: JSX.Element[] = [];

  for (let x = 0; x < numOfRows; x++) {
    for (let y = 0; y < numOfCols; y++) {
      const tileData: TileData = { type: "Floor", subtype: "Wood01" };
      
      const zLayerOffset = -(zLayer * tileSize/2);

      grid.push(
        <Tile
          key={`${x}-${y}-${zLayer}`}
          x={x}
          y={y}
          tileSize={tileSize}
          type={tileData.type}
          subtype={tileData.subtype}
          zOffset={zLayerOffset}
        />
      );
    }
  }

  return <div className="iso-grid">{grid}</div>;
};

export default IsoGrid;