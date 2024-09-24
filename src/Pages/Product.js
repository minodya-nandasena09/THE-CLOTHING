import React from "react";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breakcrums from "../Components/Breakcrums/Breakcrums";
import all_product from "../Components/Assets/all_product";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <>
      <Breakcrums product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProducts />
    </>
  );
};

export default Product;
