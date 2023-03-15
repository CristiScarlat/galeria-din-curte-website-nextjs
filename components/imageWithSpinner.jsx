import Image from "next/image";
import {useState} from "react";
import {Spinner} from "react-bootstrap";

const ImageWithSpinner = ({
                              src,
                              alt,
                              loading = "lazy",
                              style,
                              width,
                              height,
                              quality = 100,
                              onClick
                          }) => {

    const [loaded, setLoaded] = useState(false);
    return (
        <div style={{position: "relative", border: "1px solid gray"}}>
            <Image
                src={src}
                alt={alt}
                loading={loading}
                style={{...style, position: "relative", visibility: loaded ? "visible" : "hidden"}}
                width={width}
                height={height}
                quality={quality}
                onLoad={() => setLoaded(true)}
                onClick={() => onClick(src)}
            />
            <div style={{position: "absolute", top: "45%", right: "45%", visibility: !loaded ? "visible" : "hidden"}}>
              <Spinner/>
            </div>
        </div>
    );
};

export default ImageWithSpinner;
