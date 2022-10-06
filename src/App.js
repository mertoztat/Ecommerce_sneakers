import "./App.css";

import Header from "./components/Header";
import ProductSlider from "./components/ProductSlider";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <div className="container">
      <Header />
      <section className="wrapper">
        <ProductSlider />
        <ProductPage />
        {/* <ProductDetail /> */}
      </section>
    </div>
  );
}

export default App;
