import React, { useEffect, useState } from 'react'
import 'css/CarouselHorizontal.css'

const CarouselHorizontal = (props: { children: any }) => {
    const {
        children
    } = props

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    const [touchPosition, setTouchPosition] = useState(null)

    useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    const handleTouchStart = (e:any) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e:any) => {
        const touchDown = touchPosition

        if(touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            next()
        }

        if (diff < -5) {
            prev()
        }

        setTouchPosition(null)
    }

    return (
        <div className="carouselHorizontal-container">
            <div className="carouselHorizontal-wrapper">
                {
                    currentIndex > 0 &&
                    <button onClick={prev} className="leftH-arrow">
                        &lt;
                    </button>
                }
                <div
                    className="carouselHorizontal-content-wrapper"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <div
                        className="carouselHorizontal-content"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {children}
                    </div>
                </div>
                {
                    currentIndex < (length - 1) &&
                    <button onClick={next} className="rightH-arrow">
                        &gt;
                    </button>
                }
            </div>
        </div>
    )
}

export default CarouselHorizontal
