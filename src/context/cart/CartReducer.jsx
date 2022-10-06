import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from "../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART:
      // CartState içerisindeki initialState e göre switch case yapısı kuruyoruz
      return {
        ...state,
        showCart: !state.showCart,
      };

    case ADD_TO_CART:
      return {
        ...state,
        // Boş Arrayde tuttuğumuz cart itemsları al
        // daha sonra devamına action payload ile payloaddan gelen "itemi" ekle
        cartItems: [...state.cartItems, action.payload],
      };

    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default CartReducer;
