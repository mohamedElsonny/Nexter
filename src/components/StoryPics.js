import React from 'react'
import styled from 'styled-components'

import StoryImage1 from '../img/story-1.jpeg'
import StoryImage2 from '../img/story-2.jpeg'
import BgImage from '../img/back.jpg'

const StoryPicsStyles = styled.div`
  background-color: ${props => props.theme.colors.primary};
  grid-column: full-start / col-end 4;

  background-image: linear-gradient(rgba(198,153,99,0.5),rgba(198,153,99,0.5)), url('${BgImage}');
  background-repeat: no-repeat;
  background-size: cover;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  align-items: center;
  padding: 6rem;


  @media only screen and (max-width: ${props =>
    props.theme.breackpoints.medium}) {
    grid-column: full-start / full-end;
  }

  .story__img--1 {
    width: 100%;
    grid-column: 2 / 6;
    grid-row: 2 / 6;

    box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.2);

    @media only screen and (max-width: ${props =>
      props.theme.breackpoints.medium}) {
        grid-column: 1 / 5;
        grid-row: 1 / -1;
      }
  }
  .story__img--2 {
    width: 115%;
    z-index: 30;
    grid-row: 4 / 6;
    grid-column: 4 / -1;

    box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.2);

    @media only screen and (max-width: ${props =>
      props.theme.breackpoints.medium}) {
       width: 100%;
       grid-row: 1 / -1;
      }
  }
`

const StoryPics = () => {
  return (
    <StoryPicsStyles>
      <img
        src={StoryImage1}
        alt="Couple with new house"
        className="story__img--1"
      />
      <img src={StoryImage2} alt="New house" className="story__img--2" />
    </StoryPicsStyles>
  )
}

export default StoryPics
