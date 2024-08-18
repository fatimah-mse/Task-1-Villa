import React, { useState } from 'react'
import './BestDeal.css'
import { FilterationData } from '../../Data/FilterationData'
import ScheduleBtn from '../ScheduleBtn/ScheduleBtn'

const btns = [
    {
        txt: 'Appartment'
    },
    {
        txt: 'Villa House'
    },
    {
        txt: 'Penthouse'
    }
]

export default function BestDeal() {

    const [activeBTN, setActiveBTN] = useState(0)

    function ActiveBTNs(index) {
        if (activeBTN === index) {
            setActiveBTN(0)
        } else {
            setActiveBTN(index)
        }
    }
    return (
        <section className='FM-best-deal FM-padding'>
            <div className='FM-deal-btns'>
                <div className='FM-deal'>
                    <h6 className='FM-h6'>| Best Deal</h6>
                    <h2 className='FM-h2'>Find Your Best Deal Right Now!</h2>
                </div>
                <div className='FM-btn'>
                    {btns.map((e,index) => {
                        return (
                            <button key={index} onClick={() => ActiveBTNs(index)} className={`${activeBTN === index ? 'FM-active-btn' : 'FM-normal-btn'}`}>{e.txt}</button>
                        )
                    })}
                </div>
            </div>
            
            {FilterationData.map((data, index) => {
                if (activeBTN === index) {
                    return (
                        <div key={index} className='FM-deal-filteration'>
                            <div className='FM-deal-filteration-div1'>
                                {data.div1.map((e, i) => (
                                    <div key={i} className={e.borderClass}>
                                        <h4>{e.title}</h4>
                                        <h3>{e.desc}</h3>
                                    </div>
                                ))}
                            </div>
                            <img className='FM-deal-filteration-img' src={data.imgURL} alt="img-deal" />
                            {data.div2.map((e, i) => (
                                <div key={i} className='FM-deal-filteration-div2'>
                                    <h4>{e.h4}</h4>
                                    <p>{e.desc1}</p>
                                    <p>{e.desc2}</p>
                                    <ScheduleBtn mood={'FM-schedule-link-light'} />
                                </div>
                                
                            ))}
                        </div>
                    )

                } 
            })}

        </section>
    )
}
