
import Image from 'next/image'
import AppShell from '@components/AppShell'
import { Section, SectionHero } from '@components/Section'
import SectionHeader from '@components/SectionHeader'

const SuperHeader = ({children}) => {
    return (
        <h3 className="font-bold text-gray-700 text-lg text-center">{children}</h3>
    )
}
const SubHeader = ({children}) => {
    return (
        <h3 className="font-bold text-2xl">{children}</h3>
    )
}
const Callout = ({children}) => {
    return (
        <div>
             <div className="table my-6 p-6 rounded-lg bg-gray-100">
                {children}
            </div>
        </div>
       
    )
}

const ImgContainer = ({src, alt, desc, w=400, h=225}) => {
    return (
        <div className="relative table mx-auto pt-6">
            <Image className="rounded-lg shadow-sm" src={src} alt={alt} width={w} height={h} />
            <p className="italic text-sm text-center">{desc}</p>
        </div>
    )
}


const CatDish = () => {
    
    return (
        <AppShell title="Alexandra Haynes: Web Developer">

            <SectionHero>
            
                <div className="container pt-10 space-y-4">
                        <h1 className="font-bold text-5xl section-header">Case Study: CatDish</h1>
                        <div className="flex">

                            <a className="block mr-2 underline font-semibold hover:text-gray-700" href="https://catdish.vercel.app/" alt="CatDish App" target="_blank">Visit the App</a>
                            <span>|</span>
                            <a className="block ml-2 underline font-semibold hover:text-gray-700" href="https://github.com/lexhaynes/catdish" alt="CatDish App" target="_blank">Source Code</a>
                        </div>

                        
                    </div>
  
            </SectionHero>
                        
            <Section>
                <div className="container space-y-3">
                    <SuperHeader>Part 1</SuperHeader>
                    <SectionHeader>Why build this app?</SectionHeader>
                </div>

               <div className="container space-y-2">
                   <SubHeader>Background</SubHeader>
                

                            <p>
                            Back in October, I adopted a cat. He is seven years old, blind, and arrived at the SPCA with feline idiopathic cystitis, aka urinary crystals, which can be fatal in cats. His name is Wali.
                            </p>
                        
                            <p className="mt-2">One of his vets recommended a urinary diet. In cats this means: no kibble ever. Wet food only for hydration. Limited grains or fillers. As my vet called it: <strong>keto for cats</strong>.</p>

                        
                            <ImgContainer
                                src="/images/case-studies/wali.jpg"
                                alt="very handsome cat"
                                desc="Wali the cat"
                                w={360}
                                h={248}
                            />

        

                           
                 
                 
               </div>

               <div className="container space-y-2">
                   <SubHeader>Enter: The Spreadsheet</SubHeader>
                   <p>
                   A cat-owner forum I frequent has a wonderful Google Sheet floating around that includes ingredient data for <strong>hundreds of US brands</strong>. This is an incredible resource for cats with <strong>allergies or dietary restrictions</strong>, like our friend Wali here. 
                   </p>
               </div>

               <div className="container space-y-2">
                   <SubHeader>The Problem</SubHeader>
                   <p>
                   The <strong>first problem</strong> is that the spreadsheet is <strong>read only</strong>. The document’s original creator has locked the document, which means there’s no way for users to share updates to the data. Sure, we could just create a duplicate of the spreadsheet, but this doesn't protect the data from tampering or inaccuracy. Additionally:
                   </p>
                   <ul className="list-disc	p-2">
                       <li className="ml-10">Cat food brands adjust their ingredients often</li>
                       <li className="ml-10">This means the spreadsheet data might be stale!</li>
                   </ul>
                   <p>
                       The <strong>second problem</strong> is that this wealth of data is essentially <strong>inaccessible on mobile</strong>. Which means that if a cat owner is in a store looking for a suitable brand of cat food, they aren’t able to access the data easily. Here's why:
                    </p>
                       <ul className="list-disc	p-2">
                            <li className="ml-10">Nutrition labelling on cat food can be <strong>tricky to read</strong>. Sometimes the font is incredibly tiny in order to fit on the label of a 3-oz can</li>
                            <li className="ml-10">In other cases, the nutrition facts are actually hidden on the reverse/adhesive side of the label, requiring the label be peeled back in order to see the ingredients. Which, you know, isn’t cool to do in a store.</li>
                        </ul>

                   <p><strong>More than a few</strong> users on the forum indicated that having mobile access to the spreadsheet would be useful</p>
               </div>

               <div className="container space-y-2">
                   <SubHeader>The Solution</SubHeader>
                   <p>
                   Well I’m a front-end developer. You know what I’m pretty good at? Building front-ends. Nary exists a spreadsheet whose data I can’t transform into <strong>something that looks good on a phone</strong>.
                   </p>
                   <p>Additionally, I could certainly build an interface that would allow users to add or modify ingredient data.</p>
               </div>

            


            </Section>

            <Section>
                <div className="container space-y-3">
                    <SuperHeader>Part 2</SuperHeader>
                    <SectionHeader>The Back End</SectionHeader>
                </div>
       
                <div className="container space-y-2">
                   <SubHeader>What kind of data are we talking about here?</SubHeader>
                   <p>
                    The data in question is a collection of US-based wet food brands for cats. Each record includes:
                   </p>
                   <ul className="list-disc p2">
                        <li className="ml-10">Brand name</li>
                        <li className="ml-10">Brand product line</li>
                        <li className="ml-10">Food texture</li>
                        <li className="ml-10">A yes/no flag for approx <strong>100 common allergens</strong></li>
                   </ul>
                   <ImgContainer
                                src="/images/case-studies/data.png"
                                alt="Google sheet data"
                                desc="Google sheet data"
                                w={400}
                                h={200}
                            />
               </div>
                <div className="container space-y-2">
                   <SubHeader>Choosing a back end</SubHeader>
                   <p>
                    I chose <strong>MongoDB Atlas</strong> as the back end for this app</p>
                    <ul className="list-disc p2">
                        <li className="ml-10">Low barrier to entry due to familiarity with the product</li> 
                        <li className="ml-10">It's free (at least for my purposes)</li>
                        <li className="ml-10">I can store sensitive user data</li>
                    </ul>
               </div>
                <div className="container space-y-2">
                   <SubHeader>Writing a REST API</SubHeader>
                   <p>
                    At the moment, this app only requires two <strong>API endpoints</strong>:
                   </p>
                   <ul className="list-disc p2">
                            <li className="ml-10">Ingredient endpoint: return a list of brands which match the user’s specified query</li>
                            <li className="ml-10">User endpoint: storing user data</li>
                        </ul>
                    
                    <Callout>
                        At the moment, the app's data is read only.
                    </Callout>
               </div>
                <div className="container space-y-2">
                   <SubHeader>Back End Road Map</SubHeader>

                        <ul className="list-disc">
                            <li className="ml-10">Build out user data table</li>
                            <li className="ml-10">Implement 3rd parth authentication (looking at you, PassportJS)</li>
                            <li className="ml-10">Integrate CMS to allow users to modify data</li>
                            <li className="ml-10">Update data schema (extract Ingredients to their own collection (table)</li>
                        </ul>
                   
               </div>
            </Section>

            <Section>
                <div className="container space-y-3">
                    <SuperHeader>Part 3</SuperHeader>
                    <SectionHeader>Framework & Deployment Platforms</SectionHeader>
                </div>

                <div className="container space-y-2">
                   <SubHeader>App Architecture</SubHeader>
                   <p>
                   With the back-end all set, my next task was choosing a front-end. My app architecture of choice is the <strong>JAMStack</strong>. Why JAM?
                   </p>
                   <p>
                    I spent the beginning of my career building websites with LAMP stacks like Wordpress and Drupal. Wordpress and Drupal are easy to configure, and work exceptionally well for certain use-cases (looking at you, every public library in America).</p> 
                    
                    <p>
                    But as a developer, the wordpress/drupal ecosystems can quickly become a nightmare to work with. Plugins contribute to code bloat very quickly. Customization can be a challenge. The codebases end up huge and potentially unnavigable.
                    </p>
                   
               </div>

               <div className="container space-y-2">
                   <SubHeader>A Note on React</SubHeader>
                   <p>
                   You might be asking: does a tiny app like this really * need * React? And the answer to that is: certainly not. Everything this app does could be accomplished with good 'ol HTML and VanillaJS. However: using React added immense value to the development experience. It's easy. It's fun(ctional). Since I'm the only dev on this project, I get to choose the development tools :)
                   </p>
                   
               </div>

                <div className="container space-y-2">
                   <SubHeader>Battle of the SSGs (static site generators)</SubHeader>
                   <p>
                   It really came down to Gatsby or NextJS. 
                   </p>
                   <p>However, having built a REST API already, I thought it would be inefficient to use Gatsby without GraphQL. NextJS + Vercel it was!</p>
               </div>

            </Section>

            <Section>
                <div className="container space-y-3">
                    <SuperHeader>Part 4</SuperHeader>
                    <SectionHeader>The Fun Part!</SectionHeader>
                </div>

                <div className="container space-y-2">
                   <p>
                   Now that all the boring stuff is out of the way, let’s get to the fun part &#8212; the <strong>front end</strong>!
                   </p>
                   
               </div>

               <div className="container space-y-2">
                   <SubHeader>The Spirit of the App</SubHeader>
                   <p>
                   The most important aspect of this app is that it be <strong>more user-friendly</strong> than a Google Sheet. 
                   </p>
                   <p>This means:</p>
                   <ul className="list-disc">
                            <li className="ml-10">It has to look great on mobile</li>
                            <li className="ml-10">It should be very easy for users to filter results by the inclusion/exclusion of ingredients</li>
                            <li className="ml-10">I have assumed that users care more about the <strong>presence/absence </strong>of certain ingredients than any particular brand or texture. However, this might change.</li>
                        </ul>

                    <div>
                    <ImgContainer
                                src="/images/case-studies/mock-index.png"
                                alt="Index page"
                                desc="Home page"
                                w={400}
                                h={275}
                            />
                    </div>
                        
               </div>

               <div className="container space-y-2">
                   <SubHeader>UI Decisions</SubHeader>
                   <p>
                   I chose to put each filter group on its own page. Here's why:
                   </p>
                    <ul className="list-disc">
                        <li className="ml-10">Each filter group is searchable</li>
                        <li className="ml-10">On pages with many filters, the filters are subcategorized</li>
                        <li className="ml-10">This keeps each page decluttered</li>
                        <li className="ml-10">This prevents the user from becoming overwhelmed with choice </li>
                    </ul>
                    <p>Additionally, a <strong>current selected filters</strong> components allows users to see which filters they have chosen from each page.</p>
               </div>

                        <ImgContainer
                                src="/images/case-studies/mock-filters.png"
                                alt="Filter page"
                                desc="One of the filter groups"
                                w={400}
                                h={275}
                            />

               <div className="container space-y-2">
                   <SubHeader>CSS Decisions</SubHeader>
                    <ul className="list-disc">
                        <li className="ml-10">As a <strong>solo dev </strong>working on this project, I chose to use <strong>TailwindCSS</strong></li>
                        <li className="ml-10">Tailwind’s design system is incredibly easy to use and reduces decision overhead</li>
                        <li className="ml-10">I think it’s a lot prettier than, say, Bootstrap</li>
                        <li className="ml-10">Using Tailwind with the classnames npm package makes dynamic styling a breeze </li>
                        <li className="ml-10">Caveat: using TailwindCSS on project with multiple developers would be challenging </li>
                    </ul>
                    <p><strong>NB:</strong> I am currently considering moving from SCSS to  <strong>Styled Compoents</strong>. My understanding of Tailwind's ethos is this: <span className="italic">don't leave your file to style</span>. This felt jarring and oh-so-wrong at first, but now I find my ~ coding flow ~ disrupted by having to move into a SASS file to add styling. I think I'm finally sold on CSS-in-JS.</p>
               </div>

               <div className="container space-y-2">
                   <SubHeader>Colors & Motifs</SubHeader>
                   <p>
                   I generally prefer a limited color palette. 
                   </p>
                   <p>Pink, dark gray, and light gray, along with a lot of whitespace, conveyed a sense of fun (because cats are fun) tempered with clean minimalism.</p>
                   <p>For a visual motif, I went for blobs and organic shapes. They add a modern but fun flair to web design. </p>
                
               </div>

               <ImgContainer
                                src="/images/case-studies/mock-results.png"
                                alt="Results page"
                                desc="Results Page"
                                w={400}
                                h={275}
                            />


               <div className="container space-y-2">
                   <SubHeader>Front End Road Map</SubHeader>

                        <ul className="list-disc">
                            <li className="ml-10">The results page needs some further organization and stronger <strong>visual differentiation</strong> for each result card</li>
                            <li className="ml-10">Users should be able <strong>group results by brand</strong>, since seeing a long list of results of the same brand is not visually appealing and feels cluttered</li>
                            <li className="ml-10">There are some bugs with the pagination!</li>
                            <li className="ml-10">I would like to make the app’s <strong>visual identity</strong> a little more distinct</li>
                            <li className="ml-10">The app needs to feel a little more vibrant &#8212; this can be accomplished with <strong>subtle animation</strong> on UI interaction and during page transitions and visibility changes</li>
                            <li className="ml-10">Results should include <strong>product images</strong> and <strong>purchase links</strong></li>
                            <li className="ml-10">Device <strong>QA</strong></li>
                            <li className="ml-10">Logged-in users will need an interface for <strong>modifying data</strong></li>
                            <li className="ml-10"><strong>TESTS</strong>. Yeah. I need to write tests.</li>
                            <li className="ml-10"><strong>Typechecking</strong>. Many components are missing adequate typechecking. Future me will thank me.</li>
                            
                          
                        </ul>
               </div>

            </Section>


     
        </AppShell>
    )
}


export default CatDish
