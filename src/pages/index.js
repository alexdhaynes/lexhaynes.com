import { useState } from "react"
import Image from 'next/image'

// components
import { TeaserCard } from "../components/TeaserCard";
import AppShell from "../components/AppShell";
import useScrollPosition from "../hooks/useScrollPosition"; 

import portfolioData from "../data/portfolio.json";
import socialData from "../data/social.json";

//css
import styled, { css } from 'styled-components'
import { MEDIA_QUERIES } from "../constants";
import { theme } from '../styles/globals.styles'
import { useEffect } from "react";

const defaultTextLinkStyle = css`
  text-decoration: underline;
    color: ${theme.colors.darkGrey};
    position: relative;
    &:hover, &:focus, &:active {
      color: ${theme.colors.accentDark};
    }
`

const pageStyle = css`
  color: #222;

  ${MEDIA_QUERIES.XL} {
    display: grid;
    grid-template-columns: minmax(auto, 500px) 3fr;
    grid-template-areas:
      "sidebar main";
  }

  @media (min-width: 1380px) {
    aside {
        position: fixed; 
      }
  }

  p, li, a, div {
    line-height: 2rem;
  }

  p a {
      ${defaultTextLinkStyle}
    }
`

const SidebarASIDE = styled.aside`
  background: ${theme.colors.accent};
  grid-area: sidebar;
  padding: 30px;
  height: 100%;

  ${MEDIA_QUERIES.XL} {
    padding: 67px 80px 0 80px;
  }

  .sidebar-content {
    h1 {
      font-size: 4rem;
      line-height: 4.25rem;
      margin-bottom: 0;
    }
    h2 {
      font-weight: 500;
    }
  }
`

const MainAreaDIV = styled.div`
  grid-area: main;
  overflow-x: hidden;

  padding: 40px;

  ul {
    padding-left: 1rem;
  }

  ${MEDIA_QUERIES.XL} {
    padding: 90px 0 0 6vw;
    ul {
      padding-left: 2rem;
    }
  }
`

const TextBlock = styled.article`
  max-width: 680px;
  width: 100%;
  line-height: 1.35;
`

const Section = styled.section`
  position:relative;
  margin: 0 auto 6rem auto;
`;

const SectionHeader = styled.h2`
 /* section header */
 font-family: ${theme.fonts.serif};
 padding-bottom: 2rem;
 font-size: 2.5rem;
 line-height: 3rem;

`;

const ProjectGridDIV = styled.div`
  
`;

const ProfilePicDIV = styled.div`
  width:150px;
  height:150px;
  margin: 20px 0 30px 0;
  position: relative;
  img {
    border-radius: 50%;
    object-fit: cover;
    width: inherit;
    height: inherit;
  }
`;

const DelightDIV = styled.div`
  ${props => {
    if (props.scrolled > 20) {
      return css`
        background: rgb(255,255,255);
        background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 48%, rgba(255,255,255,0) 100%);
      `
    }
  }}
  width: 100%;
  position: sticky;
  bottom: 0;
  padding: 0.25rem;
  text-align: center;
  color: ${theme.colors.darkGrey};
  p {
    opacity: ${props => props.scrolled / 100};
  }

  ${MEDIA_QUERIES.XL} {
    background: none;
    position: fixed;
    width: 20%;
    bottom: 20px;
    left: 80px;
    padding-left: 0;
    text-align: left;
  }
@media (min-width: 1600px) {
   right: 40px;
   padding-right: 0;
   text-align: right;
   left: auto;
  }
  
`;

const SkillsDIV = styled.div`
  margin-bottom: 40px;
  background: ${theme.colors.accent};
  padding: 10px 20px 20px 20px;
  margin-bottom: 40px;
  display: block;
  border-radius: 8px;

  ${MEDIA_QUERIES.XL} {
    width: 90%;
    max-width:700px;
  }

  h4 {
    font-size: 1.5rem;
    line-height: 0;
    font-weight: 700;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: inline;

    ${MEDIA_QUERIES.L} {
      li {
        display: inline;
        
        &:after {
          color: ${theme.colors.accentDark};
          content: "•";
          padding-left: 1rem;
        }
        &:last-of-type {
          &:after {
            content: '';
          }
          }/* end last-of-type */
      }
    }
   
    li {
      padding-right: 1.25rem;
      
    }
  }
`;



const Home = () => {
  const scrollPos = useScrollPosition();
  const [scrolled, setScrolled ] = useState(0);
  
  useEffect(() => {
    const scrollHeight = document.body.scrollHeight;
    setScrolled(
      Math.floor(scrollPos / scrollHeight * 100)
    )
  }, [scrollPos])


  return (
    <AppShell title="Alex Haynes: Front-End Developer">

      <div css={pageStyle}>
        
        {/* SIDEBAR SECTION */}
        <SidebarASIDE>
          <div className="sidebar-content">
            <h1>
                Alex Haynes
              </h1>
              <h2>Front End Developer</h2>
                      
              <ProfilePicDIV>
                <Image
                  src="/images/jpgs/profile.jpg"
                  alt="Alexandra Haynes: Profile Picture"
                  width={200} 
                  height={161}
                />
              </ProfilePicDIV>
              <p>
                {socialData.map((item, i) => (
                  <a
                    key={`social-${i}`}
                    className="underline hover:no-underline"
                    style={{paddingRight: '16px'}}
                    href={item.href}
                    title={item.name}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.name}
                  </a>
                ))}
              </p>
       

              <p>Front End Dev @ <a href="https://www.helpscout.com" className="underline">Help Scout</a></p>
              <p>📍 Ithaca, NY</p>
          </div>
              
           

        </SidebarASIDE>
        
        <MainAreaDIV>
          {/* INTRO SECTION */}
          <Section bgInner="white" id="intro">
            <SectionHeader>I build cool stuff for screens</SectionHeader>

            <TextBlock>
              <p>
                I’m a creative Front-End Developer who builds delightful experiences for the web.
              </p>

              <h3>At work</h3>
              <ul>
                <li>Maintain, improve, and document codebases</li>
                <li>Collaborate with design and marketing teams to build apps, components, landing pages, CMS features, and websites</li>
                <li>Write code that future developers (and future me) will understand</li>
                <li>Think a lot about naming things</li>
                <li>Iterate!</li>
            </ul>

            <h3> Outside of work</h3>
              <p>
                I like to hike, explore the forests and gorges 🌲, play banjo 🪕, bake sourdough from locally milled and grown wheat 🥖, make stuff out of wood 🔨, draw, learn new things, and work on my meditation practice. I enjoy tea 🍵 and tea brewing. 
              </p>

              <h3> What I care about</h3>
              <p>
                  I’m passionate about living in a way that does no harm to beings or the environment. I care deeply about living in harmony and communion with the land and local ecosystems.
                </p>
            </TextBlock>
          </Section>
          
          {/* PORTFOLIO SECTION */}
          <Section id="portfolio">
            <SectionHeader>Featured work</SectionHeader>
            <ProjectGridDIV>
              {portfolioData.map(node => {
                return <TeaserCard
                      key={`Project-${node.name}`}
                      name={node.name}
                      description={node.description}
                      stack={node.stack}
                      href={node.href}
                      image={node.image}
                      tags={node.tags}
                      case_study_link={node.case_study_link || null}
                    />
                })}
              </ProjectGridDIV>
              
          </Section>

        </MainAreaDIV>

        <DelightDIV scrolled={scrolled}>
          <p>focus on the breath.</p>
        </DelightDIV>

      </div>
    </AppShell>
  );
};

export default Home;
