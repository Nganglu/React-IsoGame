import React from "react";
import "./IsoGrid.css";
import Tile from "./Tile.tsx";

interface IsoGrid {
  tileSize: number;
  numOfRows: number;
  numOfCols: number;
  zLevel: number;
}

const IsoGrid: React.FC<IsoGrid> = ({tileSize,numOfRows,numOfCols}) => {
  const tiles: JSX.Element[] = [];

  for (let x = 0; x < numOfRows; x++) {
    for (let y = 0; y < numOfCols; y++) {

      const isoX = (x * 0.5 * tileSize) + (y * -0.5 * tileSize);
      const isoY = (x * 0.25 * tileSize) + (y * 0.25 * tileSize);

      tiles.push(
        <Tile
          x={isoX}
          y={isoY}
        />
      );
    }
  }

  return <div className="iso-grid">{tiles}</div>;
};

export default IsoGrid;