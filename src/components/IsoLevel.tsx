import React from "react";
import "./IsoLevel.css";
import IsoGrid from "./IsoGrid.tsx";

interface IsoLevel {
    tileSize: number;
    numOfCols: number;
    numOfRows: number;
}

const IsoLevel: React.FC<IsoLevel> = () => {
  const tileSize = 64;
  const numOfCols = 6;
  const numOfRows = 7;

  return (
    <div className="iso-level">
      <IsoGrid tileSize={tileSize} numOfCols={numOfCols} numOfRows={numOfRows} zLayer={0} />
      <IsoGrid tileSize={tileSize} numOfCols={numOfCols} numOfRows={numOfRows} zLayer={1} />
      <IsoGrid tileSize={tileSize} numOfCols={numOfCols} numOfRows={numOfRows} zLayer={2} />
      <IsoGrid tileSize={tileSize} numOfCols={numOfCols} numOfRows={numOfRows} zLayer={3} />
    </div>
  );
};

export default IsoLevel;