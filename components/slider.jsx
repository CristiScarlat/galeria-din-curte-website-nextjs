import {useRef, useState} from "react";
import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai";
import styles from "./styles/slider.module.scss";
import ImageWithSpinner from "./imageWithSpinner";
import {getBigImage} from "../utils/utils";
import Modal from "../components/modal";
import {Spinner} from "react-bootstrap";

const Slider = ({images, title, date, description}) => {
  const [leftBtnDisabled, setLeftBtnDisabled] = useState(false);
  const [rightBtnDisabled, setRightBtnDisabled] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const [zoomImageLoaded, setZoomImageLoaded] = useState(false);

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

  const handleZoom = (imgIndex) => {
    setSelectedImage(imgIndex)
  }

  const handleSelectPrev = () => {
    if (selectedImage === 0) return;
    setZoomImageLoaded(false);
    setSelectedImage(state => state - 1);
  }

  const handleSelectNext = () => {
    if (selectedImage === images.length - 1) return;
    setZoomImageLoaded(false);
    setSelectedImage(state => state + 1);
  }

  let touchStart = false;
  let touchMoves = [];
  const handleOnTouchStart = () => {
    touchStart = true;
  }

  const handleOnTouchEnd = () => {
    touchStart = false;
    if (touchMoves.length < 2) return
    if (touchMoves[0] > touchMoves[1]) {
      handleSelectNext()
    } else {
      handleSelectPrev()
    }
    touchMoves = [];
  }

  const handleOnTouchMove = (e) => {
    console.dir(e.target)
    if (touchStart && touchMoves.length < 2 && e.touches.length === 1) {
      touchMoves.push(e?.touches[0]?.clientX)
    }
  }

  return (
    <>
      <div className="mt-2 mb-2">
        <div className="d-flex align-items-center justify-content-between">
          <h4>{title}</h4>
          <span style={{color: "gray"}}>{date}</span>
        </div>
        <div>{description && <p>{description}</p>}</div>
        <div key={title} style={{position: "relative"}}>
          {images.length > 1 && <button
            className={styles.buttonLeft}
            onClick={handleScrollLeft}
            disabled={leftBtnDisabled}
            style={{visibility: leftBtnDisabled ? "hidden" : "visible"}}
          >
            <AiFillCaretLeft/>
          </button>}
          <div className={styles.imagesList} ref={sliderRef}>
            {images.map((img, index) => (
              <ImageWithSpinner
                key={img}
                src={img}
                alt={img}
                loading="lazy"
                style={img.includes('thumbnail_rendezVousLaKralik') && {width: 320, height: 'auto'}}
                width={320}
                height={320}
                quality={100}
                onClick={() => handleZoom(index)}
              />
            ))}
          </div>
          {images.length > 1 && <button
            className={styles.buttonRight}
            onClick={handleScrollRight}
            disabled={rightBtnDisabled}
            style={{visibility: rightBtnDisabled ? "hidden" : "visible"}}
          >
            <AiFillCaretRight/>
          </button>}
        </div>
      </div>
      <Modal
        className="min-h-100"
        show={selectedImage !== undefined}
        onClose={() => setSelectedImage(undefined)}
        handlePrev={handleSelectPrev}
        handleNext={handleSelectNext}
        selectedImage={selectedImage}
        count={images.length}>
        <div  style={{position: 'relative'}}>
          <img
            src={getBigImage(images[selectedImage])}
            alt="gallery item"
            className="img-fluid"
            onTouchStart={handleOnTouchStart}
            onTouchEnd={handleOnTouchEnd}
            onTouchMove={handleOnTouchMove}
            onLoad={() => setZoomImageLoaded(true)}
            style={{visibility: zoomImageLoaded ? 'visible' : 'hidden'}}
          />
          {!zoomImageLoaded && <Spinner style={{position: 'absolute', top: '50%', right: '50%'}}/>}
        </div>
      </Modal>
    </>
  );
};

export default Slider;
