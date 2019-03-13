import React from "react";
import data from "../../data/products";
import ProductPage from "../../features/product-page";

export function ProductShow() {
  return (
    <div>
      <ProductPage products={data.products}/>
    </div>
  );
}
