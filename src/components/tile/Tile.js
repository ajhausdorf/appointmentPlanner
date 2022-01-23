import React from "react";
import './Tile.css'

export const Tile = (props) => {
  const { tile, onRemove } = props;

  const handleRemoveClick = () => {
    onRemove(tile.name);
  }

  const keys = Object.keys(tile);
  return (
    <div className="tile-container">
      <span onClick={handleRemoveClick} className="close">x</span>
      { 
        keys.map((key, index) => {
          console.log('render');
          return (
            <p key={index} className={index === 0 ? 'tile-title' : 'tile'}>{tile[key]}</p>
          );
        })
      }
    </div>
  );
};
