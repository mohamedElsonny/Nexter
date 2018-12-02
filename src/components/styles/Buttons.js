import styled from 'styled-components'
export const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 0;
  padding: 1.8rem 3rem;
  cursor: pointer;

  font-family: ${props => props.theme.fonts.display};
  font-size: 1.5rem;
  text-transform: uppercase;

  transition: all 0.2s ease-in-out;

  :hover {
    background-color: ${props => props.theme.colors.primary_dark};
  }
`
