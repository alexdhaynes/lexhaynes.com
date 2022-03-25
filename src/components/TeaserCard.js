
import Link from 'next/link'

//css
import styled, { css } from 'styled-components'
import { MEDIA_QUERIES } from 'src/constants'
import SiteImage from './SiteImage';

const TeaserCardDIV = styled.div`
  margin-bottom: 30px;
  position: relative;
  
  ${MEDIA_QUERIES.L} {
    max-width: 800px;
    border-radius: 3px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-areas: 
    "image name"
    "image tags"
    ". stack"
    ". ."
    ". .";
    grid-column-gap: 40px;
  }
  .teaser-card-image {
    position: relative;
    width: 300px;
    height: 168.75px;
    border-radius: 4px;
    margin: 12px;
    grid-area: image;
  }

  h3 {
    grid-area: name;
  }


  .teaser-card-tags {
    grid-area: tags;
    span {
      padding: 4px;
    }
  }

  .teaser-card-stack {
    grid-area: stack;
    span {
      padding-right: 4px;
    }
  }

 
`;

const TeaserCard = ({name, href, image, tags, stack, caseStudyId}) => {
    return (
       <TeaserCardDIV>
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
    )
}

export {
    TeaserCard
} 