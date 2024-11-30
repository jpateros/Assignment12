import React, { Component } from "react";

const RESET_VALUES = { id: "", name: "", category: "", price: "" };

class ProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: Object.assign({}, RESET_VALUES), 
      errors: {},
    };

    // Bind event handler
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState((prevState) => {
      const product = { ...prevState.product }; 
      product[name] = value; 
      return { product }; 
    });
  }

  handleSave(e) {
    e.preventDefault(); 

    this.props.onSave(this.state.product);

    this.setState({
      product: Object.assign({}, RESET_VALUES),
      errors: {},
    });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={this.state.product.name}
          onChange={this.handleChange} 
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={this.state.product.category}
          onChange={this.handleChange} 
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={this.state.product.price}
          onChange={this.handleChange} 
        />
        <button type="submit" onClick={this.handleSave}>
          Save
        </button>
      </form>
    );
  }
}

export default ProductForm;
