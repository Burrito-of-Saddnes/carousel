import CarouselStatusStore from "./CarouselStatusStore"

export class RootStore {

    carouselStatusStore: CarouselStatusStore

    constructor() {
        this.carouselStatusStore = new CarouselStatusStore()
    }
}