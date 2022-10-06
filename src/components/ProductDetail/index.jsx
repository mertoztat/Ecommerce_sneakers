import "./productdetail.css";
import { useContext, useState } from "react";
import minus from "../../images/icon-minus.svg";
import plus from "../../images/icon-plus.svg";
import cart from "../../images/icon-cart-white.svg";
import CartContext from "../../context/cart/CartContext";

function ProductDetail({ product }) {
  const { showCart, cartItems, showHideCart, addToCart, count, setCount } =
    useContext(CartContext);

  const increase = () => {
    setCount((prevCount) => count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount((prevCount) => count - 1);
    } else {
      return count;
    }
  };

  const handleCart = (e, count) => {
    [...Array(count)].map(() => {
      return addToCart(e);
    });
  };

  return (
    <div className="detail-container">
      <div className="detail-content">
        <div key={product.id}>
          <h4>SNEAKER COMPANY</h4>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <div className="price">
            <h2>${product.price}</h2>
            <h4 className="discount">{product.discount_percentage}%</h4>
            <br />
            <span className="total-price">${product.initial_value}</span>
          </div>
          <div className="count-cart">
            <div className="count">
              <img src={minus} alt="" onClick={decrease} />
              <span>{count}</span>
              <img src={plus} alt="" onClick={increase} />
            </div>
            <div className="addcart">
              <button
                className="cart"
                onClick={() => handleCart(product, count)}
              >
                <img src={cart} alt="" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
