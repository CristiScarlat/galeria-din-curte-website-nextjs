import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/layout';

export const getServerSideProps = async ({
  res,
}) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  return {
    props: {
      time: new Date().toISOString(),
    },
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
