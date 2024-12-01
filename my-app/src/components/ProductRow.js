import React, { Component } from "react";

class ProductRow extends Component {
  constructor(props) {
    super(props);
    this.destroy = this.destroy.bind(this);
  }

  destroy() {
    this.props.onDelete(this.props.product.id);
  }

  render() {
    const { product } = this.props;
    return (
      <tr>
        <td>{product.name}</td>
        <td>{product.category}</td>
        <td>{product.price}</td>
        <td>
          <button className="btn btn-primary btn-sm" onClick={this.destroy}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductRow;
