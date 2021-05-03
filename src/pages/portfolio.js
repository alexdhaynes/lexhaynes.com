
import AppShell from '@components/AppShell'
import { Section, SectionHero } from '@components/Section'
import SectionHeader from '@components/SectionHeader'
import { TeaserCard } from '@components/TeaserCard'
import ContactForm from '@components/ContactForm'

import portfolioData from '@data/portfolio.json'



const Portfolio = () => {
    
    return (
        <AppShell title="Alexandra Haynes: Web Developer">

            <SectionHero>
            
                <div className="container pt-10">
                        <h1 className="font-bold text-5xl section-header">All Projects</h1>
                        
                    </div>
  
            </SectionHero>
                        
           


            
            <Section>
                <div className="md:grid md:grid-cols-2 md:gap-4 xl:grid-cols-3">
                {
                    portfolioData.map((node, i) => (

                        <TeaserCard key={`Project-${i}`} 
                                    name={node.name} 
                                    href={node.href}
                                    image={node.image} 
                                    tags={node.tags}
                        />
                    ))
                }
                </div>

        
                

            </Section>

     

            <Section>
                <SectionHeader>Get in touch</SectionHeader>
                <ContactForm />
            </Section>

        </AppShell>
    )
}


export default Portfolio
