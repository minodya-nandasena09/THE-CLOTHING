import React from "react";
import "./Items.css";
import { Link } from "react-router-dom";

function Items(props) {
  return (
    <>
      <div class="item">
        <Link to={`/product/${props.id}`}>
          <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
        </Link>
        <p>{props.name}</p>
        <div class="item-price">
          <div class="item-price-new">${props.new_price}</div>
          <div class="item-price-old">${props.old_price}</div>
        </div>
      </div>
    </>
  );
}

export default Items;
