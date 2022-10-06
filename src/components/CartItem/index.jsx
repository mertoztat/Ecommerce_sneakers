import "./cartitem.css";
import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import trash from "../../images/icon-delete.svg";

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  const productId = item.id;

  return (
    <li>
      <img src={item.img} alt="" />
      <div className="cart_desc">
        <h4 className="cart_title">{item.title}</h4>
        <p className="cartSpan">
          {`$ ${item.price} * 3 `}
          <span>${item.price * 4}</span>
          <img onClick={() => removeItem(productId)} src={trash} alt="" />
        </p>
      </div>
    </li>
  );
};

export default CartItem;
