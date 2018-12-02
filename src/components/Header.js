import React from 'react'
import styled from 'styled-components'

import logo from '../img/logo.png'
import logoBBC from '../img/logo-bbc.png'
import logoBI from '../img/logo-bi.png'
import logoForbes from '../img/logo-forbes.png'
import logoTechcrunch from '../img/logo-techcrunch.png'
import hero from '../img/hero.jpeg'
import { H3, H1 } from './styles/Typography'
import { Button } from './styles/Buttons'

const HeaderStyles = styled.header`
  grid-column: full-start / col-end 6;
  background-image: linear-gradient(
      rgba(16, 29, 44, 0.9),
      rgba(16, 29, 44, 0.9)
    ),
    url(${hero});
  background-size: cover;
  background-position: center center;
  padding: 4rem 8rem 8rem;

  display: grid;
  grid-template-rows: 1fr min-content minmax(6rem, min-content) 1fr;
  grid-template-columns: minmax(min-content, max-content);
  grid-row-gap: 1.5rem;
  justify-content: center;

  @media only screen and (max-width: ${props =>
      props.theme.breackpoints.medium}) {
    grid-column: full-start / full-end;
  }

  @media only screen and (max-width: ${props =>
      props.theme.breackpoints.small}) {
    padding: 5rem;
  }
  .logo {
    height: 3rem;
    justify-self: center;
  }

  .header__btn {
    justify-self: start;
    align-self: start;
  }

  .seenon-text {
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    align-items: center;
    grid-gap: 1.5rem;

    font-size: 1.6rem;
    color: ${props => props.theme.colors.grey_light_2};

    &::before,
    &::after {
      width: 100;
      height: 2px;
      display: block;
      background-color: currentColor;
      content: '';
    }
  }

  .seenon-logos {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 3rem;
    justify-items: center;
    align-items: center;
    img {
      max-height: 2.5rem;
      max-width: 100%;
      filter: brightness(70%);
    }
  }
`

const Header = () => {
  return (
    <HeaderStyles>
      <img src={logo} alt="Nexter Logo" className="logo" />
      <H3>Your own home:</H3>
      <H1 light>The ultimate personal freedom</H1>
      <Button className="header__btn">View our properties</Button>
      <div className="seenon-text">As seen on</div>
      <div className="seenon-logos">
        <img src={logoBBC} alt="BBC Logo" />
        <img src={logoForbes} alt="Forbes Logo" />
        <img src={logoTechcrunch} alt="Techcrunch Logo" />
        <img src={logoBI} alt="BI Logo" />
      </div>
    </HeaderStyles>
  )
}

export default Header
