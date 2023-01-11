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
                <h4>Ateliere de arta cu artist plastic Dr. Oana Bolog-Bleich</h4>
                <p>{`Contrary to popular belief, Lorem Ipsum is not simply random text. 
                    It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`}</p>
            </section>
            <hr />
            <section>
                <div className={styles.imagesGrid}>
                    {data.atelier.images.big.map(image => (
                        <img key={image} src={`images/${data.atelier.dir}/big/${image}`} alt="..." loading="lazy"/>
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