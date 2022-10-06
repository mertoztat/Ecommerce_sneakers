import "./productpage.css";
import productData from "../../ProductData";
import ProductDetail from "../ProductDetail";

function ProductPage() {
  return (
    <div>
      {productData.map((product) => (
        <ProductDetail key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductPage;
