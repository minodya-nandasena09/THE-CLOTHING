import React from "react";
import "./Nav.css";
import { useState } from "react";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

function Nav() {
  const [menu, setMenu] = useState("shop");

  return (
    <>
      <div class="navbar">
        <div class="nav-logo">
          <img src={logo} alt="logo" />
          <p>THE CLOTHING</p>
        </div>
        <ul class="nav-menu">
          <li
            onClick={() => {
              setMenu("shop");
            }}
          ><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>
            {menu === "shop" ? <hr /> : <></>}{" "}
          </li>
          <li
            onClick={() => {
              setMenu("mens");
            }}
          ><Link style={{textDecoration: 'none'}} to='/mens'>Mens</Link>
            {menu === "mens" ? <hr /> : <></>}{" "}
          </li>
          <li
            onClick={() => {
              setMenu("womens");
            }}
          ><Link style={{textDecoration: 'none'}} to='/womens'>Womens</Link>
            {menu === "womens" ? <hr /> : <></>}{" "}
          </li>
          <li
            onClick={() => {
              setMenu("kids");
            }}
          ><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>
            {menu === "kids" ? <hr /> : <></>}{" "}
          </li>
        </ul>
        <div class="nav-login-cart">
          <Link style={{textDecoration: 'none'}} to="/login"><button class="">Login</button></Link>
         <Link style={{textDecoration: 'none'}} to="/cart"> <img src={cart_icon} alt="" /></Link>
          <div class="nav-cart-count">0</div>
        </div>
      </div>
    </>
  );
}
export default Nav;
