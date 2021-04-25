

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="footer p-20 mt-20 bg-yellow-100" id="skills">
            <div className="container">
                <div className="flex align-center justify-center">
                <p>Copyright &copy; {currentYear} Alexandra Haynes</p>
                </div>
            </div>
      </footer>
    )
}

export default Footer;