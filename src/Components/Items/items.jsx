import React from "react";
import "./items.css";
const Items = (props) => {
  return (
    <div className="items">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="items-price">
        <div className="items-new-price">
            {props.new_price}
        </div>
        <div className="items-old-price">
            {props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Items;
