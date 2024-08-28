import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Product from "../components/custom/Product";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [productDetail, setProductDetail] = useState([]);
  const [showDetail, setShowDetail] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const apiFetch = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setProducts(res.data.products, "res");
      } catch (error) {
        console.log(error);
      }
    };

    apiFetch();
  }, []);

  const renderSuccess = () => {
    console.log(products);
  };

  const handleLink = async (e) => {
    console.log(e);
    navigate(`/details/${e}`);
  };

  return (
    <div>
      <h1 className="main-heading">Products</h1>
      {renderSuccess()}

      <ul className="products-container">
        {products?.map((product) => (
          <Product
            productDetails={product}
            key={product.id}
            onClick={handleLink}
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;
