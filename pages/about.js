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
        <main>
            <NavHeader onTabSelect={onTabSelect} selectedTab={selectedTab} items={navHeaderItems} />
            <hr />
            <section className={styles.section}>
                <img src="images/home/4.jpg" alt="artist" className={styles.artistPicture} />
                    <p>
                        <span className="me-2 fw-bolder text-white">Oana Bolog-Bleich</span>
                        este un artist plastic profesionist din Timisoara, doctor in Arte Vizuale si Decorative, 
                        absolventa a Facultatii de Arte si Design din cadrul Universitatii de Vest Timisoara, 
                        cu studii doctorale si masterale in domeniul picturii din cadrul aceleiasi universitati.
                        Cu o experienta de mai bine de 10 ani in domeniul educatiei plastice a copiilor si tinerilor 
                        care doresc sa se exprime prin arta vizuala, Oana Bolog-Bleich a organizat de-a lungul timpului diferite
                         proiecte culturale dedicate copiilor si tinerilor alaturi de colaborari cu Consulatul Spaniei la Timisoara, 
                         Casa de Cultura a Municipiului Timisoara si Consiliul Local Timisoara.
                        A organizat numeorase expozitii ale copiilor participanti la cursul de educatie plastica.
                        Printre altele la Centrul Multifunctional Bastion si la Galeria din Curte Timisoara.
                        Activitatea profesionala a artistei curpinde urmatoarele expozitii nationale si internationale.
                    </p>
            </section>
            <section className={styles.section}>
                <p>
                    <span className="me-2 fw-bolder text-white">Cursul de arte plastice condus de artist plastic dr. Oana Bolog-Bleich</span>
                    {`care are un istoric de mai bine de 10 ani si-a gasit locatia visata in imobilul din strada Gh.Lazar nr 4 din Timisoara, cladire al carei trecut si prezent ofera ambianta perfecta pentru creatie.
                    Astfel s-a nascut in anul 2021 Galeria din Curte, ca ocomunitate de artisti realizati sau in devenire.
                    Scop:
                    Galeria si-a propus sa intre in circuitul cultural artistic al orasului Timisoara, lasand o amprenta personala prin stimularea si promovarea potentialului creativ al cursantilor.
                    Galeria ofera spatiu expozitional intr-o incapere amenajata special, si functioneaza permanent ca atelier de educatie plastica pentru copii si adolescenti.
                    Galeria noastra si-a dovedit deja evolutia dinamica, atragand mereu noi cursanti dar si prin organizarea periodica a unor evenimente in cadrul carora au fost prezentate publicului lucrari ale micilor artisti si ale adolescentilor, participanti la cursul de arte.
                    Au continuat in spatiul galeriei suita de ateliere de arta cu tematica spaniola demarate in 2018, menite sa faca cunoscute cursantilor viata si activitatea artistilor din Spania.cu sprijinul nemijlocit al Excelentei sale, domnul Consul al Spaniei la Timisoara, Jose Vinals Arino.

                    Toate aceste activitati aduc tinerilor cursanti cunostinte valoroase despre arta plastica, contribuie la formarea unui public avizat, consumator de cultura si atrag atentia asupra unor repere din patrimoniul local si universal.
                    Ne propunem sa contribuim si pe viitor la formarea tinerilor artisti prin organizarea altor evenimente, expozitii si implicarea in proiecte culturale.
                    Suntem increzatori ca galeria noastra va fi o gazda primitoare pentru artistii locali a caror creatie rezoneaza cu scopurile pe care le-am infatisat.`}
                </p>
            </section>
        </main>
    )
}

export default About;