import styled, { css } from 'styled-components'

const HeadingGeneralStyles = css`
  font-family: ${props => props.theme.fonts.display};
  font-weight: 400;
  line-height: 1.2;
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'initial')};
  color: ${props =>
    props.light
      ? props.theme.colors.grey_light_1
      : props.theme.colors.grey_dark_1};
`

const H1 = styled.h1`
  ${HeadingGeneralStyles};

  font-size: 4.5rem;
  line-height: 1;
`
const H2 = styled.h2`
  ${HeadingGeneralStyles};

  font-size: 4rem;
  font-style: italic;
`
const H3 = styled.h3`
  ${HeadingGeneralStyles};

  font-size: 1.6rem;
  color: ${props => props.theme.colors.primary};
`
const H4 = styled.h4`
  ${HeadingGeneralStyles};

  font-size: 1.9rem;
`

export { H1, H2, H3, H4 }
