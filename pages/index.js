import Head from 'next/head';
import Link from 'next/link';
import HomeLink from '../components/homeLink';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Galeria din curte</title>
        <meta name="description" content="The oficial website of art gallery Galeria din curte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className="ms-3 me-3 d-flex justify-content-center align-items-center flex-wrap gap-3">
          <Link href="/gallery" legacyBehavior passHref>
            <HomeLink style={{
              backgroundImage: 'url(/images/1.jpg)',
              backgroundRepeat: 'no-repeat, repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>Galeria din Curte</HomeLink>
          </Link>
          <HomeLink style={{
            backgroundImage: 'url(/images/2.jpg)',
            backgroundRepeat: 'no-repeat, repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>Ateliere de artă plastică pentru copii și adolescenți</HomeLink>
          <HomeLink style={{
            backgroundImage: 'url(/images/3.jpg)',
            backgroundRepeat: 'no-repeat, repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>Colaborări</HomeLink>
          <HomeLink style={{
            backgroundImage: 'url(/images/5.jpg)',
            backgroundRepeat: 'no-repeat, repeat',
            backgroundSize: 'auto',
            backgroundPosition: 'center'
          }}>Despre noi</HomeLink>
        </section>
      </main>
    </div>
  )
}
