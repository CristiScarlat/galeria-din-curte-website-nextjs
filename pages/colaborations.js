import { useState } from "react";
import data from "../data/data.json";
import Slider from "../components/slider";
import { useRouter } from 'next/router';
import { FcHome, FcGallery, FcCalendar } from 'react-icons/fc';
import NavHeader from "../components/navHeader";

const Colaborations = () => {
    const [selectedTab, setSelectedTab] = useState('expo');
    const router = useRouter();

    const navHeaderItems = [
        {
            label: 'Acasa',
            path: '/',
            icon: <FcHome size={40} />
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
    return(
        <main>
            <NavHeader onTabSelect={onTabSelect} selectedTab={selectedTab} items={navHeaderItems}/>
            {data.colaborations.map(colab => (
                <div key={colab.title} style={{ margin: 'auto'}}>
                    <hr style={{marginTop: 0}}/>
                    <h4>{colab.title}</h4>
                    <p style={{color: 'gray'}}>{colab.description}</p>
                    {colab.items.map(item => (
                        <>
                        <hr style={{marginTop: 0}}/>
                        <Slider images={item.images.map(img => `images/${item.dir}/${img}`)} title={item.title} date={item.date}/> 
                        </>
                    ))}
                </div>
            ))}
        </main>
    )
}

export default Colaborations;