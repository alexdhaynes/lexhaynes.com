import { useState } from "react"
// components
import { TeaserCard } from "@components/TeaserCard";
import AppShell from "@components/AppShell";
import SiteImage from "@components/SiteImage";
import useScrollPosition from "@hooks/useScrollPosition"; 

import portfolioData from "@data/portfolio.json";
import socialData from "@data/social.json";
import skillsData from "@data/skills.json";

//css
import styled, { css } from 'styled-components'
import { MEDIA_QUERIES } from "src/constants";
import { theme } from '@styles/globals.styles'
import { useEffect } from "react/cjs/react.production.min";

const pageStyle = css`

  ${MEDIA_QUERIES.L} {
    display: grid;
    grid-template-columns: minmax(auto, 500px) 3fr;
    grid-template-areas:
      "sidebar main";

      aside {
        position: fixed; 
      }
  }

  p, li, a, div {
    line-height: 2rem;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.black};
    &:hover, &:focus, &:active {
      
    }
  }
`

const SidebarASIDE = styled.aside`
  background: #fafafa;
  grid-area: sidebar;
  padding: 80px;
  height: 100%;

  h2 {
    font-weight: bold;
    margin-top: 0;
  }
`

const MainAreaDIV = styled.div`
  grid-area: main;
  padding: 80px 120px;
  
`

const TextBlock = styled.article`
  max-width: 680px;
  line-height: 1.35;
`

const Section = styled.section`
  position:relative;
  margin: 0 auto 6rem auto;
`;

const SectionHeader = styled.h2`
 /* section header */
 font-family: ${theme.fonts.serif};
 margin-bottom: 2.15rem;
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
  display: none;
  ${MEDIA_QUERIES.L} {
    display: block;
    position: fixed;
    bottom: 60px;
    right: 120px;
    opacity: 0.35;
  }
`;

const Home = () => {

  useEffect(() => {
    console.log("hi");
  })

  return (
    <AppShell title="Alex Haynes: Front-End Developer">

      <div css={pageStyle}>
        
        {/* SIDEBAR SECTION */}
        <SidebarASIDE>
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

              <p>Front End Dev @ <a href="https://www.helpscout.com" className="underline">Help Scout</a></p>
              <p>📍 Ithaca, NY</p>
           

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
                <div key={`list-${node.title}`}>
                  <h3>{node.title}</h3>
                  <ul>
                  {node.list.map(item => (
                      <p key={`skill-${node.label}`}>{item.label}</p>
                  ))} 
                  </ul>
                </div>
              ))}
          </Section>

        </MainAreaDIV>

        <DelightDIV>
          <p>just focus on the breath.</p>
        </DelightDIV>

      </div>
    </AppShell>
  );
};

export default Home;
