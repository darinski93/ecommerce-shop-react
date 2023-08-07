import { useLocation } from "react-router-dom";

export const Product = () => {
  const location = useLocation();
  const { item } = location.state || {};


  const { name, extended_description, price, image, rating } = item;

  return (
    <>
  
    <div className="item-container">
      <div className="left-side">
        <img className="item-image" src={image} alt="Product" />
        <div className="rating">
          Rating:
          <span className="rating-stars"> {(rating)}</span>
        </div>
      </div>
      <div className="right-side">
        <div className="item-name">{name}</div>
        <div className="item-description">{extended_description}</div>
        <div className="item-price">${price}</div>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
     
    </div>
    </>
  );
};
