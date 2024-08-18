import React, { useState } from 'react'
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { CarouselData } from '../../Data/CarouselData'

export default function Hero() {
    const [SlideNum, setMove] = useState(0)

    function slideMove(num) {
        setMove(num)
    }

    return (
        <section className='FM-Hero'>
            <div className={`translate${SlideNum} FM-slider`}>
                {CarouselData.map((e, index) => {
                    return (
                        <div key={index} className='FM-slide'>
                            <img className='FM-slide-img' src={e.imgURL} alt="image-slider" />
                            <div className='FM-slider-txt'>
                                <h2 className='FM-carousel-h2-st'>{e.h2FirstWord} <span className='FM-carousel-span'>{e.span}</span></h2>
                                <h2 className='FM-carousel-h2-nd'>{e.title}</h2>
                            </div>
                            <div className='FM-slider-arrow'>
                                <FontAwesomeIcon onClick={() => slideMove(e.previous)} icon={faChevronLeft} />
                                <FontAwesomeIcon onClick={() => slideMove(e.next)} icon={faChevronRight} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
