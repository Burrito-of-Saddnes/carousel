import { action, observable } from 'mobx'
import { makeObservable } from 'mobx'
import { CarouselStatus } from "utils/CarouselStatus"

export default class CarouselStatusStore {

    @observable
    carouselStatus: CarouselStatus

    constructor() {
        this.carouselStatus = CarouselStatus.VERTICAL
        makeObservable(this)
    }
    
    @action
    public triggerVertical = () => {
        this.carouselStatus = CarouselStatus.VERTICAL;
    }

    @action
    public triggerHorizontal = () => {
        this.carouselStatus = CarouselStatus.HORIZONTAL;
    } 

}