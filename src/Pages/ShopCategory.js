import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown from "../Components/Assets/dropdown_icon.png";
import Items from "../Components/Items/Items";
import all_product from "../Components/Assets/all_product";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <>
      <div class="shop-category">
        <div className="img-box">
        <img className="shop-banner" src={props.banner} />
        </div>
        <div class="shop-index-sort">
          <p>
            <span>Showing 1 - 12 </span>out of 36 products
          </p>
          <div class="shop-sort">
            Sort by <img src={dropdown} alt="" />
          </div>
        </div>
        <div class="shop-products">
          {all_product.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Items
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div class="shop-loadmore">
            Explore more
        </div>
      </div>
    </>
  );
};

export default ShopCategory;
