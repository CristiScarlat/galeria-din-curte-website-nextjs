import { useRef, useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import styles from "./styles/slider.module.scss";
import ImageWithSpinner from "./imageWithSpinner";

const Slider = ({ images, title, date, description }) => {
  const [leftBtnDisabled, setLeftBtnDisabled] = useState(false);
  const [rightBtnDisabled, setRightBtnDisabled] = useState(false);

  const sliderRef = useRef();

  const handleScrollLeft = () => {
    if (rightBtnDisabled) setRightBtnDisabled(false);
    if (sliderRef.current.scrollLeft === 0) {
      setLeftBtnDisabled(true);
    }
    sliderRef.current.scrollLeft -= 320;
  };

  const handleScrollRight = () => {
    if (leftBtnDisabled) setLeftBtnDisabled(false);
    if (
      sliderRef.current.scrollWidth - sliderRef.current.scrollLeft ===
      sliderRef.current.clientWidth
    ) {
      setRightBtnDisabled(true);
    }
    sliderRef.current.scrollLeft += 320;
  };

  return (
    <div className="mt-2 mb-2">
      <div className="d-flex align-items-center justify-content-between">
        <h4>{title}</h4>
        <span style={{ color: "gray" }}>{date}</span>
      </div>
      <div>{description && <p>{description}</p>}</div>
      <div key={title} style={{ position: "relative" }}>
        {images.length > 1 && <button
          className={styles.buttonLeft}
          onClick={handleScrollLeft}
          disabled={leftBtnDisabled}
          style={{ visibility: leftBtnDisabled ? "hidden" : "visible" }}
        >
          <AiFillCaretLeft />
        </button>}
        <div className={styles.imagesList} ref={sliderRef}>
          {images.map((img) => (
            <ImageWithSpinner
              key={img}
              src={img}
              alt={img}
              loading="lazy"
              style={img.includes('thumbnail_rendezVousLaKralik') && {width: 'auto', height: 'auto'}}
              width={320}
              height={320}
              quality={100}
            />
          ))}
        </div>
        {images.length > 1 && <button
          className={styles.buttonRight}
          onClick={handleScrollRight}
          disabled={rightBtnDisabled}
          style={{ visibility: rightBtnDisabled ? "hidden" : "visible" }}
        >
          <AiFillCaretRight />
        </button>}
      </div>
    </div>
  );
};

export default Slider;
