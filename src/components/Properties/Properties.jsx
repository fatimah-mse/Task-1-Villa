import React from 'react'
import './Properties.css'
import { CardData } from '../../Data/CardData'
import Card from '../Card/Card'

export default function Properties() {
  return (
    <section className='FM-padding FM-properties'>
        <h6 className='FM-h6'>| Properties</h6>
        <h2 className='FM-h2'>We Provide The Best Property You Like</h2>
        <div className='FM-properties-cards'>
            {CardData.map((e, index) => {
                return (
                    <Card key={index}
                            image={e.imgURL}
                            category={e.categoty}
                            price={e.price}
                            h4={e.h4}
                            bedroom={e.bathroom}
                            bathrooms={e.bathroom}
                            area={e.area}
                            floor={e.floor}
                            parking={e.parking}
                    />
                )
            })}
        </div>
        
      
    </section>
  )
}
