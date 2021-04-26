
import Head from 'next/head'

import Footer from '@components/Footer'
import '@styles/AppShell.module.css'

const AppShell = ({title, children}) => {
    return (
        <main className="bg-yellow-100">
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Sen:wght@400;700&display=swap" rel="stylesheet" />        
            </Head>
          
            {children}

            <Footer />
        </main>
    )
}

export default AppShell;