import React from 'react'
import './ViewSection.css'

export default function ViewSection({url , h6 , h2}) {
    return (
        <section className='FM-sec-2'>
            <img src={url} />
            <div className='FM-padding'>
                <h6 className='FM-h6'>| {h6}</h6>
                <h2 className='FM-h2'>{h2}</h2>
            </div>
            
        </section>
    )
}
