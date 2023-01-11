import { useState } from 'react';
import { FcHome } from 'react-icons/fc';
import NavHeader from "../components/navHeader";
import { useRouter } from 'next/router';

const About = () => {
    const [selectedTab, setSelectedTab] = useState('about');
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
        }
    }
    return (
        <main>
            <NavHeader onTabSelect={onTabSelect} selectedTab={selectedTab} items={navHeaderItems} />
            <hr />
        </main>
    )
}

export default About;