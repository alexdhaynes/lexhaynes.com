const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="footer py-2 bg-yellow-100">
            <div className="container w-11/12 mx-auto mb-10">
                <div className="flex align-center justify-center">
                    <p>Copyright &copy; {currentYear} | Alexandra Haynes</p>
                </div>
                
            </div>
      </footer>
    )
}

export default Footer;