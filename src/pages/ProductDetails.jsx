import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductDetailsCard from "../components/custom/ProductDetailsCard";

const ProductDetails = () => {
  const [detail, setDetail] = useState([]);

  const params = useParams();

  const id = params.id;
  useEffect(() => {
    const apiFetch = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        console.log(res, "res");
        setDetail(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    apiFetch();
  }, []);

  return (
    <div>
      {console.log(detail)}
      <h1 className="main-heading">Product Details</h1>
      <ProductDetailsCard details={detail} key={detail.id} />
    </div>
  );
};

export default ProductDetails;
