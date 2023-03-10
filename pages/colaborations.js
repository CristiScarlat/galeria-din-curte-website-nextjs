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
                <p className="mb-0">{`La Bastionul Theresia a fost inaugurat?? o expozi??ie a copiilor care au participat la atelierele de art?? plastic?? spaniol?? din ultimele luni (inspirate de nume mari ale picturii din peninsul??), ini??iate de Via Rumania Cultura ??i coordonate de artistul plastic dr. Oana Bolog-Bleich. Vernisajul a avut loc ??n prezen??a Excelen??ei Sale, Domnul Manuel Larrotcha Parada, Ambasadorul Extraordinar ??i Plenipoten??iar al Spaniei ??n Romania ??i Republica Moldova, al??turi de care s-a aflat  domnul Jose Miguel Vi??als Ari??o ??? Consulul Onorific al Spaniei la Timi??oara, cel care a sprijinit direct desf????urarea atelierelor.`}</p>
                <div className="w-100"><span>Multumim Liviu George Dumitru.</span></div>
            <iframe className="youtubeIframe" src="https://www.youtube.com/embed/UA6e1etlhmA" title="Copii pasiona??i de arta plastic?? iberic?? expun la Bastion. Au fost premia??i de Ambasadorul Spaniei" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </article>}
        </>
    )
}

export default Colaborations;