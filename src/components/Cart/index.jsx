import "./cart.css";
import CartItem from "../CartItem";
import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  console.log("idididi", cartItems.id);

  return (
    <>
      <div className="modalContainer">
        <div className="cartModal">
          <h4>Cart</h4>
          <hr />
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <ul>
                  <CartItem key={item.id} item={item} />
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
