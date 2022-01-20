import React from "react";
import StarOnImage from "../images/star-on.svg";
import StarOffImage from "../images/star-off.svg";

const Rating = ({ rating }) => {
  const showStars = (rate) => {
    let output = [];
    for (let i = 1; i <= 5; i++) {
      if (Math.round(rate) >= i) {
        output.push(<img key={i} src={StarOnImage} />);
      } else {
        output.push(<img key={i} src={StarOffImage} />);
      }
    }
    return output;
  };
  return (
    <div className="product-detail__rating">
      {showStars(rating.rate)}
      <div className="product-detail__rating__count">({rating.count})</div>
    </div>
  );
};

export default Rating;
