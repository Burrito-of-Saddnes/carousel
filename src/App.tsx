import React, { Component } from "react";
import CarouselComponent from './component/Carousel/CarouselComponent';
import 'css/App.css';

export default class App extends Component {
    render() {
        return(
            <CarouselComponent
                carouselVericalDirecrion = {true}
            >
                <div className="imgWrapper1"/>
                <div className="imgWrapper2"/>
                <CarouselComponent
                    carouselVericalDirecrion = {false}
                >
                    <div className="imgWrapper3"/>
                    <div className="imgWrapper4"/>
                    <div className="imgWrapper5"/>
                </CarouselComponent>
            </CarouselComponent>
        )
    }
}