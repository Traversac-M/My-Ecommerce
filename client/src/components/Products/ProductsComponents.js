import React from "react";
import ProductListing from '../../features/product-listing/ProductListing';

import data from '../../data/products.json';

export function Product(props) {
  return <div className="container">
    <ProductListing products={data.products}/>
  </div>
}
