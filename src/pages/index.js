import { useState } from "react"
// components
import { DescriptiveBlock } from "@components/StatementBlock";
import { LabelledBlock } from "@components/StatementBlock";
import { ListCard } from "@components/ListCard";
import { TeaserCard } from "@components/TeaserCard";
import AppShell from "@components/AppShell";
import Button from "@components/Button";
import Icon from "@components/Icon";
import styles from "@styles/Index.module.css";

import portfolioData from "@data/portfolio.json";
import socialData from "@data/social.json";
import skillsData from "@data/skills.json";

//css
import styled, { css } from 'styled-components'

const sectionStyles = css`
  margin: 80px auto;
  position:relative;
`
export const SectionHero = styled.section`
  ${sectionStyles}
  border:solid blue 1px;
`;

export const Section = styled.section`
   ${sectionStyles}
   border:solid red 1px;
`;

export const SectionHeader = styled.h2`
  color: red;
`;

export const ProfilePicDIV = styled.div`
  width:150px;
  height:150px;
  border:dashed green 3px;
  position: relative;
`;

const FEATURED_PROJECTS_LENGTH = 3;

const Home = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <AppShell title="Alex Haynes: Front-End Developer">
      {/* HERO SECTION */}
      <SectionHero>
            <h1>
              Front-End Developer @<a href="https://www.helpscout.com" className="underline">Help Scout</a>
            </h1>
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
            <p>Ithaca, NY for now!</p>
              
            <ProfilePicDIV>
              <Icon
                src="/images/jpgs/profile.jpg"
                alt="Alexandra Haynes: Profile Picture"
              />
            </ProfilePicDIV>
          
      </SectionHero>

      {/* INTRO SECTION */}
      <Section bgInner="white" id="intro">
        <SectionHeader>Building cool stuff for screens</SectionHeader>

        <div className={`w-11/12 mx-auto`}>
          <p>
            I’m a highly creative Front-End Developer who builds delightful experiences for the web. I build interactions, components, landing pages, and websites that delight users. I work closely with stakeholders to implement thoughtful UI, and componentize and document code for easy reusability among developers and codebases.
          </p>
        </div>
      </Section>
      
      {/* PORTFOLIO SECTION */}
      <Section id="portfolio">
        <SectionHeader>Featured projects</SectionHeader>
        <div className="md:grid md:grid-cols-2 md:gap-4 xl:grid-cols-3">
          {portfolioData.slice(0, FEATURED_PROJECTS_LENGTH).map(node => {
             return <TeaserCard
                  key={`Project-${node.name}`}
                  name={node.name}
                  href={node.href}
                  image={node.image}
                  tags={node.tags}
                  case_study_link={node.case_study_link || null}
                />
            })}
            </div>
          {
            showAllProjects && (
              <>
              <h2>Interactive ad demos (Requires adblocker to be off to view)</h2>
              <div className="md:grid md:grid-cols-2 md:gap-4 xl:grid-cols-3">
                {
                  portfolioData.slice(FEATURED_PROJECTS_LENGTH, portfolioData.length).map(node => ( 
                  <TeaserCard
                    key={`Project-${node.name}`}
                    name={node.name}
                    href={node.href}
                    image={node.image}
                    tags={node.tags}
                    case_study_link={node.case_study_link || null}
                  />
                  ))
                }
              </div>
              </>
            )
          }

          { showAllProjects === false &&
            <Button onClick={() => {
              setShowAllProjects(true);
            }}>See All Projects</Button>
          }
          
      </Section>

      {/* SKILLS SECTION */}
      <Section id="skills">
        <SectionHeader>My toolkit</SectionHeader>
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

      {/* ABOUT SECTION */}
      <Section id="about">
        <SectionHeader>What I care about</SectionHeader>
          <p>
            I’m passionate about living in a way that does no harm to living
            beings, and does minimal or no harm to the environment.
          </p>
      </Section>
    </AppShell>
  );
};

export default Home;
