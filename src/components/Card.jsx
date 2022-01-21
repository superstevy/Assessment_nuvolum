import React, { useEffect, useState } from "react";
import ArrowOnImage from "../images/arrow-on.svg";
import ArrowOffImage from "../images/arrow-off.svg";

const Card = ({ product, selectedProductId, setSelectedProductId }) => {
  // the variable allowOn will determine if the product details are visible or hidden
  const [allowOn, setAllowOn] = useState(true);

  // this function will change the value of allowOn whenever an item is selected, thus revealing the item's details
  // while also hiding the previously selected item's details
  useEffect(() => {
    if (product.id == selectedProductId) {
      setAllowOn(true);
    } else {
      setAllowOn(false);
    }
  }, [selectedProductId]);

  return (
    <div className="card" onClick={() => setSelectedProductId(product.id)}>
      {/* Clicking on the item's image, title, or arrow will select it and reveal it's description 
      and price */}
      <img className="card__image" src={product.image} alt="" />
      <div className="card__title">{product.title}</div>
      {allowOn ? (
        <img className="card__arrow" src={ArrowOnImage} alt="" />
      ) : (
        <img className="card__arrow" src={ArrowOffImage} alt="" />
      )}
    </div>
  );
};

export default Card;
