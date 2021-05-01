
import Head from 'next/head'
import NavBar from '@components/NavBar'
import Footer from '@components/Footer'
import ScrollToTop from '@components/ScrollToTop'
import '@styles/AppShell.module.css'
const GA_TRACKING_ID = "UA-40660950-4"

const AppShell = ({title, children}) => {
    return (
        <main className="bg-yellow-100">
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Sen:wght@400&display=swap" rel="stylesheet" />        
             
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
                `
                    }}
                />
                
            </Head>

            <NavBar />
          
            {children}

            <ScrollToTop />

            <Footer />
        </main>
    )
}

export default AppShell;