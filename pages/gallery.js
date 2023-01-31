import { useState } from 'react';
import Slider from '../components/slider';
import data from '../data/data.json';
import styles from "../styles/Gallery.module.css";
import { useRouter } from 'next/router';
import NavHeader from '../components/navHeader';
import { FcHome, FcGallery, FcCalendar, FcFilmReel } from 'react-icons/fc';

const Gallery = () => {
    const [selectedTab, setSelectedTab] = useState('expo');
    const router = useRouter();

    const navHeaderItems = [
        {
            label: 'Acasa',
            path: '/',
            icon: <FcHome size={40} />
        },
        {
            label: 'Expoziții',
            path: 'expo',
            icon: <FcGallery size={40} />
        },
        {
            label: 'Evenimente',
            path: 'events',
            icon: <FcCalendar size={40} />
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
            case 'expo':
                setSelectedTab('expo');
                break;
            case 'events':
                setSelectedTab('events');
                break;
            case 'media':
                setSelectedTab('media');
                break;
        }
    }

    return (
        <main>
            <NavHeader onTabSelect={onTabSelect} selectedTab={selectedTab} items={navHeaderItems} />
            <hr />
            {selectedTab === "expo" && data.gallery.map(expo => (
                <div key={expo?.title} style={{ margin: 'auto' }}>
                    {/* <hr style={{marginTop: 0}}/> */}
                    <h4>{expo?.title}</h4>
                    <p>{expo?.description}</p>
                    {expo?.items?.map(item => (
                        <>
                            <Slider images={item?.images?.map(img => `images/${item.dir}/thumbnail_${img}`)} title={item.title} date={item.date} />
                            <div className="mb-3" />
                        </>
                    ))}
                    <hr style={{ marginTop: 0 }} />
                </div>
            ))}
            {selectedTab === "events" && data.galleryEvents.map(event => (
                <div key={event.title} style={{ margin: 'auto' }}>
                    <div className='d-flex align-items-center justify-content-between'>
                        <h4>{event.title}</h4>
                        <span style={{ color: 'gray' }}>{event.date}</span>
                    </div>
                    <p>{event.description}</p>
                    <>
                        <Slider images={event.items.map(img => `images/${event.dir}/thumbnail_${img}`)} title={''} date={''} />
                        <hr style={{ marginTop: 0 }} />
                    </>
                </div>
            ))}
            {selectedTab === 'media' && <div className="d-flex align-items-center flex-column gap-3">
                <div className="text-center">
                    <h5 className="m-auto mb-3" style={{maxWidth: '60%'}}>Interviu realizat la inițiativa domnului Consul Jose Vinals Ariño, publicat pe canalul youtube Timișoara en español.</h5>
                    <iframe className="youtubeIframe" src="https://www.youtube.com/embed/AF9HRZ3RIUI" title="Oana Bolog-Bleich - la artista que introduce el arte español a los niños de Timișoara" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <hr style={{ marginTop: 0, width: "100%"}} />
                <div className="text-center">
                    <h5 className="m-auto mb-3" style={{maxWidth: '60%'}}>Lansare proiectului Casa Mea din Cetate</h5>
                    <iframe className="youtubeIframe" src="https://www.youtube.com/embed/iu2k9kZlwJE" title="Proiectul, CASA MEA DIN CETATE." frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>}
        </main>
    );
}

export default Gallery;