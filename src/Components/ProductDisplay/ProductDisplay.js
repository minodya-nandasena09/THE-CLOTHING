import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

function ProductDisplay(props) {
  const { product } = props;

  const { addTocart } = useContext(ShopContext);

  return (
    <>
      <div class="productdispplay">
        <div class="product-left">
          <div class="img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div class="display-image">
            <img className="main-image" src={product.image} alt="" />
          </div>
        </div>
        <div class="product-right">
          <h1>{product.name}</h1>
          <div class="right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull} alt="" />
            <p>(188)</p>
          </div>
          <div class="right-prices">
            <div class="price-old">${product.old_price}</div>
            <div class="price-new">${product.new_price}</div>
          </div>
          <div class="right-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quo
            tenetur dolore ex molestiae, a inventore natus, libero hic nesciunt
            enim aliquid! Sit accusamus praesentium exercitationem amet a, omnis
            fuga.
          </div>
          <div class="right-size">
            <h1>Select Size</h1>
            <div class="sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button
            onClick={() => {
              addTocart(product.id);
            }}
          >
            Add to Cart
          </button>
          <p class="right-category">
            {" "}
            <span>Category: </span>Women - T-Shirt, Crop Top{" "}
          </p>
          <p class="right-category2">
            {" "}
            <span>Tags: </span>Modern, Latest{" "}
          </p>
        </div>
      </div>
    </>
  );
}
export default ProductDisplay;
