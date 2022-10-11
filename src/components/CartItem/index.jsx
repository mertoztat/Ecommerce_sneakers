import "./cartitem.css";
import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import trash from "../../images/icon-delete.svg";

const CartItem = ({ item }) => {
  const { removeCart } = useContext(CartContext);

  return (
    <li>
      <img src={item.img} alt="" />
      <div className="cart_desc">
        <h4 className="cart_title">{item.title}</h4>
        <p className="cartSpan">
          {` ${item.price} * ${item.count} `}
          <span>${item.price * item.count}</span>
          <img src={trash} alt="" onClick={() => removeCart(item.id)} />
        </p>
      </div>
    </li>
  );
};

export default CartItem;
