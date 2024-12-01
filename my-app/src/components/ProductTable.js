import React from "react";
import ProductRow from "./ProductRow";

const ProductTable = ({ products, filterText, onDelete }) => {
  const rows = [];

  // Filter products and prepare rows
  Object.keys(products).forEach((key) => {
    const product = products[key];
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    rows.push(
      <ProductRow key={product.id} product={product} onDelete={onDelete} />
    );
  });

  return (
    <table className="table table-striped table-hover">
      <thead className="table-dark">
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
