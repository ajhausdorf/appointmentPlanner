import React from "react";
import {Tile} from "../tile/Tile"

export const TileList = (props) => {
  const { contacts, onRemove } = props;
  
  return (
      <div>
        {
          contacts.map((contact, index) => {
            return <Tile key={index} contact={contact} onRemove={onRemove}/>
          })
        }
      </div>
  );
};