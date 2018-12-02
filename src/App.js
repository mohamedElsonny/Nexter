import React, { Component } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Realtors from './components/Realtors'
import Features from './components/Features'
import StoryPics from './components/StoryPics'
import StoryContent from './components/StoryContent'
import Homes from './components/Homes'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;

    @media only screen and (max-width: ${props =>
      props.theme.breackpoints.largest}) {
      font-size: 50%;
    }
  }

  *,*::after,*::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 1.6rem;
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.grey_dark_2};
    font-weight: 300;
    line-height: 1.6;
  }

  ul {
    list-style: none;
  }

  a {
    color: ${props => props.theme.colors.grey_dark_1};
    text-decoration: none;
  }
`

const theme = {
  colors: {
    primary: '#c69963',
    primary_dark: '#b28451',
    secondary: '#101d2c',
    grey_light_1: '#f9f7f6',
    grey_light_2: '#aaa',
    grey_dark_1: '#54483a',
    grey_dark_2: '#6d5d4b'
  },
  fonts: {
    primary: '"Nunito", sans-serif',
    display: '"Josefin Sans", sans-serif'
  },
  breackpoints: {
    largest: '75em', // 1200px  get it by deviding with 16 default font size
    large: '62.5em', // 1000px
    medium: '50em', // 800px
    small: '37.5em' //600px
  }
}

const PageStyles = styled.div`
  display: grid;
  grid-template-rows: 80vh min-content 40vw repeat(3, min-content);
  grid-template-columns:
    [sidebar-start] 8rem [sidebar-end full-start] minmax(6rem, 1fr)
    [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end])
    [center-end] minmax(6rem, 1fr) [full-end];

  @media only screen and (max-width: ${props =>
      props.theme.breackpoints.large}) {
    grid-template-rows: 6rem 80vh min-content 40vw repeat(3, min-content);
    grid-template-columns:
      [full-start] minmax(6rem, 1fr)
      [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end])
      [center-end] minmax(6rem, 1fr) [full-end];
  }

  @media only screen and (max-width: ${props =>
      props.theme.breackpoints.medium}) {
    grid-template-rows: 6rem calc(100vh - 6rem);
  }
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <PageStyles>
          <Sidebar />
          <Header />
          <Realtors />
          <Features />
          <StoryPics />
          <StoryContent />
          <Homes />
          <Gallery />
          <Footer />
          <GlobalStyles />
        </PageStyles>
      </ThemeProvider>
    )
  }
}

export default App
