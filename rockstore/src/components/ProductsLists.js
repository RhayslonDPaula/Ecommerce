import React from 'react'
import Product from './Product';

export default function ProductsLists(products) {
  return (
  <div className="product-list">
    {products.map((product) => ( 
        <Product {...product}/>
    ))}

  </div>
  );
}
