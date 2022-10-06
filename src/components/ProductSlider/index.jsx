import { useState } from "react";
import "./productslider.css";
import images from "../../ProductImages";
import Modal from "../Modal/Modal";

function ProductSlider() {
  const [selected, setSelected] = useState(images[0]);
  const [click, setClick] = useState(false);

  return (
    <>
      <div className="product-container">
        <>
          <div>
            {click && <Modal setClick={setClick} />}

            <img
              src={selected}
              alt=""
              className="selected"
              onClick={() => setClick(true)}
            ></img>

            <div className="thumbnails">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className={selected === image ? "active" : ""}
                  onClick={() => setSelected(image)}
                />
              ))}
            </div>
          </div>
        </>
      </div>
    </>
  );
}

export default ProductSlider;
