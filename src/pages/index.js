import AppShell from "@components/AppShell";
import Link from "next/link";
import { Section, SectionHero } from "@components/Section";
import { LabelledBlock, DescriptiveBlock } from "@components/StatementBlock";
import SectionHeader from "@components/SectionHeader";
import { ListCard } from "@components/ListCard";
import { TeaserCard } from "@components/TeaserCard";
import Button from "@components/Button";
import Icon from "@components/Icon";
import styles from "@styles/Index.module.css";

import portfolioData from "@data/portfolio-all.json";
import socialData from "@data/social.json";
import skillsData from "@data/skills.json";
import expertiseData from "@data/expertise.json";
import introData from "@data/intro.json";
import interestsData from "@data/interests.json";

const Home = () => {
  return (
    <AppShell title="Alex Haynes: Web Developer">
      <SectionHero>
        <div className="w-11/12 mx-auto flex flex-col items-center sm:flex-row justify-around">
          <div className="space-y-6">
            <h1 className="font-bold text-3xl sm:text-5xl section-header">
              Hi, I'm Alex
            </h1>
            <h2 className="font-medium text-xl" style={{margin: '20px 0'}}>
              Front-End Developer @ <a href="https://www.helpscout.com" className="underline">Help Scout</a>
            </h2>
            <div className="font-medium text-l space-y-2 flex flex-col justify-center">
              <div>
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
              </div>
              <p>Ithaca, NY for now!</p>
            </div>
          </div>

          <div className="mt-6 sm:mt-0 relative w-36 h-36 overflow-hidden rounded-full" style={{ border: "solid white 4px"}}>
            <Icon
              src="/images/jpgs/profile.jpg"
              alt="Alexandra Haynes: Profile Picture"
            />
          </div>
        </div>
      </SectionHero>

      <Section bgInner="white" id="intro">
        <SectionHeader>Building cool stuff for the web</SectionHeader>
        <div className="space-y-4 sm:flex sm:space-y-0 justify-center">
          {introData.map((item, i) => (
            <LabelledBlock
              key={`IntroStatement-${i}`}
              label={item.label}
              image={item.image}
            />
          ))}
        </div>

        <div className={`${styles.paragraphBorder} w-11/12 mx-auto`}>
          <p>
            I’m a highly creative Front-End Developer who brings designs to life
            with code. I apply best practices to my code to minimize technical
            debt and ensure seamless developer collaboration. I've worked as a Front-End Developer on Marketing teams since 2013.
          </p>
        </div>
      </Section>

      <Section id="what-i-do">
        <SectionHeader>What I do</SectionHeader>

        <div className="sm:gap-10 md:grid lg:grid-cols-2 lg:gap-8">
          {expertiseData.map((node, i) => (
            <DescriptiveBlock
              key={`WhatIDo-${i}`}
              label={node.label}
              image={node.image}
            >
              {node.desc}
            </DescriptiveBlock>
          ))}
        </div>
      </Section>

      <Section id="portfolio">
        <SectionHeader>Featured projects</SectionHeader>
        <div className="md:grid md:grid-cols-2 md:gap-4 xl:grid-cols-3">
          {portfolioData
            .filter((_, i) => i < 6)
            .map((node, i) => (
              <TeaserCard
                key={`Project-${i}`}
                name={node.name}
                href={node.href}
                image={node.image}
                tags={node.tags}
                case_study_link={node.case_study_link || null}
              />
            ))}
        </div>

        <div className="container flex justify-center">
          <Link href="/portfolio" passHref>
            <Button variant="link">See All Projects</Button>
          </Link>
        </div>
      </Section>

      <Section id="skills">
        <SectionHeader>My toolkit</SectionHeader>
        <div className="sm:grid md:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {skillsData.map((node, i) => (
            <ListCard
              key={`ListCard-${i}`}
              title={node.title}
              list={node.list}
            />
          ))}
        </div>
      </Section>

      <Section id="about">
        <SectionHeader>What I care about</SectionHeader>
        <div className="space-y-4 sm:flex sm:space-y-0 justify-center">
          {interestsData.map((node, i) => (
            <LabelledBlock
              key={`CareStatement-${i}`}
              label={node.label}
              image={node.image}
            />
          ))}
        </div>

        <div className={`${styles.paragraphBorder} w-11/12 mx-auto`}>
          <p>
            I’m passionate about living in a way that does no harm to living
            beings, and does minimal or no harm to the environment.
          </p>
        </div>
      </Section>
    </AppShell>
  );
};

export default Home;
