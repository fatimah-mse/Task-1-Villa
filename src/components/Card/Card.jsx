import React from 'react'
import './Card.css'

export default function Card({image , category , price , h4 , bedroom , bathrooms , area , floor , parking}) {
  return (
    <div className='FM-card'>
        <img className='FM-card-img' src={image} alt="card-image" />
        <p className="FM-category">
            <span>{category}</span>
            <span>{price}</span>
        </p>
        <h4 className='FM-h4'>{h4}</h4>
        <div className='FM-feature'>
            <p>Bedrooms: <span>{bedroom}</span></p>
            <p>Bathrooms: <span>{bathrooms}</span></p>
            <p>Area: <span>{area}</span></p>
            <p>Floor: <span>{floor}</span></p>
            <p>Parking: <span>{parking}</span></p>
        </div>
        <a href='#' className='FM-schedule-button' target="_blank">Schedule a visit</a>
      
    </div>
  )
}
