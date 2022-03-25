import { useState } from "react"
// components
import { TeaserCard } from "../components/TeaserCard";
import AppShell from "../components/AppShell";
import SiteImage from "../components/SiteImage";
import useScrollPosition from "../hooks/useScrollPosition"; 

import portfolioData from "../data/portfolio.json";
import socialData from "../data/social.json";
import skillsData from "../data/skills.json";

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
      color: ${theme.colors.lightGrey};
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
  background: #fafafa;
  grid-area: sidebar;
  padding: 80px;
  height: 100%;

  .sidebar-content {
    h1 {
    font-size: 4rem;
    line-height: 4.25rem;
    }
    h2 {
      font-weight: 500;
    }

    img {
      border-radius: 6px;
    }

  }
`

const MainAreaDIV = styled.div`
  grid-area: main;
  overflow-x: hidden;

  padding: 4rem;

  ${MEDIA_QUERIES.XL} {
    padding: 90px 0 0 90px;
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
 line-height: 2.75rem;

`;

const ProjectGridDIV = styled.div`
  
`;

const ProfilePicDIV = styled.div`
  width:150px;
  height:150px;
  margin: 20px 0;
  position: relative;
`;

const DelightDIV = styled.div`
  width: 16%;
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: ${theme.colors.darkGrey};
  opacity: ${props => props.scrolled / 100};

  ${MEDIA_QUERIES.XL} {
    width: 250px;
    bottom: 60px;
    right: 60px;
  }
  
`;

const SkillsDIV = styled.div`
  margin-bottom: 40px;
  h4 {
    font-size: 1.5rem;
    line-height: 0;
    font-weight: 700;
  }
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    list-style: none;

    ${MEDIA_QUERIES.L} {
      flex-direction: row;

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
                <SiteImage
                  src="/images/jpgs/profile.jpg"
                  alt="Alexandra Haynes: Profile Picture"
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

              <h3>At Work</h3>
              <ul>
                <li>Maintain, improve, and document codebases</li>
                <li>Explain technical things to non-technical people (nicely)</li>
                <li>Build components, landing pages, and websites from specs</li>
                <li>Write code that future developers (and future me) will understand</li>
                <li>Think a lot about naming things</li>
                <li>Iterate!</li>
            </ul>

            <h3> Outside of Work</h3>
              <p>
                I like to hike, explore the forest 🌲, make stuff out of wood, draw, learn new things, and work on my meditation practice. I enjoy tea 🍵 and tea brewing. 
              </p>
            </TextBlock>
          </Section>

            {/* ABOUT SECTION */}
            <Section>
            <SectionHeader>What I care about</SectionHeader>
              <TextBlock>
                <p>
                  I’m passionate about living in a way that does no harm to living
                  beings, and no harm to the environment.
                </p>
              </TextBlock>
          </Section>
          
          {/* PORTFOLIO SECTION */}
          <Section id="portfolio">
            <SectionHeader>Featured projects</SectionHeader>
            <ProjectGridDIV>
              {portfolioData.map(node => {
                return <TeaserCard
                      key={`Project-${node.name}`}
                      name={node.name}
                      stack={node.stack}
                      href={node.href}
                      image={node.image}
                      tags={node.tags}
                      case_study_link={node.case_study_link || null}
                    />
                })}
              </ProjectGridDIV>
              
          </Section>

          {/* SKILLS SECTION */}
          <Section id="skills">
            <SectionHeader>My daily toolkit</SectionHeader>
              {skillsData.map(node => (
                <SkillsDIV key={`list-${node.title}`}>
                  <h4>{node.title}</h4>
                  <ul>
                  {node.list.map((item, i) => (
                      <li key={`skill-${i}`}>{item.label}</li>
                  ))} 
                  </ul>
                </SkillsDIV>
              ))}
          </Section>

        </MainAreaDIV>

        <DelightDIV scrolled={scrolled}>
          <p>just focus on the breath.</p>
        </DelightDIV>

      </div>
    </AppShell>
  );
};

export default Home;
