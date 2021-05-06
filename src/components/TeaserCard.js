
import Icon from '@components/Icon'
import Link from 'next/link'

const TeaserCard = ({name, href, image, tags, case_study_link}) => {
    return (
        <div className="block transform hover:scale-110 transition-transform">
        <div className=" w-full mb-8 md:mb-4 space-y-3 mx-auto bg-white table">
        
            <a className="block" title={name} href={href} target="_blank" rel="noreferrer">
                <div className="relative mx-auto overflow-hidden rounded-lg shadow-lg
                    w-3/4 h-36  
                    md:w-60 md:h-32
                    lg:w-72 lg:h-40
                    ">
                    <Icon   
                        src={image}
                        alt={name}
                    />
                </div>
            
            <h3 className="pt-2 font-bold text-lg text-center w-full text-gray-700 hover:underline">{name}</h3>
        </a>

            {case_study_link && <>
                <Link href={case_study_link}> 
                    <a className="block font-bold text-red-400 text-sm pb-2 leading-tight underline hover:text-red-300 text-center">View Case Study</a>
                </Link>
            </>
            }
           
            
            <div className="flex justify-center">
            {
                tags.map((item, i) => (
                    <span key={`project-category-${i}`} className="rounded-3xl px-4 py-1 mr-2 bg-yellow-100 text-gray-600 font-bold text-xs">{item}</span>
                ))
            }
            </div>
        </div>
    </div>
    )
}

export {
    TeaserCard
} 