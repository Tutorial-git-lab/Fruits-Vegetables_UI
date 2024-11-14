import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Apple",
    image: "Fruits/apple-benefits.jpg",
    price: 1.5,
  },
  {
    id: 2,
    name: "Banana",
    image: "Fruits/Banana.webp",
    price: 1.2,
  },
  {
    id: 3,
    name: "Orange",
    image: "Fruits/download.jpg",
    price: 1.8,
  },
  {
    id: 4,
    name: "Grapes",
    image: "Fruits/download (1).jpg",
    price: 2.5,
  },
  {
    id: 5,
    name: "Apricot",
    image: "Fruits/61s6Yp9zKqL._AC_UF1000,1000_QL80_.jpg",
    price: 2.5,
  },
];

function Fruits() {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  // Filter the products based on the search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Clear search query
  const clearSearch = () => {
    setSearchQuery("");
  };

  const [cart, setCart] = useState([]); // State for the cart

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="container-fluid">
      {/* Search Bar */}
      <header className="my-4 text-center">
        <div className="d-flex justify-content-center align-items-center">
          <div className="input-group w-50 mx-auto my-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search Fruits..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Handle input change
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={clearSearch}
            >
              Clear
            </button>
          </div>
        </div>
      </header>

      {/* Products List */}
      <main>
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-md-2 mb-4" key={product.id}>
              <div className="card shadow-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top"
                  style={{
                    height: "150px",

                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Price: ${product.price}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(product)} // Add product to cart
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Fruits;
