import React from 'react'
import styled from 'styled-components'

import house_1 from '../img/house-1.jpeg'
import house_2 from '../img/house-2.jpeg'
import house_3 from '../img/house-3.jpeg'
import house_4 from '../img/house-4.jpeg'
import house_5 from '../img/house-5.jpeg'
import house_6 from '../img/house-6.jpeg'
import { Button } from './styles/Buttons'

const HomesStyles = styled.section`
  grid-column: center-start / center-end;

  margin: 15rem 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 7rem;
`

const HomeStyle = styled.div`
  background-color: ${props => props.theme.colors.grey_light_1};

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 3.5rem;

  .home__img {
    width: 100%;
    grid-column: 1 / -1;
    grid-row: 1 / 2;
  }

  .home__like {
    grid-column: 2 / 3;
    grid-row: 1 / 2;

    fill: ${props => props.theme.colors.primary};
    height: 2.5rem;
    width: 2.5rem;
    margin: 1rem;

    justify-self: end;
  }

  h5 {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    justify-self: center;
    align-self: end;

    font-family: ${props => props.theme.fonts.display};
    font-size: 1.6rem;
    text-align: center;
    padding: 1.25rem;
    background-color: ${props => props.theme.colors.secondary};
    color: white;
    font-weight: 400;
    width: 80%;
    transform: translateY(50%);
  }

  button {
    grid-column: 1 / -1;
  }
`

const HomeDetail = styled.div`
  &.rooms,
  &.location {
    margin-top: 2.5rem;
  }

  font-size: 1.5rem;
  margin-left: 2rem;

  display: flex;
  align-items: center;

  svg {
    fill: ${props => props.theme.colors.primary};
    height: 2rem;
    width: 2rem;
    margin-right: 1rem;
  }
`

const Homes = () => {
  return (
    <HomesStyles>
      <HomeStyle>
        <img src={house_1} alt="House 1" className="home__img" />
        <svg className="home__like">
          <use xlinkHref="sprite.svg#icon-heart-full" />
        </svg>
        <h5>Beautiful family house</h5>
        <HomeDetail className="location">
          <svg>
            <use xlinkHref="sprite.svg#icon-map-pin" />
          </svg>
          <p>USA</p>
        </HomeDetail>
        <HomeDetail className="rooms">
          <svg>
            <use xlinkHref="sprite.svg#icon-profile-male" />
          </svg>
          <p>5 rooms</p>
        </HomeDetail>
        <HomeDetail>
          <svg>
            <use xlinkHref="sprite.svg#icon-expand" />
          </svg>
          <p>
            325 m<sup>2</sup>
          </p>
        </HomeDetail>
        <HomeDetail>
          <svg>
            <use xlinkHref="sprite.svg#icon-key" />
          </svg>
          <p>$1,200,000</p>
        </HomeDetail>
        <Button>Contact Realtor</Button>
      </HomeStyle>
      <HomeStyle>
        <img src={house_2} alt="House 2" className="home__img" />
        <svg className="home__like">
          <use xlinkHref="sprite.svg#icon-heart-full" />
        </svg>
        <h5>Modern glass villa</h5>
        <HomeDetail className="location">
          <svg>
            <use xlinkHref="sprite.svg#icon-map-pin" />
          </svg>
          <p>Canada</p>
        </HomeDetail>
        <HomeDetail className="rooms">
          <svg>
            <use xlinkHref="sprite.svg#icon-profile-male" />
          </svg>
          <p>6 rooms</p>
        </HomeDetail>
        <HomeDetail>
          <svg>
            <use xlinkHref="sprite.svg#icon-expand" />
          </svg>
          <p>
            450 m<sup>2</sup>
          </p>
        </HomeDetail>
        <HomeDetail>
          <svg>
            <use xlinkHref="sprite.svg#icon-key" />
          </svg>
          <p>$2,750,000</p>
        </HomeDetail>
        <Button>Contact Realtor</Button>
      </HomeStyle>
      <HomeStyle>
        <img src={house_3} alt="House 3" className="home__img" />
        <svg className="home__like">
          <use xlinkHref="sprite.svg#icon-heart-full" />
        </svg>
        <h5>Cozy country house</h5>
        <HomeDetail className="location">
          <svg>
            <use xlinkHref="sprite.svg#icon-map-pin" />
          </svg>
          <p>UK</p>
        </HomeDetail>
        <HomeDetail className="rooms">
          <svg>
            <use xlinkHref="sprite.svg#icon-profile-male" />
          </svg>
          <p>4 rooms</p>
        </HomeDetail>
        <HomeDetail>
          <svg>
            <use xlinkHref="sprite.svg#icon-expand" />
          </svg>
          <p>
            250 m<sup>2</sup>
          </p>
        </HomeDetail>
        <HomeDetail>
          <svg>
            <use xlinkHref="sprite.svg#icon-key" />
          </svg>
          <p>$850,000</p>
        </HomeDetail>
        <Button>Contact Realtor</Button>
      </HomeStyle>
      <HomeStyle>
        <img src={house_4} alt="House 4" className="home__img" />
        <svg className="home__like">
          <use xlinkHref="sprite.svg#icon-heart-full" />
        </svg>
        <h5>Large Rustical villa</h5>
        <HomeDetail className="location">
          <svg>
            <use xlinkHref="sprite.svg#icon-map-pin" />
          </svg>
          <p>Portugal</p>
        </HomeDetail>
        <HomeDetail className="rooms">
          <svg>
            <use xlinkHref="sprite.svg#icon-profile-male" />
          </svg>
          <p>6 rooms</p>
        </HomeDetail>
        <HomeDetail>
          <svg>
            <use xlinkHref="sprite.svg#icon-expand" />
          </svg>
          <p>
            480 m<sup>2</sup>
          </p>
        </HomeDetail>
        <HomeDetail>
          <svg>
            <use xlinkHref="sprite.svg#icon-key" />
          </svg>
          <p>$1,950,000</p>
        </HomeDetail>
        <Button>Contact Realtor</Button>
      </HomeStyle>
      <HomeStyle>
        <img src={house_5} alt="House 5" className="home__img" />
        <svg className="home__like">
          <use xlinkHref="sprite.svg#icon-heart-full" />
        </svg>
        <h5>Majestic Palace house</h5>
        <HomeDetail className="location">
          <svg>
            <use xlinkHref="sprite.svg#icon-map-pin" />
          </svg>
          <p>Germany</p>
        </HomeDetail>
        <HomeDetail className="rooms">
          <svg>
            <use xlinkHref="sprite.svg#icon-profile-male" />
          </svg>
          <p>18 rooms</p>
        </HomeDetail>
        <HomeDetail>
          <svg>
            <use xlinkHref="sprite.svg#icon-expand" />
          </svg>
          <p>
            4230 m<sup>2</sup>
          </p>
        </HomeDetail>
        <HomeDetail>
          <svg>
            <use xlinkHref="sprite.svg#icon-key" />
          </svg>
          <p>$9,500,000</p>
        </HomeDetail>
        <Button>Contact Realtor</Button>
      </HomeStyle>
      <HomeStyle>
        <img src={house_6} alt="House 6" className="home__img" />
        <svg className="home__like">
          <use xlinkHref="sprite.svg#icon-heart-full" />
        </svg>
        <h5>Modern family apartment</h5>
        <HomeDetail className="location">
          <svg>
            <use xlinkHref="sprite.svg#icon-map-pin" />
          </svg>
          <p>Italy</p>
        </HomeDetail>
        <HomeDetail className="rooms">
          <svg>
            <use xlinkHref="sprite.svg#icon-profile-male" />
          </svg>
          <p>3 rooms</p>
        </HomeDetail>
        <HomeDetail>
          <svg>
            <use xlinkHref="sprite.svg#icon-expand" />
          </svg>
          <p>
            180 m<sup>2</sup>
          </p>
        </HomeDetail>
        <HomeDetail>
          <svg>
            <use xlinkHref="sprite.svg#icon-key" />
          </svg>
          <p>$600,000</p>
        </HomeDetail>
        <Button>Contact Realtor</Button>
      </HomeStyle>
    </HomesStyles>
  )
}

export default Homes
