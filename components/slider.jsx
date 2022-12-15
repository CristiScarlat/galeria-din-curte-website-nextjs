import { useRef, useState } from "react";
import styles from "./styles/slider.module.scss";

const Slider = ({ images, title }) => {
  const [leftBtnDisabled, setLeftBtnDisabled] = useState(false);
  const [rightBtnDisabled, setRightBtnDisabled] = useState(false);

  const sliderRef = useRef();

  const handleScrollLeft = () => {
    if(rightBtnDisabled)setRightBtnDisabled(false);
    if(sliderRef.current.scrollLeft === 0){
        setLeftBtnDisabled(true);
    }
    sliderRef.current.scrollLeft -= 320;
  };

  const handleScrollRight = () => {
    if(leftBtnDisabled)setLeftBtnDisabled(false);
    if(sliderRef.current.scrollWidth - sliderRef.current.scrollLeft === sliderRef.current.clientWidth){
        setRightBtnDisabled(true);
    }
    console.log(sliderRef.current.scrollLeft, sliderRef.current.scrollWidth, sliderRef.current.clientWidth)
    sliderRef.current.scrollLeft += 320;
  };

  return (
    <div className="mt-2 mb-2">
      <h4>{title}</h4>
      <div key={title} style={{position: 'relative'}}>
        <button 
        className={styles.buttonLeft} 
        onClick={handleScrollLeft} 
        disabled={leftBtnDisabled} 
        style={{visibility: leftBtnDisabled ? 'hidden' : 'visible'}}>
          {"<<"}
        </button>
        <div className={styles.imagesList} ref={sliderRef}>
          {images.map((img) => (
            <img key={img} src={img} alt={img} />
          ))}
        </div>
        <button 
        className={styles.buttonRight} 
        onClick={handleScrollRight}
        disabled={rightBtnDisabled} 
        style={{visibility: rightBtnDisabled ? 'hidden' : 'visible'}}>
          {">>"}
        </button>
      </div>
    </div>
  );
};

export default Slider;
