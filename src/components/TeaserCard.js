
import Icon from '@components/Icon'

const TeaserCard = ({name, href, image, tags}) => {
    return (
        <a className="block" title={name} href={href} target="_blank" rel="noreferrer">
        <div className=" w-full mb-4 space-y-3 mx-auto bg-white table">
        
            <div className="relative mx-auto overflow-hidden rounded-lg shadow-lg
                w-80 h-44 
                md:w-60 md:h-32
                lg:w-80 lg:h-44
                ">
                <Icon   
                    src={image}
                    alt={name}
                />
            </div>
            
            <h3 className="font-bold text-lg text-center w-full text-gray-700">{name}</h3>
            
            <div className="flex justify-center">
            {
                tags.map((item, i) => (
                    <span key={`project-category-${i}`} className="rounded-3xl px-4 py-1 mr-2 bg-yellow-100 text-gray-600 font-bold text-xs">{item}</span>
                ))
            }
            </div>
        </div>
    </a>
    )
}

export {
    TeaserCard
} 