
import navData from '@data/nav.json'
import Link from 'next/link'

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="footer py-6 bg-yellow-100" id="skills">
            <div className="container w-11/12 mx-auto mb-10">
      
                <div className="mx-auto flex flex-wrap w-full justify-center md:justify-between md:w-2/3 ">
                {
                    navData.map((item, i) => (
                        <Link key={`footerNav-${i}`}  href={item.href} title={item.displayName}>
                            <a className="underline flex-none hover:text-gray-500 text-semibold mr-2 md:mr-0">
                                {item.displayName}
                            </a>
                        </Link>
                    ))
                }
                </div>

                <div className="flex align-center justify-center mt-6">
                    <p>Copyright &copy; {currentYear} Alexandra Haynes</p>
                </div>
                
            </div>
           
      </footer>
    )
}

export default Footer;