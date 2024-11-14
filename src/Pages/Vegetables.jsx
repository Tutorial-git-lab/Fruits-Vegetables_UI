import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Carrot",
    image: "Vegetables/800px-Vegetable-Carrot-Bundle-wStalks.jpg",
    price: 40,
  },
  {
    id: 2,
    name: "Broccoli",
    image: "Vegetables/images.jpg",
    price: 30,
  },
  {
    id: 3,
    name: "Spinach",
    image: "Vegetables/images (1).jpg",
    price: 50,
  },
  {
    id: 4,
    name: "Lettuce",
    image: "Vegetables/shopping.webp",
    price: 60,
  },
  {
    id: 5,
    name: "Tomato",
    image: "Vegetables/images (2).jpg",
    price: 80,
  },
  {
    id: 6,
    name: "Cucumber",
    image: "Vegetables/Cucumber.webp",
    price: 90,
  },
  {
    id: 7,
    name: "Potato",
    image: "Vegetables/download.webp",
    price: 50,
  },
  { id: 8, name: "Onion", image: "Vegetables/download (1).webp" },
];

function Vegetables() {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  // Filter vegetables based on search query
  const filteredVegetables = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Clear search query
  const clearSearch = () => {
    setSearchQuery("");
  };

  const [cart, setCart] = useState([]);

  // Function to add product to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Function to calculate the total price of the cart

  return (
    <div className="container-fluid">
      <header className="my-4 text-center">
        <div className="d-flex justify-content-center align-items-center">
          <div className="input-group w-50 mx-auto my-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search vegetables..."
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

      <main>
        <div className="row">
          {filteredVegetables.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card shadow-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top"
                  style={{ height: "150px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Price: ${product.price}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(product)}
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

export default Vegetables;
