import React, { Component } from "react";

class Filters extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.value; 
    const name = e.target.name; 

    this.props.onFilter({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="filterText" 
          placeholder="Search..."
          value={this.props.searchText} 
          onChange={this.handleChange} 
        />
      </form>
    );
  }
}

export default Filters;
