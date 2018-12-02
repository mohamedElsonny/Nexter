import React from 'react'
import styled from 'styled-components'

const FooterStyles = styled.footer`
  background-color: ${props => props.theme.colors.secondary};
  grid-column: full-start / full-end;
  padding: 8rem;

  .copyright {
    font-size: 1.4rem;
    color: ${props => props.theme.colors.grey_light_2};
    margin: 6rem auto 0;
    text-align: center;
    width: 70%;
  }
`

const NavFooter = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 2rem;
  align-items: center;

  button {
    font-size: 1.4rem;
    border: none;
    border-radius: 0;
    background: none;
    color: #fff;
    line-height: 1.5;
    font-family: ${props => props.theme.fonts.display};
    text-transform: uppercase;
    text-align: center;
    padding: 1.5rem;
    display: block;
    outline: none;

    transition: 0.2s ease-in-out;
  }
  button:hover {
    background-color: rgba(255, 255, 255, 0.05);
    transform: translateY(-3px);
  }
`

const Footer = () => {
  return (
    <FooterStyles>
      <NavFooter>
        <li>
          <button>Find your dream home</button>
        </li>
        <li>
          <button>Request proposal</button>
        </li>
        <li>
          <button>Download home planer</button>
        </li>
        <li>
          <button>Contact us</button>
        </li>
        <li>
          <button>Submit your property</button>
        </li>
        <li>
          <button>Come work with us</button>
        </li>
      </NavFooter>
      <p className="copyright">
        &copy; Copyright 2018. Feel free to use this project for your own
        purposes.
      </p>
    </FooterStyles>
  )
}

export default Footer
