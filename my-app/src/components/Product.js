import React, { Component } from "react";
import Filters from "./Filters";
import ProductTable from "./ProductTable";
import ProductForm from "./ProductForm";

const PRODUCTS = {
  1: { id: 1, name: "Clarinet", category: "Music", price: "$459.99" },
  2: { id: 2, name: "Cello", category: "Music", price: "$5,000" },
  3: { id: 3, name: "Tuba", category: "Music", price: "$4,500" },
  4: { id: 4, name: "Chaise Lounge", category: "Furniture", price: "$799" },
  5: { id: 5, name: "Dining Table", category: "Furniture", price: "$1,300" },
  6: { id: 6, name: "Bean Bag", category: "Furniture", price: "$100" },
};

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: "",
      products: PRODUCTS,
    };

    // Bind event handlers
    this.handleFilter = this.handleFilter.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);

  }

  handleFilter(filterInput) {
    this.setState(filterInput);
  }

  handleDelete(id) {
    const updatedProducts = { ...this.state.products };
    delete updatedProducts[id];
    this.setState({ products: updatedProducts });
  }


  handleSave(product) {
    
    if (!product.id) {
      product.id = new Date().getTime();
    }

    this.setState((prevState) => {
      const products = { ...prevState.products };
      products[product.id] = product;
      return { products };
    });
  }

  handleDestroy(productId) {
    this.setState((prevState) => {
         let products = prevState.products
         delete products[productId]
         return { products }
    })
}


  render() {
    return (
      <div>
        <h2>Product Inventory</h2>
        <Filters
          searchText={this.state.filterText}
          onFilter={this.handleFilter}
        />
        <ProductTable
          products={this.state.products}
          filterText={this.state.filterText}
          onDelete={this.handleDelete}
          onDestroy={this.handleDelete}
        />
        <ProductForm onSave={this.handleSave} />
      </div>
    );
  }
}

export default Products;
