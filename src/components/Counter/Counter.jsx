import React from 'react'
import './Counter.css'
import { CounterData } from '../../Data/CounterData'
import CounterCard from '../CounterCard/CounterCard'

export default function Counter() {
    return (
        <div className='FM-padding FM-counter'>
            {CounterData.map((e,index) => {
                return (
                    <CounterCard key={index} 
                                num={e.num}
                                h2={e.h2}
                                p={e.p}
                    />
                )
            }) }
        </div>
    )
}
