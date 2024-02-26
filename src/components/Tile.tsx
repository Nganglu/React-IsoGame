import React from "react";
import "./Tile.css";

interface Tile {
    x: number;
    y: number;
    type: string;
    subtype: string;
    tileSize: number;
    zOffset: number;
}

const Tile: React.FC<Tile> = ({ x,y,type,subtype,tileSize,zOffset }) => {

    const xOriginOffset = tileSize/2;
    const yOriginOffset = tileSize/4;

    const isoX = (x * 0.5 * tileSize) + (y * -0.5 * tileSize) - xOriginOffset;
    const isoY = (x * 0.25 * tileSize) + (y * 0.25 * tileSize) - yOriginOffset + zOffset;

    return (
      <div className="tile" style={{ left: `${isoX}px`, top: `${isoY}px` }}>
        <img src={`/assets/Tile-${type}_${subtype}.png`} alt="${type}_${subtype}" />
      </div>
    );
};
export default Tile;