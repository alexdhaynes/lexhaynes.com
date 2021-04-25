
import Head from 'next/head'

import Footer from '@components/Footer'
import '@styles/AppShell.module.css'

const AppShell = ({title, children}) => {
    return (
        <main className="bg-yellow-100">
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
          
            {children}

            <Footer />
        </main>
    )
}

export default AppShell;