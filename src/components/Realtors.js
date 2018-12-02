import React from 'react'
import styled from 'styled-components'
import { H3, H4 } from './styles/Typography'

import img_1 from '../img/realtor-1.jpeg'
import img_2 from '../img/realtor-2.jpeg'
import img_3 from '../img/realtor-3.jpeg'

const RealtorsStyles = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  grid-column: col-start 7 / full-end;

  padding: 3rem;

  display: grid;
  grid-template-columns: 1fr;
  align-content: center;
  justify-items: center;
  grid-row-gap: 4vh;

  @media only screen and (max-width: ${props =>
      props.theme.breackpoints.medium}) {
    grid-column: full-start / full-end;
    grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));

    h3 {
      grid-column: 1 / -1;
    }
  }

  @media only screen and (max-width: ${props =>
      props.theme.breackpoints.small}) {
    padding: 5rem;
  }
`

const Realtor = styled.div`
  display: grid;
  grid-template-columns: min-content max-content;

  grid-column-gap: 2rem;
  align-items: center;

  img {
    height: 7rem;
    display: block;
    border-radius: 50%;
  }

  p {
    color: ${props => props.theme.colors.grey_light_2};
  }
`

const Realtors = () => {
  return (
    <RealtorsStyles>
      <H3 uppercase>top 3 realtors</H3>
      <Realtor>
        <img src={img_1} alt="Realtor 1" />
        <div>
          <H4 light>Eric Feinman</H4>
          <p>245 Houses sold</p>
        </div>
      </Realtor>
      <Realtor>
        <img src={img_2} alt="Realtor 2" />
        <div>
          <H4 light>Kim Brown</H4>
          <p>212 Houses sold</p>
        </div>
      </Realtor>
      <Realtor>
        <img src={img_3} alt="Realtor 3" />
        <div>
          <H4 light>Toby Ramsey</H4>
          <p>198 Houses sold</p>
        </div>
      </Realtor>
    </RealtorsStyles>
  )
}

export default Realtors
