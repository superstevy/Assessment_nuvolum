import React, { useEffect, useState } from "react";
import ArrowOnImage from "../images/arrow-on.svg";
import ArrowOffImage from "../images/arrow-off.svg";

const Card = ({ product, selectedProductId, setSelectedProductId }) => {
  const [allowOn, setAllowOn] = useState(true);
  useEffect(() => {
    if (product.id == selectedProductId) {
      setAllowOn(true);
    } else {
      setAllowOn(false);
    }
  }, [selectedProductId]);
  return (
    <div className="card" onClick={() => setSelectedProductId(product.id)}>
      <img className="card__image" src={product.image} alt="" />
      <div className="card__title">{product.title}</div>
      {allowOn ? <img className="card__arrow" src={ArrowOnImage} alt="" /> : <img className="card__arrow" src={ArrowOffImage} alt="" />}
    </div>
  );
};

export default Card;
