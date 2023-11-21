import { useState } from 'react';
import { FcHome } from 'react-icons/fc';
import NavHeader from "../components/navHeader";
import { useRouter } from 'next/router';
import styles from "../styles/About.module.css";

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
        <>
            <NavHeader onTabSelect={onTabSelect} selectedTab={selectedTab} items={navHeaderItems} contact={{email: "oanabologbleich@gmail.com", telefon: "0723673373"}}/>
            <hr />
            <section className={styles.section}>
                <img src="/images/home/4.jpg" alt="artist" className={styles.artistPicture}/>
                    <p>
                        <span className="me-2 fw-bolder text-white">Oana Bolog-Bleich</span>
                        este un artist plastic profesionist din Timișoara, doctor în Arte Vizuale si Decorative, 
                        absolventă a Facultații de Arte și Design din cadrul Universității de Vest Timișoara, 
                        cu studii doctorale și masterale în domeniul picturii din cadrul aceleiași universitați.
                        Cu o experiență de mai bine de 10 ani in domeniul educației plastice a copiilor și tinerilor 
                        care doresc sa se exprime prin arta vizuală, Oana Bolog-Bleich a organizat de-a lungul timpului diferite
                         proiecte culturale dedicate copiilor și tinerilor alături de colaborari cu Consulatul Spaniei la Timișoara, 
                         Casa de Cultură a Municipiului Timișoara si Consiliul Local Timișoara.
                        A organizat numeorase expozitii ale copiilor participanti la cursul de educatie plastică.
                        Printre altele la Centrul Multifunctional Bastion si la Galeria din Curte Timisoara.
                    </p>
            </section>
            <section className={styles.section}>
                <p>
                    <span className="me-2 fw-bolder text-white">Cursul de arte plastice condus de artist plastic dr. Oana Bolog-Bleich,</span>
                    {`care are un istoric de mai bine de 10 ani, si-a gasit locatia visată în imobilul din strada Gh.Lazar nr 4 din Timișoara, Palatul Laszlo Kralik, clădire al carei trecut și prezent oferă ambianța perfectă pentru creatie.
                    Astfel s-a născut în anul 2021 Galeria din Curte, ca o comunitate de artiști realizați sau în devenire.
                    
                    Galeria și-a propus sa intre in circuitul cultural artistic al orașului Timișoara, lăsând o amprentă personală prin stimularea și promovarea potențialului creativ al cursanților.
                    Galeria oferă spațiu expozițional într-o încăpere amenajată special și functionează permanent ca atelier de educatie plastică pentru copii și adolescenți.
                    Galeria noastră și-a dovedit deja evoluția dinamică, atrăgând mereu noi cursanți dar și prin organizarea periodică a unor evenimente în cadrul cărora au fost prezentate publicului lucrări ale micilor artiști și ale adolescenților, participanți la cursul de arte.
                    Au continuat in spațiul galeriei suita de ateliere de artă cu tematică spaniolă demarate în 2018, menite să facă cunoscute cursanților viața și activitatea artiștilor din Spania, cu sprijinul nemijlocit al Excelenței sale, domnul Consul al Spaniei la Timișoara, Jose Miguel Viñals Ariño.
                    
                    Toate aceste activități aduc tinerilor cursanți cunostințe valoroase despre arta plastică, contribuie la formarea unui public avizat, consumator de cultură și atrag atenția asupra unor repere din patrimoniul local si universal.
                    Ne propunem sa contribuim și pe viitor la formarea tinerilor artiști prin organizarea de evenimente, expoziții și implicarea in proiecte sociale și culturale.
                    Suntem încrezatori că galeria noastra va fi o gazda primitoare pentru artiștii locali, a căror creație rezonează cu scopurile pe care le-am înfățișat.`}
                </p>
            </section>
        </>
    )
}

export default About;