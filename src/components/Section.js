


const SectionHero = ({children}) => {

    return (
    <section className={`pb-36 mb-12 sm:mb-10`} >
        <div className={`container w-11/12 px-6  max-w-screen-xl space-y-16`}>
              {children}  
         </div>
      </section>
    )
}

const Section = ({id, bgOuter, bgInner, children}) => {

    return (
    <>
    <section className={`py-6 mb-40 sm:py-16 sm:mb-80 bg-${bgOuter ? bgOuter : 'white'}`} id={id ? `${id}`: undefined} >
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute w-screen h-24 -mt-28 sm:h-36 sm:-mt-40 md:h-56 md:-mt-52">
            <path fill="#ffffff" fillOpacity="1" d="M0,64L60,58.7C120,53,240,43,360,69.3C480,96,600,160,720,186.7C840,213,960,203,1080,186.7C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>

        <div className={`container w-3/4 bg-${bgInner ? bgInner : 'none'} rounded-lg py-10 px-6  max-w-screen-xl space-y-16`}>
              {children}  
         </div>

         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute w-screen sm:h-32 sm:mt-12">
            <path fill="#ffffff" fillOpacity="1" d="M0,32L40,58.7C80,85,160,139,240,170.7C320,203,400,213,480,208C560,203,640,181,720,160C800,139,880,117,960,112C1040,107,1120,117,1200,144C1280,171,1360,213,1400,234.7L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
        </svg>
      </section>
    </>
    )
}

export {
    Section,
    SectionHero
}