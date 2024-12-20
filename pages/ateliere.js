import { useState } from 'react';
import { useRouter } from 'next/router';
import { FcHome, FcFilmReel, FcAbout, FcBusinessman } from 'react-icons/fc';
import NavHeader from "../components/navHeader";
import data from "../data/data.json";
import styles from "../styles/Ateliere.module.css";
import Slider from '../components/slider';
import ImageWithSpinner from '../components/imageWithSpinner';
import Modal from "../components/modal";
import {Spinner} from "react-bootstrap";

const Ateliere = () => {
    const [selectedTab, setSelectedTab] = useState('about');
    const [selectedImage, setSelectedImage] = useState();
    const [zoomImageLoaded, setZoomImageLoaded] = useState(false);
    const router = useRouter();

    const navHeaderItems = [
        {
            label: 'Acasa',
            path: '/',
            icon: <FcHome size={40} />
        },
        {
            label: 'Despre Ateliere',
            path: 'about',
            icon: <FcAbout size={40} />
        },
        {
            label: 'Media',
            path: 'media',
            icon: <FcFilmReel size={40} />
        },
        {
            label: 'Portret',
            path: 'portret',
            icon: <FcBusinessman size={40} />
        }
    ]

    const onTabSelect = (action) => {
        switch (action) {
            case '/':
                router.push('/');
                break;
            case 'media':
                setSelectedTab('media');
                break;
            case 'about':
                setSelectedTab('about');
                break;
            case 'portret':
                setSelectedTab('portret');
                break;
        }
    }


    const handleSelectPrev = () => {
        if (selectedImage === 0) return;
        setZoomImageLoaded(false);
        setSelectedImage(state => state - 1);
    }

    const handleSelectNext = () => {
        if (selectedImage === data.atelier.images.length - 1) return;
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
            <NavHeader onTabSelect={onTabSelect} selectedTab={selectedTab} items={navHeaderItems} />
            <hr />
            {selectedTab === 'about' &&
                <>
                    <section>
                        <h4>Cursuri de arte plastice cu artist Dr. Oana Bolog-Bleich</h4>
                        <p className='mb-0'>{`In cadrul Galeriei din Curte, într-o ambianță perfectă pentru creație, 
                se desfășuară cursul de arte plastice dedicat copiilor și adolescenților.
                `}</p>
                        <p className='mt-0'>{`Studiul artelor plastice, formează o personalitate armonioasă celor tineri, dezvoltă sensibilitatea artistică
                și educă cursanții in domeniul istoriei artei. Acest curs este o alternativă binevenită și utilă 
                pentru petrecerea timpului liber în contact cu valorile culturale locale și universale asigurând o adevărată infuzie de cultură, participanților.`}</p>
                    </section>
                    <hr />
                    <section>
                        <div className={styles.imagesGrid}>
                            {data.atelier.images.map((image, index) => (
                                <ImageWithSpinner
                                    key={image}
                                    src={`/images/${data.atelier.dir}/${image}`}
                                    alt="..."
                                    loading="lazy"
                                    width={320}
                                    height={320}
                                    quality={100}
                                    onClick={() => setSelectedImage(index)}
                                    />
                            ))}
                        </div>
                    </section>

                    <Modal
                      className="min-h-100"
                      show={selectedImage !== undefined}
                      onClose={() => setSelectedImage(undefined)}
                      handlePrev={handleSelectPrev}
                      handleNext={handleSelectNext}
                      selectedImage={selectedImage}
                      count={data.atelier.images.length}>
                        <div  style={{position: 'relative'}} className="d-flex justify-content-center">
                            <img
                              src={`/images/${data.atelier.dir}/${data.atelier.images[selectedImage]}`}
                              alt="gallery item"
                              className="img-fluid"
                              onTouchStart={handleOnTouchStart}
                              onTouchEnd={handleOnTouchEnd}
                              onTouchMove={handleOnTouchMove}
                              onLoad={() => setZoomImageLoaded(true)}
                              style={{opacity: zoomImageLoaded ? 1 : 0}}
                            />
                            {!zoomImageLoaded && <Spinner style={{position: 'absolute', top: '50%', right: '50%'}}/>}
                        </div>
                    </Modal>

                </>}
            {selectedTab === 'media' && <div className="d-flex align-items-center flex-column gap-3">
                <iframe className="youtubeIframe" src="https://www.youtube.com/embed/7itNCEH1bLA" title="Expozitia copiilor, File de poveste, Galeria din Curte, Timisoara 2022." frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe className="youtubeIframe" src="https://www.youtube.com/embed/3jyjK7qdWCs" title="Expozitia de figurine FIMO, 2022." frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe className="youtubeIframe" src="https://www.youtube.com/embed/LwcmK5PTx54" title="Expozitie 2021- Cursul de educatie plastica pentru copii cu artist plastic dr.Oana Bolog-Bleich" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe className="youtubeIframe" src="https://www.youtube.com/embed/0cBB-0wCE8A" title="Expozitia de arte plastice a copiilor." frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>}
            {selectedTab === 'portret' && data.portret.map((obj) => (
                <div key={obj?.title} style={{ margin: "auto" }}>
                    <h4>{obj?.title}</h4>
                    <hr />
                    {obj?.items?.map((item) => (
                        <>
                            <Slider
                                images={item?.images?.map(
                                    (img) => `/images/${item.dir}/thumbnail_${img}`
                                )}
                                title={item.title}
                            />
                            <div className="mb-3" />
                        </>
                    ))}
                    <hr style={{ marginTop: 0 }} />
                </div>
            ))}
        </>
    )
}

export default Ateliere;