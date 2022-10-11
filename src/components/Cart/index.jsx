import "./cart.css";
import CartItem from "../CartItem";
import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";

const Cart = () => {
  const { productState } = useContext(CartContext);

  return (
    <>
      <div className="modalContainer">
        <div className="cartModal">
          <h4>Cart</h4>
          <hr />
          {productState.cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            <div>
              {productState.cart.map((item, index) => (
                <ul key={index}>
                  <CartItem item={item} />
                </ul>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
