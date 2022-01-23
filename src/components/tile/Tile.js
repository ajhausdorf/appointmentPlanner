import React from "react";
import './Tile.css'

export const Tile = (props) => {
  const object = props.object;
  const keys = Object.keys(object);
  return (
    <div className="tile-container">
      <span className="close">x</span>
      { 
        keys.map((key, index) => {
          console.log('render');
          return (
            <p key={index} className={index === 0 ? 'tile-title' : 'tile'}>{object[key]}</p>
          );
        })
      }
    </div>
  );
};
