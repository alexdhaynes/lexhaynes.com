import Image from 'next/image'
import { useState } from 'react'
import {css} from 'styled-components';

const bgStyle = css`
    background: url('/images/svgs/loading.svg') no-repeat center center;
    width:100%;
    height:100%;
    background-size:cover;
`

const SiteImage = ({src, alt}) => {
    const [loaded, setLoaded ] = useState(false)
    
    const onLoadCallback = () => {
        setLoaded(true);
    }

    return (
      <Image css={loaded && bgStyle}
        onLoad={onLoadCallback} 
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover" 
      />
    )
  
}

export default SiteImage