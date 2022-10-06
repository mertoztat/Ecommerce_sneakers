import { useState } from "react";
import "./modal.css";
import images from "../../ProductImages";
import next from "../../images/icon-next.svg";
import previous from "../../images/icon-previous.svg";
import { IoClose } from "react-icons/io5";

function ProductSlider({ setClick }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(images[0]);

  const nextImage = (current) => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
    setSelected(
      current === images.length - 1 ? images[0] : images[current + 1]
    );
  };
  const prevImage = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
    setSelected(
      current === 0 ? images[images.length - 1] : images[current - 1]
    );
  };

  return (
    <>
      <div className="modal-container">
        <div className="modal_active">
          <div className="modal-wrapper">
            <img src={selected} alt="" className="selected"></img>
            <IoClose className="close-modal" onClick={() => setClick(false)} />

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
            <img
              src={next}
              alt="next"
              className="next"
              onClick={() => nextImage(current)}
            />
            <img
              src={previous}
              alt="next"
              className="previous"
              onClick={() => prevImage(current)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSlider;
