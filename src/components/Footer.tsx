import styled from "styled-components";

const currentYear = new Date().getFullYear();
import { theme } from '../styles/globals.styles'


const FooterFOOTER = styled.footer`
  display: flex;
  justify-content: center;
  padding: 20px;
  color: ${theme.colors.black};
`;

const Footer = () => {
    return (
        <FooterFOOTER>
           <p>&copy; {currentYear}</p>
      </FooterFOOTER>
    )
}

export default Footer;