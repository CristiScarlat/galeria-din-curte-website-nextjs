import Slider from '../components/slider';
import expozitii from '../data/expozitii.json';
import styles from "../styles/Gallery.module.css";

const Gallery = () => {
    const expos = Object.keys(expozitii);

    return (
        <main className={styles.galleryMain}>
            {expos.map(expo => (
                <div key={expo} style={{maxWidth: '100rem', margin: 'auto', width: '90%'}}>
                    <hr />
                    <Slider  images={expozitii[expo].map(img => `images/${expo}/${img}`)} title={expo.replace("_", " ").toUpperCase()} />
                </div>
            )
            )}
        </main >
    );
}

export default Gallery;