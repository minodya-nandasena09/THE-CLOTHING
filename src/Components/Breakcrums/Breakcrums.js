import React from "react";
import "./Breakcrums.css";
import arr_icon from "../Assets/breadcrum_arrow.png";


function Breakcrums(props) {
  const { product } = props;
  return (
    <>
      <div class="breakcrums">
        HOME <img src={arr_icon} alt="" /> SHOP <img src={arr_icon} alt="" />{" "}
        {product.category} <img src={arr_icon} alt="" /> {product.name}
      </div>
    </>
  );
}

export default Breakcrums;
