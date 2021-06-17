import React, { Component } from "react";
import CarouselHorizontal from 'component/Carousel/CarouselHorizontal'
import CarouselVerical from 'component/Carousel/CarouselVerical'

interface CarouselComponentProps {
  carouselVericalDirecrion?: boolean
}

export default class CarouselComponent extends Component<CarouselComponentProps, {}> {
  render() {

    const {
      carouselVericalDirecrion,
      children
    } = this.props

    return(
      <div>
        { carouselVericalDirecrion === true ? (
          <CarouselVerical>
            {children}
          </CarouselVerical>
          ) : carouselVericalDirecrion === false ? (
          <CarouselHorizontal>
            {children}
          </CarouselHorizontal>
        ) : "" 
        }
      </div>
    )
  }
}

