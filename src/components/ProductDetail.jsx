import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        setError("Error fetching product details. Please try again later.");
        console.log(error);
      });
  }, [id]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="heading">{product.title}</h1>
      <div>
        <img src={product.image} alt={product.title} />
      </div>
      <p className="description"><b>Description: </b>{product.description}</p>
      <p className="price"><b>Price: </b> ${product.price}</p>
    </div>
  );
};

export default ProductDetail;
