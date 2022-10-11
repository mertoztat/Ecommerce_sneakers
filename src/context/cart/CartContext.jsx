import { createContext, useState } from "react";
import data from "../../data";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [productState, setProductState] = useState({
    productList: data,
    cart: [],
  });

  const addToCart = (product, number) =>
    setProductState({
      ...productState,
      cart: productState.cart.find((cartItem) => cartItem.id === product.id)
        ? productState.cart.map((cartItem) =>
            cartItem.id === product.id
              ? { ...cartItem, count: cartItem.count + number }
              : cartItem
          )
        : [...productState.cart, { ...product, count: number }],
    });

  const removeCart = (id) =>
    setProductState({
      ...productState,
      cart: productState.cart.filter((cartItem) => cartItem.id !== id),
    });

  const increase = (id, number) => {
    setProductState({
      ...productState,
      cart: productState.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count + number }
          : cartItem
      ),
    });
  };

  const decrease = (id) => {
    setProductState({
      ...productState,
      cart: productState.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
          : cartItem
      ),
    });
  };

  return (
    <CartContext.Provider
      value={{
        productState: productState,
        addToCart,
        removeCart,
        increase,
        decrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
