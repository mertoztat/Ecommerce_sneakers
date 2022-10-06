import "./header.css";
import logo from "../../images/logo.svg";
import cart from "../../images/icon-cart.svg";
import avatar from "../../images/image-avatar.png";
import CartContext from "../../context/cart/CartContext";
import { useContext, useState } from "react";
import Cart from "../Cart";
import fabars from "../../images/icon-menu.svg";
import close from "../../images/icon-close.svg";

function Header() {
  const { cartItems, showHideCart } = useContext(CartContext);

  const [clicked, setClicked] = useState(false);

  const hamburgerMenu = () => {
    setClicked(!clicked);
  };

  const [showModal, setShowModal] = useState(false);

  const toggleCart = () => {
    setShowModal(!showModal);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-left">
          <div className="hamburger" onClick={hamburgerMenu}>
            {clicked ? <img src={close} alt="" /> : <img src={fabars} alt="" />}
          </div>
          <img src={logo} alt="" />
          <ul className={clicked ? "nav-items" : "nav-items menu"}>
            <li className="nav-item">Collections</li>
            <li className="nav-item">Men</li>
            <li className="nav-item">Women</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Contact</li>
          </ul>
        </div>
        <div className="nav-right">
          <img
            onClick={toggleCart}
            className="nav-cart"
            src={cart}
            alt="cart"
          />
          {cartItems.length === 0 ? (
            <span className="cart-item empty">{cartItems}</span>
          ) : (
            <span className="cart-item">{cartItems.length}</span>
          )}
          {/* <span className="cart-item">{cartItems.length}</span> */}
          <img className="avatar" src={avatar} alt="" />
        </div>
      </nav>
      {showModal && <Cart />}
      {/* <div>
        <Cart showModal={showModal} toggleCart={toggleCart} />
      </div> */}
    </header>
  );
}

export default Header;
