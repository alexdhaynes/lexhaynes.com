
import { useEffect, useState } from 'react';
//css
import styled, { css } from 'styled-components'
import { MEDIA_QUERIES } from '../../src/constants'
import SiteImage from './SiteImage';
import { theme } from '../styles/globals.styles';

const TeaserCardDIV = styled.div`
  margin-bottom: 30px;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  ${(props) => {
    if (props.hovered) {
      return css`
          filter: brightness(95%);
          transition: filter 0.25s;
         
     
        `;
    } else {
      return css`
          border:none;
        `;
    }
  }
}

}

margin-bottom: 60px;

display: grid;
    grid-template-columns: 100%;
    grid-template-areas: "image"
    "image"
    "name "
    "tags"
    "stack";

  
  
  ${MEDIA_QUERIES.L} {
    max-width: 800px;
    border-radius: 3px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 12% 12% 26% auto;
    grid-template-areas: 
    "image name"
    "image tags"
    ". stack";
    grid-column-gap: 40px;
    grid-row-gap: 20px;
  }
}


  .teaser-card-image {
    position: relative;
    width: 300px;
    height: 168.75px;
    border-radius: 4px;
    margin: 12px;
    grid-area: image;
    opacity: ${props => props.scrolled / 100};

  }

  h3 {
    grid-area: name;
    margin: 0;
  }


  .teaser-card-tags {
    grid-area: tags;
    color: ${theme.colors.lightGrey};
    span {
      padding-right: 4px;
    }
  }
  

  .teaser-card-stack {
    grid-area: stack;
    align-self: flex-end;
    span {
      padding: 0 12px 0 0 ;
      font-size: 1.05rem;
      color: ${theme.colors.darkGrey};
      opacity: 0.75;
      &:after {
        color: ${theme.colors.lightGrey};
        content: '•';
        margin-left: 16px;
      }
      &:last-of-type {
         &:after {
          content: '';
         }
        }
      }
    }
  }

 
`;

const TeaserCard = ({name, href, image, tags, stack, caseStudyId}) => {
    const [hovered, setHovered] = useState(false);
    return (
      <a href={href} target="blank" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
       <TeaserCardDIV hovered={hovered}>
          <div className="teaser-card-image">
              <SiteImage src={image} alt={name}/>
          </div>
          <div className="teaser-card-tags">
              {tags.map((tag, i) => (
                <span key={`teaser-card-tag-${i}`}>{tag}</span>
              ))}
          </div>
          <div className="teaser-card-stack">
              {stack.map((tech, i) => (
                <span key={`teaser-card-stack-${i}`}>{tech}</span>
              ))}
          </div>
          <h3>{name}</h3>
       </TeaserCardDIV>
       </a>

    )
}

export {
    TeaserCard
} 