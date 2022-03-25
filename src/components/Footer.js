import styled from "styled-components";

const currentYear = new Date().getFullYear();

const FooterFOOTER = styled.footer`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Footer = () => {
    return (
        <FooterFOOTER>
           <p>Copyright &copy; {currentYear} | Alexandra Haynes</p>
      </FooterFOOTER>
    )
}

export default Footer;