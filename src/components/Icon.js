import Image from 'next/image'
import { useState } from 'react'
import styles from '@styles/Icon.module.css'

const Icon = ({src, alt}) => {
    const [loaded, setLoaded ] = useState(false)

    const loadingImg = '/images/svgs/loading.svg';
    
    const onLoadCallback = () => {
        setLoaded(true);
    }

    return (
        <Image className={`image ${loaded ? '' : styles.bg}`}
            
            src={src}
            alt={alt}
            layout="fill"
            objectFit="cover" 

        />
    )
  
}

export default Icon