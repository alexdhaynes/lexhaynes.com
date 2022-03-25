
import { useEffect, useState } from 'react';
//css
import styled, { css } from 'styled-components'
import { MEDIA_QUERIES } from '../../src/constants'
import SiteImage from './SiteImage';
import { theme } from '../styles/globals.styles';

const TeaserCardDIV = styled.div`
  position: relative;
  width: 95%;
  max-width: 800px;
  
  &:hover {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    position: relative;
    display: block;
    color: ${theme.colors.black};
    &:hover {
      color: ${theme.colors.black};
    }
  }
`;

const  visitTextHoverStyle = css`
  opacity: 1 !important;
  transform: translateX(20px);
`;

const TeaserCardInnerDIV = styled.div`
  position: relative;
  margin-bottom: 120px;

  ${(props) => {
      if (props.hovered) {
        return css`
          filter: brightness(75%);
          transition: filter 0.25s;
        
        @media (min-width: 1500px) {
          .teaser-card-name {
            .visit-text {
              ${visitTextHoverStyle}
            }
          }
        }
        `;
      }
  }}

 display: grid;
  grid-template-columns: 100%;
  grid-template-areas: "image"
  "image"
  "name "
  "tags"
  "stack"; 

   display: flex;
  flex-direction: column; 

  .teaser-card-image {
    position: relative;
    display: block;
    width: 300px;
    height: 168px;
    border-radius: 4px;
    grid-area: image;
    margin: 0;
  }


  ${MEDIA_QUERIES.L} {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr 2fr;
    grid-template-areas: 
    "image name"
    "image tags"
    "image stack";
   
    grid-column-gap: 40px;
  }

  
  .teaser-card-name {
    grid-area: name;
    position: relative;
    margin-top: 30px;
    ${MEDIA_QUERIES.L} {
      margin-top: 0;
    }

    h3 {
     margin: 0;
    }
    .visit-text {
      margin-left: 20px;
      color: ${theme.colors.lightGrey};
      font-size: 1.15rem;
      position: absolute;
      right: 0;
      top: 0;
      opacity: 0;
      transition: transform 0.15s ease-in-out, opacity 0.10s;
      &:after {
        content: " >>"
      }
    }
  }

 

  .teaser-card-label {
    color: ${theme.colors.defaultGrey};
    font-size: 1.15rem;
    display: inline;
    padding: 0;
    margin: 0;
  }

  .teaser-card-tags {
    grid-area: tags;
    margin-top: 1rem;

    ${MEDIA_QUERIES.L} {
      margin-top: 0;
    }

    span {
      padding-right: 4px;
      color: ${theme.colors.black};
    }
  }
  

  .teaser-card-stack {
    grid-area: stack;
    align-self: flex-start;
    max-width: 75%;
    margin-top: 1rem;
    span {
      padding: 0 12px 0 0 ;
      &:after {
        color: ${theme.colors.lightGrey};
        content: '•';
        margin-left: 16px;
      }
      &:last-of-type {
         &:after {
          content: '';
         }
        }/* end last-of-type */
      }/* end span */
    }/* end .teaser-card-stack */

    .teaser-card-tags, .teaser-card-stack {
      width: 100%;
      span {
        font-size: 1.15rem;
        color: ${theme.colors.black};
      }
    }
  
`;

const TeaserCard = ({name, href, image, tags, stack}) => {
    const [hovered, setHovered] = useState(false);
    return (
      <TeaserCardDIV onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <a href={href} target="blank">
        <TeaserCardInnerDIV hovered={hovered}>
            <figure className="teaser-card-image">
                <SiteImage src={image} alt={name}/>
            </figure>
              <div className="teaser-card-name">  
                <h3>{name}</h3>
                <span className="visit-text">Visit</span>
              </div>
              <div className="teaser-card-tags">
                  <p className="teaser-card-label">Role:&nbsp;</p>
                  {tags.map((tag, i) => (
                    <span key={`teaser-card-tag-${i}`}>{tag}</span>
                  ))}
              </div>
              <div className="teaser-card-stack">
                  <p className="teaser-card-label">Stack:&nbsp;</p>
                  {stack.map((tech, i) => (
                    <span key={`teaser-card-stack-${i}`}>{tech}</span>
                  ))}
              </div>
        </TeaserCardInnerDIV>
        </a>
      </TeaserCardDIV>

    )
}

export {
    TeaserCard
} 