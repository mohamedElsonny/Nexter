import React from 'react'
import styled from 'styled-components'
import { H4 } from './styles/Typography'

const FeaturesStyles = styled.section`
  grid-column: center-start / center-end;

  margin: 15rem 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 6rem;
  align-items: start;
`
const FeatureStyles = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-gap: 1.5rem 2.5rem;

  svg {
    fill: ${props => props.theme.colors.primary};
    width: 4.5rem;
    height: 4.5rem;
    grid-row: 1 / span 2;
    transform: translateY(-1rem);
  }

  p {
    font-size: 1.7rem;
  }
`

const Features = () => {
  return (
    <FeaturesStyles>
      <FeatureStyles>
        <svg>
          <use xlinkHref="sprite.svg#icon-global" />
        </svg>
        <H4>World's best luxury homes</H4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          quasi similique asperiores velit atque dicta.
        </p>
      </FeatureStyles>
      <FeatureStyles>
        <svg>
          <use xlinkHref="sprite.svg#icon-trophy" />
        </svg>
        <H4>Only the best properties</H4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia qui
          veritatis atque!
        </p>
      </FeatureStyles>
      <FeatureStyles>
        <svg>
          <use xlinkHref="sprite.svg#icon-map-pin" />
        </svg>
        <H4>All homes in top locations</H4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
          quas eveniet temporibus dolorem?
        </p>
      </FeatureStyles>
      <FeatureStyles>
        <svg>
          <use xlinkHref="sprite.svg#icon-key" />
        </svg>
        <H4>New home in one week</H4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione.</p>
      </FeatureStyles>
      <FeatureStyles>
        <svg>
          <use xlinkHref="sprite.svg#icon-presentation" />
        </svg>
        <H4>Top 1% realtors</H4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          beatae est rerum voluptas veniam dolorem dignissimos quod?
        </p>
      </FeatureStyles>
      <FeatureStyles>
        <svg>
          <use xlinkHref="sprite.svg#icon-lock" />
        </svg>
        <H4>Secure payments on nexter</H4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum harum
          nesciunt eaque?
        </p>
      </FeatureStyles>
    </FeaturesStyles>
  )
}

export default Features
