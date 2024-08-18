import React, { useState } from 'react'
import './FeaturedSection.css'
import { AccordionData } from '../../Data/AccordionData'
import { InfoData } from '../../Data/InfoData';

export default function FeaturedSection() {
    
    const [shown , setShow] = useState (0)

    function ShowAccordion (index) {
        if (shown === index) {
            setShow(-1);
        } else {
            setShow(index);
        }
    }

    return (
        <section className='FM-padding FM-sec-1'>
            <div className='FM-div-35'>
                <div className='icon-featured'>
                    <img src="./images/featured-icon.png" />
                </div>
                <img src="./images/featured.jpg" />
            </div> 
            <div className='FM-div-40'>
                <h6 className='FM-h6'>| Featured</h6>
                <h2 className='FM-h2'>Best Appartment & Sea View</h2>
                <div className='FM-accordion'>
                    {AccordionData.map((e, index) => {
                        return (
                            <div key={index} >
                                <h4 className={`${shown === index ? 'FM-accordion-show' : ''} FM-Question`} onClick={() => ShowAccordion (index)}>{e.question}</h4>
                                {shown === index && (
                                    <p className='FM-accordion-desc'>
                                        {e.firstWord} 
                                        <strong>{e.strong}</strong>
                                        {e.paragragh1} 
                                        <span className={e.spanClass}>{e.spanWord}</span>
                                        {e.paragraph2}
                                    </p>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div> 
            <div className='FM-div-25'>
                {InfoData.map((e , index) => {
                    return (
                        <div key={index} className={`${e.borderClass} FM-info`}>
                            <img src={e.image} alt="info-image" />
                            <div>
                                <h4>{e.title}</h4>
                                <p>{e.desc}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}
