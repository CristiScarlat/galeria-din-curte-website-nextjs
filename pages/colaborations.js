import { useState } from "react";
import data from "../data/data.json";
import Slider from "../components/slider";
import { useRouter } from 'next/router';
import { FcHome, FcFilmReel, FcAbout } from 'react-icons/fc';
import NavHeader from "../components/navHeader";

const Colaborations = () => {
    const [selectedTab, setSelectedTab] = useState('about');
    const router = useRouter();

    const navHeaderItems = [
        {
            label: 'Acasa',
            path: '/',
            icon: <FcHome size={40} />
        },
        {
            label: 'Colaborari',
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
            case 'about':
                setSelectedTab('about');
                break;
            case 'media':
                setSelectedTab('media');
                break;
        }
    }

    return(
        <>
            <NavHeader onTabSelect={onTabSelect} selectedTab={selectedTab} items={navHeaderItems}/>
            <hr/>
            {selectedTab === "about" && data.colaborations.map(colab => (
                <div key={colab.title} style={{ margin: 'auto'}}>
                    <hr style={{marginTop: 0}}/>
                    <h4>{colab.title}</h4>
                    <p>{colab.description}</p>
                    {colab.items.map(item => (
                        <>
                        <hr style={{marginTop: 0}}/>
                        <Slider images={item.images.map(img => `/images/${item.dir}/thumbnail_${img}`)} title={item.title} date={item.date}/> 
                        </>
                    ))}
                </div>
            ))}
            {selectedTab === "media" && <article className="d-flex align-items-center flex-column gap-3">
                <div className="w-100"><span>2019</span></div>
                <p className="mb-0">{`La Bastionul Theresia a fost inaugurată o expoziție a copiilor care au participat la atelierele de artă plastică spaniolă din ultimele luni (inspirate de nume mari ale picturii din peninsulă), inițiate de Via Rumania Cultura și coordonate de artistul plastic dr. Oana Bolog-Bleich. Vernisajul a avut loc în prezența Excelenței Sale, Domnul Manuel Larrotcha Parada, Ambasadorul Extraordinar și Plenipotențiar al Spaniei în Romania și Republica Moldova, alături de care s-a aflat  domnul Jose Miguel Viñals Ariño – Consulul Onorific al Spaniei la Timișoara, cel care a sprijinit direct desfășurarea atelierelor.`}</p>
                <div className="w-100"><span>Multumim Liviu George Dumitru.</span></div>
            <iframe className="youtubeIframe" src="https://www.youtube.com/embed/UA6e1etlhmA" title="Copii pasionați de arta plastică iberică expun la Bastion. Au fost premiați de Ambasadorul Spaniei" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </article>}
        </>
    )
}

export default Colaborations;