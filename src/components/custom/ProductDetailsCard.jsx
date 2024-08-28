import React from "react";

const ProductDetailsCard = ({ details }) => {
  const {
    image,
    description,
    price,
    rating,
    title,
    warrantyInformation,
    images,
  } = details;
  return (
    <div className="details-card">
      <h1 className="details-heading">{title}</h1>
      <img src={images} alt={title} className="details-image" />
      <p>{description}</p>
      <p>Rating: {rating}</p>
      <p>Price: {price}</p>
    </div>
  );
};

export default ProductDetailsCard;
