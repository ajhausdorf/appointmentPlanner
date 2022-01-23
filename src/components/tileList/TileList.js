import React from "react";
import { Tile } from "../tile/Tile"

export const TileList = (props) => {
  const { tileListArray, onRemove } = props;
  
  return (
      <div>
        {
          tileListArray.map((tile, index) => {
            return <Tile key={index} tile={tile} onRemove={onRemove}/>
          })
        }
      </div>
  );
};