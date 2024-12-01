import React, { Component } from "react";

const RESET_VALUES = {
  id: "",
  name: "",
  category: "",
  price: "",
};

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: { ...RESET_VALUES },
    };

    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSave(e) {
    e.preventDefault(); // Prevent default form submission
    this.props.onSave(this.state.product);
    this.setState({ product: { ...RESET_VALUES } }); // Reset the form
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      product: { ...prevState.product, [name]: value },
    }));
  }

  render() {
    const { name, category, price } = this.state.product;
    return (
      <form className="mb-4" onSubmit={this.handleSave}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            className="form-control"
            type="text"
            name="category"
            value={category}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            className="form-control"
            type="text"
            name="price"
            value={price}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    );
  }
}

export default ProductForm;
