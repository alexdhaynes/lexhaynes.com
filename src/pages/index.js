
import AppShell from '@components/AppShell'
import NavBar from '@components/NavBar'
import Link from 'next/link'
import { Section, SectionHero } from '@components/Section'
import { LabelledBlock, DescriptiveBlock } from '@components/StatementBlock'
import SectionHeader from '@components/SectionHeader'
import { ListCard } from '@components/ListCard'
import { TeaserCard } from '@components/TeaserCard'
import ContactForm from '@components/ContactForm'
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
            
                <div className="md:w-3/4 lg:w-1/2 mx-auto flex flex-col items-center sm:flex-row sm:justify-between pt-10">
                    <div className="w-2/3">
                        <h1 className="text-center sm:text-left font-bold text-3xl sm:text-5xl section-header">Hi, I'm Alex</h1>
                        <h2 className="text-center sm:text-left font-bold text-xl sm:text-3xl mt-3">Front-End Developer</h2>
                        <div className="mx-auto sm:mx-0 justify-between mt-2 w-44 sm:w-52 flex">
                            <p className="font-medium text-md sm:text-lg">Ithaca, NY</p>
                            <p>&bull;</p>
                            <p className="font-medium text-md sm:text-lg">She / Her</p>
                        </div>
                        <div className="mx-auto sm:mx-0 mt-2 w-32 flex justify-between text-sm">
                        {
                            socialData.map((item, i) => (
                                <a key={`social-${i}`} className="underline hover:text-gray-500 text-semibold" href={item.href} title={item.name} target="_blank" rel="noreferrer">{item.name}</a>
                            ))
                        }
                        </div>
                    </div>

                    <div className="mt-6 sm:mt-0 relative w-36 h-36 overflow-hidden rounded-full border-8 border-white">
                        <Icon 
                            src='/images/bitmaps/profile.jpg' 
                            alt="Alexandra Haynes: Profile Picture" 
                        />
                    </div>
                    
                </div>
                
            </SectionHero>
                        
                <Section bgInner="white" id="intro">
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

                    <div className="sm:w-2/3 mx-auto">
                    <p>I’m a Front-End Developer with a strong eye for <strong>design</strong>. I work at the <strong>intersection</strong> between <strong>design & development</strong>. I take designs and bring them faithfully to life with <strong>code</strong>.</p>
                    <p className="mt-2">As a long-time hobby artist and art history nerd, I have a well-developed eye for design. I design and build beautiful <strong>websites, UI, and interactions</strong>.</p>
                    </div>
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
                    <Button variant="link">See All Projects</Button>
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
                <p className="sm:w-2/3 mx-auto">
                I’m passionate about living in a way that <strong>does no harm to living beings</strong>, and <strong>does no harm to the environment</strong>. I actively work on reducing my use of plastics and household energy. I try to always choose local, organic foods that were grown in a sustainable manner. I practice compassion for all living beings.
                </p>

            </Section>

            <Section id="contact">
                <SectionHeader>Get in touch</SectionHeader>
                <ContactForm />
            </Section>

        </AppShell>
    )
}


export default Home
