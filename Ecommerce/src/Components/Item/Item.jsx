import React from "react";
import './Item.css';

const Item = (props) => {
  return (
    <div className='item'>
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          ${props.new_price}
        </div>
        <div className="item-price-old">
          <s>${props.old_price}</s>
        </div>
      </div>
    </div>  );};
export default Item;
