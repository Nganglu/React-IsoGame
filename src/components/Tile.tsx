import React from "react";
import "./Tile.css";

interface Tile {
    x: number;
    y: number;
}

const Tile: React.FC<Tile> = ({ x,y }) => {
    return (
        <div className="tile" style={{ left: `${x}px`, top: `${y}px` }}>
            <img src="/assets/Tile-Floor_Wood01.png" alt="Tile" />
        </div>
    );
};
export default Tile;