
import { useState } from 'react';
import Image from 'next/image';
//css
import styled, { css } from 'styled-components'
import { MEDIA_QUERIES } from '../../src/constants'
import { theme } from '../styles/globals.styles';

const TeaserCardDIV = styled.div`
  position: relative;
  width: 95%;

  ${MEDIA_QUERIES.L} {
    max-width: 800px;
  }
  
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
          filter: brightness(80%);
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
  "description"
  "tags"
  "stack"; 

   display: flex;
  flex-direction: column; 

  .teaser-card-image {
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    grid-area: image;
    margin-bottom: 40px;
    border-radius: 5px;

    ${MEDIA_QUERIES.XL} {
      width: 300px;
      height: 168px;
      margin-bottom: 0;
    }
  }


  ${MEDIA_QUERIES.XL} {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto;
    grid-template-areas: 
    "image name"
    "image description"
    "image tags"
    "image stack";
   
    grid-column-gap: 40px;
  }

  
  .teaser-card-name {
    grid-area: name;
    position: relative;
    margin: 0;
    ${MEDIA_QUERIES.L} {
      margin-top: 0;
    }

    h3 {
     margin: 0;
    }
    .visit-text {
      margin-left: 20px;
      color: ${theme.colors.accentDark};
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

 
  .teaser-card-description {
    grid-area: description;
  
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
      padding: 0.25rem 0.75rem;
      margin: 0 0.5rem 0 0;
      border-radius: 8px;
      color: #fff;
      background: ${theme.colors.accentDark};
    }
  }
  

  .teaser-card-stack {
    grid-area: stack;
    align-self: flex-start;
    max-width: 75%;
    margin-top: 1rem;
    
    span {
      padding-right: 1rem;
      display: block;
      &:before {
          color: ${theme.colors.accentDark};
          content: '•';
          position: relative;
          padding-right: 0.5rem;
        }
      ${MEDIA_QUERIES.L} {
        display: inline;
        &:before {
          display: none;
        }
        &:after {
        color: ${theme.colors.accentDark};
        content: "•";
        padding-left: 1rem;
      }
       &:last-of-type {
         &:after {
          content: '';
         }
        }/* end last-of-type */
      }

      }/* end span */
    }/* end .teaser-card-stack */

    .teaser-card-tags, .teaser-card-stack {
      width: 100%;
      span {
        font-size: 1.15rem;
      }
    }
  
`;

const TeaserCard = ({name, description, href, image, tags, stack}) => {
    const [hovered, setHovered] = useState(false);
    return (
      <TeaserCardDIV>
        <a href={href} target="blank" onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)}>
        <TeaserCardInnerDIV hovered={hovered}>
              <Image className="teaser-card-image" src={image} alt={name} width={360} height={203}/>
              <div className="teaser-card-name">  
                <h3>{name}</h3>
                <span className="visit-text">Visit</span>
              </div>
              <div className="teaser-card-description">
                <p>{description}</p>
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
        </TeaserCardInnerDIV>
        </a>
      </TeaserCardDIV>

    )
}

export {
    TeaserCard
} 