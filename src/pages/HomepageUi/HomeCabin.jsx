import { useRef } from "react";
import useScroll from "../../hooks/useScroll";

function HomeCabin({ cabin }) {
  const { name, maxCapacity, image, regularPrice, description, discount } =
    cabin;
  const background = {
    backgroundImage: `url(${image}), linear-gradient(to right bottom, rgba(255,169,47, 0.704), rgba(247,103,7, 0.201))`,
  };

  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div className="card__picture" style={background}></div>
        <h4 className="card__heading">
          <span className="card__heading-span card__heading-span--1">
            {name}
          </span>
        </h4>
        <div className="card__details">
          <p className="heading-tertiary u-margin-bottom-small">
            🏘️Can hold up to {maxCapacity} people
          </p>
          <p>{description}</p>
        </div>
      </div>
      <div className="card__side card__side--back card__side--back-1">
        <div className="card__cta">
          <div className="card__price-box">
            <p className="card__price-only">Only</p>
            <p className="card__price-value">${regularPrice}</p>
            <p className="card__price-only">per night</p>
            {discount > 0 && (
              <em className="card__price-discount">with {discount}$ off!</em>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCabin;
