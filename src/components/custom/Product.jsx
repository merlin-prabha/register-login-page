import React from "react";

const Product = ({ productDetails, onClick }) => {
  //   const { productDetails } = props;
  const { title, description, brand, images } = productDetails;
  return (
    <div className="product" onClick={() => onClick(productDetails.id)}>
      <img src={images[0]} alt={title} className="image" />
      <p className="product-title">{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default Product;
