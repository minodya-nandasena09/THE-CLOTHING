import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import ricon from "../Assets/cart_cross_icon.png";
import "./CartItems.css";

function CartItems() {
  const { getTotalCartAmout, all_product, cartItems, removeFromcart } =
    useContext(ShopContext);
  return (
    <>
      <div className="cart-items">
        <div className="cart-items-format-main">
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div>
                <div className="cart-items-format cart-items-format-main">
                  <img src={e.image} alt="" className="cart-icons" />
                  <p>{e.name}</p>
                  <p>{e.new_price}</p>
                  <button className="cart-quantity">{cartItems[e.id]}</button>
                  <p>${e.new_price * cartItems[e.id]}</p>
                  <img
                    className="cart-remove-icon"
                    src={ricon}
                    onClick={() => {
                      removeFromcart(e.id);
                    }}
                    alt=""
                  />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}

        <div class="cartitems-down">
          <div className="cartitems-total">
            <h1>Cart Total</h1>
            <div class="total-item">
              <p>Sub Total</p>
              <p>${getTotalCartAmout()}</p>
            </div>

            <hr />
            <div class="total-item">
              <p>shipping Fee</p>
              <p>Free</p>
            </div>

            <hr />
            <div class="total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmout()}</h3>
            </div>

            <button>POCEED TO CHECKOUT</button>
          </div>
        </div>
        <div class="promo-code">
          <p>Do you have a Promo Code? Enter Here</p>
          <div class="promo-box">
            <input type="text" placeholder="Promo Code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default CartItems;
