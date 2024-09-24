import React from 'react';
import "./Offers.css";
import ex_img from "../Assets/exclusive_image.png";

function Offers() {
  return (
    <>
    <div class="offers">
        <div class="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>    
        </div>
        <div class="offers-right">
            <img src={ex_img} alt="" />

        </div>
    </div>
    </>
  )
}

export default Offers;