import React from 'react'
import styled from 'styled-components'

const SidebarStyles = styled.div`
  background-color: ${props => props.theme.colors.primary};
  grid-column: sidebar-start / sidebar-end;
  grid-row: 1 / -1;

  display: flex;
  justify-content: center;

  @media only screen and (max-width: ${props =>
      props.theme.breackpoints.large}) {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    justify-content: flex-end;
    align-items: center;
  }

  .nav-btn {
    border: none;
    border-radius: 0;
    margin-top: 4rem;

    background-color: #fff;
    height: 2px;

    width: 4.5rem;
    &::before,
    &::after {
      background-color: #fff;
      height: 2px;
      width: 4.5rem;
      content: '';
      display: block;
    }

    &::before {
      transform: translateY(-1.5rem);
    }

    &::after {
      transform: translateY(1.3rem);
    }

    @media only screen and (max-width: ${props =>
        props.theme.breackpoints.large}) {
      margin-top: 0;
      margin-right: 2rem;

      &::before {
        transform: translateY(-1.3rem);
      }

      &::after {
        transform: translateY(1rem);
      }
    }
  }
`

const Sidebar = () => {
  return (
    <SidebarStyles>
      <button className="nav-btn" />
    </SidebarStyles>
  )
}

export default Sidebar
