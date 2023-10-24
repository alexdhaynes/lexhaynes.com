import styled, { css } from "styled-components";
import { useState } from "react";
import Image from "next/image";

// components
import { TeaserCard } from "../components/TeaserCard";
import AppShell from "../components/AppShell";
import useScrollPosition from "../hooks/useScrollPosition";

import portfolioData from "../data/portfolio.json";
import socialData from "../data/social.json";

//css
import { MEDIA_QUERIES } from "../constants";
import { theme } from "../styles/globals.styles";
import { useEffect } from "react";

const defaultTextLinkStyle = css`
  text-decoration: underline;
  color: ${theme.colors.darkGrey};
  position: relative;
  &:hover,
  &:focus,
  &:active {
    color: ${theme.colors.accentDark};
  }
`;

const PageStyle = styled.div`
  color: #222;

  ${MEDIA_QUERIES.XL} {
    display: grid;
    grid-template-columns: 560px auto;
    grid-template-areas: "sidebar main";
  }

  p,
  li,
  a,
  div {
    line-height: 2rem;
  }

  p a {
    ${defaultTextLinkStyle}
  }
`;

const SidebarASIDE = styled.aside`
  background: ${theme.colors.accent};
  grid-area: sidebar;
  padding: 60px 80px;
  height: 100%;

  .sidebar-content {
    h1 {
      font-size: 3rem;
      line-height: 1rem;
      margin-bottom: 0;
    }
    h2, h3, h4 {
      font-weight: 500;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    li {
      list-style-type: none;
      a {
        ${defaultTextLinkStyle}
      }
    }
  }
`;

const MainAreaDIV = styled.div`
  grid-area: main;
  overflow-x: hidden;
  padding: 60px 80px;

  ${MEDIA_QUERIES.XL} {
    padding-left: 120px;
  }
`;

const TextBlock = styled.article`
  max-width: 680px;
  width: 100%;
  line-height: 1.35;
`;

const Section = styled.section`
  position: relative;
  margin: 0 auto 80px auto;
`;

const SectionHeader = styled.h2`
  /* section header */
  font-family: ${theme.fonts.serif};
  padding-bottom: 2rem;
  font-size: 2.5rem;
  line-height: 3rem;
`;

const ProjectGridDIV = styled.div``;

const ProfilePicDIV = styled.div`
  width: 150px;
  height: 150px;
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
  ${(props) => {
    if (props.scrolled > 20) {
      return css`
        background: rgb(255, 255, 255);
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 1) 48%,
          rgba(255, 255, 255, 0) 100%
        );
      `;
    }
  }}
  width: 100%;
  position: sticky;
  bottom: 0;
  padding: 0.25rem;
  text-align: center;
  color: ${theme.colors.darkGrey};
  p {
    opacity: ${(props) => props.scrolled / 100};
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

const Home = () => {
  const scrollPos = useScrollPosition();
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const scrollHeight = document.body.scrollHeight;
    setScrolled(Math.floor((scrollPos / scrollHeight) * 100));
  }, [scrollPos]);

  return (
    <AppShell title="Alex Haynes: Front-End Developer">
      <PageStyle>
        {/* SIDEBAR SECTION */}
        <SidebarASIDE>
          <div className="sidebar-content">
            <h1>Alex Haynes</h1>
            <h4>Math student && Front-end Developer</h4>

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
                  style={{ paddingRight: "16px" }}
                  href={item.href}
                  title={item.name}
                  target="_blank"
                  rel="noreferrer">
                  {item.name}
                </a>
              ))}
            </p>

            <ul>
              <li>
                <strong>Mathematics student</strong> at Indiana University East
              </li>
            </ul>
            <p>📍 Ithaca, NY</p>
          </div>
        </SidebarASIDE>

        <MainAreaDIV>
          {/* INTRO SECTION */}
          <Section bgInner="white" id="intro">
            <SectionHeader>I build cool stuff for screens</SectionHeader>

            <TextBlock>
              <p>
                I’m a creative Front-end Developer who builds delightful
                experiences for the web. After over a decade of experience in front-end web development, I have returned to school to study math full-time. 
              </p>
              <p>
              It feels very nice to take a step away from the Wheel of Capitalism, if only for a little while.
              </p>

              <h3>My studies</h3>
              <p>
                I'm currently pursuing a B.S. in Mathematics! My first B.A. was
                in French Literature, during which time I took exactly 0 math classes. After years of math aversion, something flipped in my brain 🧠 💡. Now I spend all my time doing math and I love it! <br />∬ 🥰
              </p>

              <h3>Mathematical awakening 🤯</h3>
              <p>
                After a decade of front-end tool-hopping, learning the math which underlines so much of Computer Science is blowing my mind.
              </p>

              <h3>Front-end street cred</h3>
              <p>I have been a front-end web developer for over a decade, and started building rudimentary HTML and JavaScript™️ websites in the 7th grade (2003).</p>
              

              <h3>At work</h3>
              <ul>
                <li>Maintain, improve, and document codebases</li>
                <li>
                  Collaborate with diverse teams to build web apps, websites, and content-management solutions.              
                   </li>
                <li>
                  Write code that future developers (and future me) will
                  understand
                </li>
                <li>Think a lot about naming things</li>
                <li>Iterate!</li>
              </ul>

         

              <h3> Outside of work</h3>
              <p>
                I like to hike, explore the forests and gorges 🌲, play banjo
                🪕, make stuff out of wood 🔨, draw, read everything there is to read about whatever my latest intellectual fixation is, learn new things, and work
                on my meditation practice. I am <strong>obsessed</strong> with tea (particularly wild mountain oolongs) 🍵 and tea brewing (one clay pot, one gaiwan, two kyusus!).
              </p>

              <h3> What I care about</h3>
              <p>
                I’m passionate about living in a way that does no harm to beings
                or the environment. I care deeply about living in harmony and
                communion with the land and local ecosystems. My guiding forces are compassion and harmlessness to all sentient beings.
              </p>
            </TextBlock>
          </Section>

          {/* PORTFOLIO SECTION */}
          <Section id="portfolio">
            <SectionHeader>Featured work</SectionHeader>
            <ProjectGridDIV>
              {portfolioData.map((node) => {
                return (
                  <TeaserCard
                    key={`Project-${node.name}`}
                    name={node.name}
                    description={node.description}
                    stack={node.stack}
                    href={node.href}
                    image={node.image}
                    tags={node.tags}
                  />
                );
              })}
            </ProjectGridDIV>
          </Section>
        </MainAreaDIV>

        <DelightDIV scrolled={scrolled}>
          <p>focus on the breath.</p>
        </DelightDIV>
      </PageStyle>
    </AppShell>
  );
};

export default Home;
