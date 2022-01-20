import React from "react";
import {Tile} from "../tile/Tile"

export const TileList = (props) => {
  const propsArr = props.array;
  
  return (
      <div>
        {
          propsArr.map((obj, index) => {
            return <Tile key={index} object={obj}/>
          })
        }
      </div>
  );
};