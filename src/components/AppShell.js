import styled from "styled-components";
import Head from "next/head";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

const GA_TRACKING_ID = "UA-40660950-4";

const AppShell = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Alex Haynes: Front End Developer" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Front-End Developer profile of Alexandra Haynes. Personal portfolio site with latest projects."
        />
        <meta property="og:url" content="https://lexhaynes.com" />
        <meta
          property="og:image"
          content="https://lexhaynes.com/images/meta/meta.png"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Sen:wght@400&display=swap"
          rel="stylesheet"
        />

        {/* Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}');
                `,
          }}
        />
      </Head>

{/*       <NavBar />
 */}      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default AppShell;
