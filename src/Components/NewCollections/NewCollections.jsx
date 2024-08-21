import React from "react";
import "./NewCollections.css";
import new_collection from "../Assets/new_collections";
import Items from "../Items/items";

const NewCollections = () => {
  return (
    <div className="NewCollections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, index) => {
          return (
            <Items
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
