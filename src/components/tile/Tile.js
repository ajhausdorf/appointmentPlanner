import React from "react";
import './Tile.css'

export const Tile = (props) => {
  const object = props.object;
  const keys = Object.keys(object);
  return (
    <div className="tile-container">
      { 
        keys.map(key => {
          console.log('render');
          return (
            <p>{object[key]}</p>
          );
        })
      }
    </div>
  );
};
