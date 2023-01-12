import { useState } from 'react';
import { useRouter } from 'next/router';
import { FcHome, FcFilmReel, FcAbout } from 'react-icons/fc';
import NavHeader from "../components/navHeader";
import data from "../data/data.json";
import styles from "../styles/Ateliere.module.css";

const Ateliere = () => {
    const [selectedTab, setSelectedTab] = useState('about');
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
        }
    }

    return (
        <main>
            <NavHeader onTabSelect={onTabSelect} selectedTab={selectedTab} items={navHeaderItems}/>
            <hr />
            {selectedTab === 'about' && 
            <>
            <section>
                <h4>Cursuri de arte plastice cu artist Dr. Oana Bolog-Bleich</h4>
                <p>{`In cadru Galeriei din Curte într-o ambianță perfectă pentru creație, 
                se desfășuară cursul de arte plastice dedicat copiilor și adolescenților.
                Studiul artelor plastice, formează personalitatea celor tineri și dezvoltă sensibilitatea artistică
                și educă cursanții in domeniul istoriei artei.`}</p>
            </section>
            <hr />
            <section>
                <div className={styles.imagesGrid}>
                    {data.atelier.images.map(image => (
                        <img key={image} src={`images/${data.atelier.dir}/${image}`} alt="..." loading="lazy"/>
                    ))}
                </div>
            </section>
            </>}
            {selectedTab === 'media' && <div className="d-flex align-items-center flex-column gap-3">
                <iframe className="youtubeIframe" src="https://www.youtube.com/embed/7itNCEH1bLA" title="Expozitia copiilor, File de poveste, Galeria din Curte, Timisoara 2022." frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe className="youtubeIframe" src="https://www.youtube.com/embed/3jyjK7qdWCs" title="Expozitia de figurine FIMO, 2022." frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe className="youtubeIframe" src="https://www.youtube.com/embed/LwcmK5PTx54" title="Expozitie 2021- Cursul de educatie plastica pentru copii cu artist plastic dr.Oana Bolog-Bleich" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>}
        </main>
    )
}

export default Ateliere;