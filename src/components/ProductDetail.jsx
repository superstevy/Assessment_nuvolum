import React, { useEffect, useState } from "react";
import Rating from "./Rating";

const ProductDetail = ({ product, selectedProductId }) => {
  const [productClassName, setProductClassName] = useState("");
  useEffect(() => {
    if (product.id == selectedProductId) {
      setProductClassName("product-detail");
    } else {
      setProductClassName("product-detail product-hide");
    }
  }, [selectedProductId]);

  return (
    <div className={productClassName}>
      <div className="product-detail__price">${product.price}</div>
      <div className="product-detail__description">{product.description}</div>
      <Rating key={product.id} rating={product.rating} />
      <button className="product-detail__add-card">Add to Card</button>
    </div>
  );
};

export default ProductDetail;
