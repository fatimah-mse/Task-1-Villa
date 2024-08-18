import React from 'react'
import './CounterCard.css'

export default function CounterCard({num , h2 ,p}) {
  return (
        <div className='FM-number-card'>
            <h2 className='FM-number'>{num}</h2>
            <div>
                <h2 className='FM-number-title'>{h2}</h2>
                <p className='FM-number-desc'>{p}</p>
            </div>
        </div>
  )
}
