
import navData from '@data/nav.json'
import Link from 'next/link'

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="footer p-20 mt-20 bg-yellow-100" id="skills">
            <div className="container">
                <div className="flex align-center justify-center">
                    <p>Copyright &copy; {currentYear} Alexandra Haynes</p>
                </div>
                <div className="mx-auto flex justify-between w-2/3 mt-6">
                {
                    navData.map((item, i) => (
                        <Link key={`footerNav-${i}`}  href={item.href} title={item.displayName}>
                            <a className="underline hover:text-gray-500 text-semibold mr-1">
                                {item.displayName}
                            </a>
                        </Link>
                    ))
                }
                </div>
                
            </div>
           
      </footer>
    )
}

export default Footer;