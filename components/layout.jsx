import Head from "next/head";
import CookieConsent from "react-cookie-consent";


export default function Layout({ children }) {

  const cookieConstentStyle = {
    bottom: "40px",
    alignItems: "baseline",
    background: "rgb(53, 53, 53)",
    color: "white",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    left: "0px",
    position: "fixed",
    width: "100%",
    zIndex: 10000,
    padding: "0.5rem",
  };
  
  const cookieConstentButtonStyle = {
    background: "rgb(255, 212, 45)",
    border: "0px",
    borderRadius: "0px",
    color: "black",
    cursor: "pointer",
    flex: "0 0 auto",
    padding: "5px 10px",
  };

  return (
    <>
      <Head>
        <title>Galeria din curte</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://galeriadincurte.ro/" />

        {/*HTML Meta Tags*/}
        <meta
          name="description"
          content="Oana Bolog-Bleich este un artist plastic profesionist din Timisoara, doctor in Arte Vizuale si Decorative, absolventa a Facultatii de Arte si Design din cadrul Universitatii de Vest Timisoara, cu studii doctorale si masterale in domeniul picturii din cadrul aceleiasi universitati. "
        />
        <meta name="keywords" content="art, artă, galerie de artă, paintings, pictură, cursuri de artă, Oana Bolog Bleigh"></meta>
        {/*Facebook Meta Tags*/}
        <meta property="og:url" content="https://galeriadincurte.ro/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Galeria din curte" />
        <meta
          property="og:description"
          content="Oana Bolog-Bleich este un artist plastic profesionist din Timisoara, doctor in Arte Vizuale si Decorative, absolventa a Facultatii de Arte si Design din cadrul Universitatii de Vest Timisoara, cu studii doctorale si masterale in domeniul picturii din cadrul aceleiasi universitati."
        />
        <meta property="og:image" content="images/home/4.jpg" />
        {/*Twitter Meta Tags*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="galeriadincurte.ro" />
        <meta
          property="twitter:url"
          content="https://galeriadincurte.ro"
        />
        <meta name="twitter:title" content="Galeria din curte" />
        <meta
          name="twitter:description"
          content="Oana Bolog-Bleicheste un artist plastic profesionist din Timisoara, doctor in Arte Vizuale si Decorative, absolventa a Facultatii de Arte si Design din cadrul Universitatii de Vest Timisoara, cu studii doctorale si masterale in domeniul picturii din cadrul aceleiasi universitati."
        />
        <meta name="twitter:image" content="images/home/4.jpg" />
        {/* <meta name="google-site-verification" content="EODJlfgOwTLoKHZY01TW31jLhhvT5GpyRVDvEb1Y5OQ" /> */}
      </Head>
      <main>{children}</main>

      <CookieConsent
        location=""
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gdpr-google-analytics"
        disableStyles={false}
        style={cookieConstentStyle}
        buttonStyle={cookieConstentButtonStyle}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
      {/* <Footer /> */}
    </>
  );
}
