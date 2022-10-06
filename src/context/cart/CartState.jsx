import { useReducer, useState } from "react";
import CartContext from "../cart/CartContext";
import CartReducer from "../cart/CartReducer";
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from "../Types";

const CartState = ({ children }) => {
  const initialState = {
    showCart: false,
    cartItems: [],
  };

  const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const showHideCart = () => {
    dispatch({ type: "SHOW_HIDE_CART" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        removeItem,
        showHideCart,
        count,
        setCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
