import { useState } from "react";
import "./modal.css";
import images from "../../ProductImages";
import next from "../../images/icon-next.svg";
import previous from "../../images/icon-previous.svg";

function ProductSlider() {
  const [selected, setSelected] = useState(images[0]);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <div className="modal-container">
        <div className="mert">
          <div className="deneme">
            <img
              src={selected}
              alt=""
              className="selected"
              onClick={handleClick}
            ></img>
            {/* <img src={minus} alt="next" /> */}
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
            <img src={next} alt="next" className="next" />
            <img src={previous} alt="next" className="previous" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSlider;
