import "./App.css";
import Header from "./components/Header";
import ProductSlider from "./components/ProductSlider";
import ProductDetail from "./components/ProductDetail";
import { CartProvider } from "./context/cart/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="container">
        <Header />
        <section className="wrapper">
          <ProductSlider />
          <ProductDetail />
        </section>
      </div>
    </CartProvider>
  );
}

export default App;
