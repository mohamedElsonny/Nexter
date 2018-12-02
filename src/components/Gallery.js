import React from 'react'
import styled from 'styled-components'

import img_1 from '../img/gal-1.jpeg'
import img_2 from '../img/gal-2.jpeg'
import img_3 from '../img/gal-3.jpeg'
import img_4 from '../img/gal-4.jpeg'
import img_5 from '../img/gal-5.jpeg'
import img_6 from '../img/gal-6.jpeg'
import img_7 from '../img/gal-7.jpeg'
import img_8 from '../img/gal-8.jpeg'
import img_9 from '../img/gal-9.jpeg'
import img_10 from '../img/gal-10.jpeg'
import img_11 from '../img/gal-11.jpeg'
import img_12 from '../img/gal-12.jpeg'
import img_13 from '../img/gal-13.jpeg'
import img_14 from '../img/gal-14.jpeg'

const GalleryStyles = styled.section`
  background-color: ${props => props.theme.colors.grey_light_1};
  grid-column: full-start / full-end;

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(7, 5vw);
  grid-auto-flow: dense;
  grid-gap: 1.5rem;
  padding: 1.5rem;
`

const FigureGallery = styled.figure`
  &.figure--1 {
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
  }

  &.figure--2 {
    grid-column: 3 / span 3;
    grid-row: 1 / span 3;
  }

  &.figure--3 {
    grid-column: 6 / 7;
    grid-row: 1 / span 2;
  }

  &.figure--4 {
    grid-column: 7 / -1;
    grid-row: 1 / span 2;
  }

  &.figure--5 {
    grid-column: 1 / span 2;
    grid-row: 3 / span 3;
  }

  &.figure--6 {
    grid-column: 3 / span 2;
    grid-row: 4 / span 2;
  }

  &.figure--7 {
    grid-column: 5 / 6;
    grid-row: 4 / 5;
  }

  &.figure--8 {
    grid-column: 6 / span 2;
    grid-row: 3 / span 2;
  }

  &.figure--9 {
    grid-column: 8 / -1;
    grid-row: 3 / span 3;
  }

  &.figure--10 {
    grid-column: 1 / 2;
    grid-row: 6 / span 2;
  }

  &.figure--11 {
    grid-column: 2 / span 2;
    grid-row: 6 / span 2;
  }

  &.figure--12 {
    grid-column: 4 / 5;
    grid-row: 6 / span 2;
  }

  &.figure--13 {
    grid-column: 5 / span 3;
    grid-row: 5 / span 3;
  }

  &.figure--14 {
    grid-column: 8 / -1;
    grid-row: 6 / span 2;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

const Gallery = () => {
  return (
    <GalleryStyles>
      <FigureGallery className="figure--1">
        <img src={img_1} alt="Gallery 1" />
      </FigureGallery>
      <FigureGallery className="figure--2">
        <img src={img_2} alt="Gallery 2" />
      </FigureGallery>
      <FigureGallery className="figure--3">
        <img src={img_3} alt="Gallery 3" />
      </FigureGallery>
      <FigureGallery className="figure--4">
        <img src={img_4} alt="Gallery 4" />
      </FigureGallery>
      <FigureGallery className="figure--5">
        <img src={img_5} alt="Gallery 5" />
      </FigureGallery>
      <FigureGallery className="figure--6">
        <img src={img_6} alt="Gallery 6" />
      </FigureGallery>
      <FigureGallery className="figure--7">
        <img src={img_7} alt="Gallery 7" />
      </FigureGallery>
      <FigureGallery className="figure--8">
        <img src={img_8} alt="Gallery 8" />
      </FigureGallery>
      <FigureGallery className="figure--9">
        <img src={img_9} alt="Gallery 9" />
      </FigureGallery>
      <FigureGallery className="figure--10">
        <img src={img_10} alt="Gallery 10" />
      </FigureGallery>
      <FigureGallery className="figure--11">
        <img src={img_11} alt="Gallery 11" />
      </FigureGallery>
      <FigureGallery className="figure--12">
        <img src={img_12} alt="Gallery 12" />
      </FigureGallery>
      <FigureGallery className="figure--13">
        <img src={img_13} alt="Gallery 13" />
      </FigureGallery>
      <FigureGallery className="figure--14">
        <img src={img_14} alt="Gallery 14" />
      </FigureGallery>
    </GalleryStyles>
  )
}

export default Gallery
