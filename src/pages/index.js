
import AppShell from '@components/AppShell'
import NavBar from '@components/NavBar'
import Link from 'next/link'
import { Section, SectionHero } from '@components/Section'
import { LabelledBlock, DescriptiveBlock } from '@components/StatementBlock'
import SectionHeader from '@components/SectionHeader'
import { ListCard } from '@components/ListCard'
import { TeaserCard } from '@components/TeaserCard'
import Form from '@components/Form'
import Button from '@components/Button'
import Icon from '@components/Icon'

import portfolioData from '@data/portfolio.json'
import socialData from '@data/social.json'
import skillsData from '@data/skills.json'
import expertiseData from '@data/expertise.json'
import hobbiesData from '@data/hobbies.json'
import introData from '@data/intro.json'
import interestsData from '@data/interests.json'



const Home = () => {
    
    return (
        <AppShell title="Alexandra Haynes: Web Developer">

            <SectionHero>
                <div className="pt-3 pb-10">
                    <NavBar />
                </div>
            
                <div className="w-11/12 sm:w-10/12 md:w-1/2 mx-auto flex flex-col items-center sm:flex-row sm:justify-between">
                    <div className="w-2/3">
                        <h1 className="font-bold text-5xl section-header">Hi, I'm Alex</h1>
                        <h2 className="font-bold text-3xl mt-3">Front-End Developer</h2>
                        <div className="mt-2 w-52 flex justify-between">
                            <p className="font-medium text-lg">Ithaca, NY</p>
                            <p>&bull;</p>
                            <p className="font-medium text-lg">She / Her</p>
                        </div>
                        <div className="mt-2 w-32 flex justify-between">
                        {
                            socialData.map((item, i) => (
                                <a key={`social-${i}`} className="underline text-semibold" href={item.href} title={item.name} target="_blank" rel="noreferrer">{item.name}</a>
                            ))
                        }
                        </div>
                    </div>

                    <div className="relative w-36 h-36 overflow-hidden rounded-full border-8 border-white">
                        <Icon 
                            src='/images/bitmaps/profile.jpg' 
                            alt="Alexandra Haynes: Profile Picture" 
                        />
                    </div>
                    
                </div>
                
            </SectionHero>
                        
                <Section bgInner="white">
                    <SectionHeader>At the Intersection of Design & Development</SectionHeader>
                    <div className="space-y-4 sm:flex sm:space-y-0">
                    {
                        introData.map((item, i) => (
                             <LabelledBlock 
                            key={`IntroStatement-${i}`} 
                            label={item.label}
                            image={item.image}
                         /> 
                        ))
                    }
                    </div>

                    <p className="sm:w-2/3 mx-auto serif">
                    I’m a Front-End Developer with a strong eye for <strong>design</strong>. I work at the <strong>intersection</strong> between <strong>design & development</strong>. I take designs and bring them faithfully to life with <strong>code</strong>. I also design and build beautiful <strong>websites, interfaces, and interactions</strong>.
                    </p>
                </Section>
      

            <Section id="what-i-do">
                <SectionHeader>What I do</SectionHeader>

                <div className="sm:gap-10 md:grid lg:grid-cols-2 lg:gap-8">
                {
                    expertiseData.map((node, i) => (
                        <DescriptiveBlock 
                            key={`WhatIDo-${i}`} 
                            label={node.label} 
                            image={node.image}>
                            {node.desc}
                        </DescriptiveBlock>
                    ))
                }
                </div>
            </Section>


            <Section id="skills">
                <SectionHeader>My toolkit</SectionHeader>
                <div className="sm:grid md:grid-cols-2 lg:grid-cols-3 sm:gap-8">
                {
                    skillsData.map((node, i) => (
                        <ListCard key={`ListCard-${i}`} title={node.title} list={node.list} />
                    ))
                }
                </div>
            </Section>
            
            <Section id="portfolio">
                <SectionHeader>Featured projects</SectionHeader>
                <div className="md:grid md:grid-cols-2 md:gap-4 xl:grid-cols-3">
                {
                    portfolioData
                      .filter((item, i) => i < 6 )
                      .map((node, i) => (
                          <TeaserCard key={`Project-${i}`} 
                                    name={node.name} 
                                    href={node.href}
                                    image={node.image} 
                                    tags={node.tags}
                        />
                    ))
                }
                </div>

                <div className="container flex justify-center">
                  <Link href='/portfolio' passHref>
                    <Button>See All Projects</Button>
                  </Link>
                </div>
                
                

            </Section>

            <Section id="about">
                <SectionHeader>When I'm not working</SectionHeader>
                <div className="md:grid lg:grid-cols-2 lg:gap-4">
                {
                    hobbiesData.map((node, i) => (
                        <DescriptiveBlock 
                            key={`Hobbies-${i}`} 
                            label={node.label}
                            image={node.image}
                        >
                            {node.desc}
                        </DescriptiveBlock>
                    ))
                }
                </div>
            </Section>

            <Section id="interests">
                <SectionHeader>What I care about</SectionHeader>
                <div className="space-y-4 sm:flex sm:space-y-0">
                {
                    interestsData.map((node, i) => (
                        <LabelledBlock 
                        key={`CareStatement-${i}`} 
                        label={node.label} 
                        image={node.image}
                        /> 
                    ))
                }
                </div>
                <p className="sm:w-2/3 mx-auto serif">
                I’m passionate about living in a way that <strong>does no harm to living beings</strong>, and <strong>does no harm to the environment</strong>. I actively work on reducing my use of plastics and household energy. I try to always choose local, organic foods that were grown in a sustainable manner. I practice compassion for all living beings.
                </p>

            </Section>

            <Section id="contact">
                <SectionHeader>Get in touch</SectionHeader>
                <Form />
            </Section>

        </AppShell>
    )
}


export default Home
