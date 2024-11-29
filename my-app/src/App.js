// import React, { useState } from "react";
// import "./App.css";

// const PRODUCTS = {
//   1: { id: 1, category: "Music", price: "$459.99", name: "Clarinet" },
//   2: { id: 2, category: "Music", price: "$5,000", name: "Cello" },
//   3: { id: 3, category: "Music", price: "$4,500", name: "Tuba" },
//   4: { id: 4, category: "Furniture", price: "$799", name: "Chaise Lounge" },
//   5: { id: 5, category: "Furniture", price: "$1,300", name: "Dining Table" },
//   6: { id: 6, category: "Furniture", price: "$100", name: "Bean Bag" },
// };

// function App() {
//   const [products, setProducts] = useState(PRODUCTS);
//   const [searchText, setSearchText] = useState("");
//   const [newProduct, setNewProduct] = useState({ name: "", category: "", price: "" });

//   const handleSearch = (e) => {
//     setSearchText(e.target.value);
//   };

//   const handleDelete = (id) => {
//     const updatedProducts = { ...products };
//     delete updatedProducts[id];
//     setProducts(updatedProducts);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
//   };

//   const handleSave = () => {
//     const id = Date.now();
//     setProducts((prevProducts) => ({
//       ...prevProducts,
//       [id]: { id, ...newProduct },
//     }));
//     setNewProduct({ name: "", category: "", price: "" });
//   };

//   const filteredProducts = Object.values(products).filter((product) =>
//     product.name.toLowerCase().includes(searchText.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchText}
//         onChange={handleSearch}
//       />
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredProducts.map((product) => (
//             <tr key={product.id}>
//               <td>{product.name}</td>
//               <td>{product.price}</td>
//               <td>
//                 <button onClick={() => handleDelete(product.id)}>x</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <h3>Enter a new product</h3>
//       <div>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={newProduct.name}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="category"
//           placeholder="Category"
//           value={newProduct.category}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="price"
//           placeholder="Price"
//           value={newProduct.price}
//           onChange={handleInputChange}
//         />
//         <button onClick={handleSave}>Save</button>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";

const PRODUCTS = {
  1: { id: 1, category: "Music", price: "$459.99", name: "Clarinet" },
  2: { id: 2, category: "Music", price: "$5,000", name: "Cello" },
  3: { id: 3, category: "Music", price: "$4,500", name: "Tuba" },
  4: { id: 4, category: "Furniture", price: "$799", name: "Chaise Lounge" },
  5: { id: 5, category: "Furniture", price: "$1,300", name: "Dining Table" },
  6: { id: 6, category: "Furniture", price: "$100", name: "Bean Bag" },
};

function App() {
  const [products, setProducts] = useState(PRODUCTS);
  const [searchText, setSearchText] = useState("");
  const [newProduct, setNewProduct] = useState({ name: "", category: "", price: "" });

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleDelete = (id) => {
    const updatedProducts = { ...products };
    delete updatedProducts[id];
    setProducts(updatedProducts);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSave = () => {
    const id = Date.now();
    setProducts((prevProducts) => ({
      ...prevProducts,
      [id]: { id, ...newProduct },
    }));
    setNewProduct({ name: "", category: "", price: "" });
  };

  const filteredProducts = Object.values(products).filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => handleDelete(product.id)}>x</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Enter a new product</h3>
      <div className="new-product-form">
        <div className="form-group">
          <label>Name:</label>
          
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newProduct.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={newProduct.category}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={newProduct.price}
            onChange={handleInputChange}
          />
        </div>
        <button className="save-button" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default App;