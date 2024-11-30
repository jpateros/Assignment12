import React from "react";
import ProductRow from "./ProductRow";

const ProductTable = ({ products, filterText, onDelete }) => {

  const handleDestroy = (id) => {
    onDelete(id); 
  };

  const rows = [];


  Object.keys(products).forEach((key) => {
    const product = products[key];
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return; 
    }
    rows.push(
      <ProductRow
        key={product.id}
        product={product}
        onDelete={handleDestroy}  
      />
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
