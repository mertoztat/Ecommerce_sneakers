import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CartState from "./context/cart/CartState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartState>
      <App />
    </CartState>
  </React.StrictMode>
);
