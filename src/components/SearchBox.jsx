import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SearchBox.css";
import { Link } from "react-router-dom";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        setError("Error fetching products. Please try again later.");
        console.log(error);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="main">
      <div className="container">
        <h1>Search Box</h1>
        <input
          type="search"
          name="src"
          placeholder="Search products here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="allCards">
        {error && <div className="error">{error}</div>}
        {search !== "" &&
          filteredProducts.map((product, index) => (
            <Link to={`/product/${product.id}`} key={index}>
              <div className="card">
                <div className="title">
                  <h2>{product.title.substring(0, 100)}</h2>
                </div>
              </div>
            </Link>
          ))}
        {!error && search !== "" && filteredProducts.length === 0 && (
          <div className="no-results">No matching products found.</div>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
