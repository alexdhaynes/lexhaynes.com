import { ChevronUpIcon } from '@heroicons/react/solid'
import { useScrollData } from "scroll-data-hook";


const ScrollToTop = () => {

    const scrollPosY = useScrollData().position.y;

    const scrollTop = () => {
        window.scrollTo({
        behavior: "smooth",
        top: 0
        });
    }

    return (
        <div onClick={scrollTop} className={`opacity-0 transition pointer-events-none ${scrollPosY > 500 && 'opacity-100 delay-1000 cursor-pointer pointer-events-auto'} fixed bottom-6 right-6 rounded-full w-12 h-12 bg-gray-800 text-white opacity-85`} >
            <ChevronUpIcon />
        </div>
    )
    
  
}

export default ScrollToTop