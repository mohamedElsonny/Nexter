import React from 'react'
import styled from 'styled-components'
import { H3, H2 } from './styles/Typography'
import { Button } from './styles/Buttons'

const StoryContentStyles = styled.div`
  background-color: ${props => props.theme.colors.grey_light_1};
  grid-column: col-start 5 / full-end;

  padding: 6rem 6vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  /* display: grid;
  align-content: center;
  justify-items: start; */

  @media only screen and (max-width: ${props =>
      props.theme.breackpoints.medium}) {
    grid-column: full-start / full-end;
    grid-row: 5 / 6;
  }

  p {
    font-size: 1.5rem;
    font-style: italic;
  }
`

const StoryContent = () => {
  return (
    <StoryContentStyles>
      <H3 className="mb-sm">Happy Customers</H3>
      <H2 className="mb-md">&ldquo;The best decision of our lives&rdquo;</H2>
      <p className="mb-lg">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
        voluptatem laboriosam totam nemo sapiente deserunt iure.
      </p>
      <Button>Find your own home</Button>
    </StoryContentStyles>
  )
}

export default StoryContent
