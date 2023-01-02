import { useState } from 'react';
import Slider from '../components/slider';
import data from '../data/data.json';
import styles from "../styles/Gallery.module.css";
import { useRouter } from 'next/router';
import NavHeader from '../components/navHeader';
import { FcHome, FcGallery, FcCalendar } from 'react-icons/fc';

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
        }
    }

    return (
        <main>
            <NavHeader onTabSelect={onTabSelect} selectedTab={selectedTab} items={navHeaderItems}/>
            {selectedTab === 'expo' && data.gallery.map(expo => (
                <section key={expo.title} style={{margin: 'auto'}}>
                    <hr style={{ marginTop: 0 }} />
                    <Slider images={expo.images.map(img => `images/${expo.dir}/${img}`)} title={expo.title} date={expo.date} />
                </section>
            ))}
            {selectedTab === 'events' && <div>events</div>}
        </main>
    );
}

export default Gallery;