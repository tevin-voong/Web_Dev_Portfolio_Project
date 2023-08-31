import React from 'react';

import ProductRow from '../components/ProductRow.js'; 


function Order({products}) {
  return (
    <div>
      <h2>Order Products</h2>
      <article>
        <h3>Please tell us what you'd like to order</h3>
        <p>Select the quantity of each item you'd like to order. Max per item is 10.</p>
        <table id="productTable">
          <caption>Products for Sale</caption>
          <thead>
            <tr>
              <th>Item, company</th>
              <th>Price</th>
              <th>Choose Quantity</th>
            </tr>
          </thead>
          <tbody>
            {products.map((currentProduct, index) =>
            <ProductRow
            product={currentProduct}
            key={index}
            />
            )}
          </tbody>
          <tfoot>
            
          </tfoot>
        </table>
      </article>
    </div>
  )
}
export default Order;