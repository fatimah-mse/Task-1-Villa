import React from 'react'
import './ContactUs.css'
import { Form } from '../../Data/Form'
import { data } from '../../Data/ContactData'

export default function ContactUs() {
  return (
    <section className='FM-padding FM-contact'>
        <div className='FM-contact-info'>
            <iframe className='FM-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26030.58455681187!2d35.90898495607581!3d35.36003700158077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1523fe3a68bf33eb%3A0xe07c09df6304fdfe!2sJableh%2C%20Syria!5e0!3m2!1sen!2s!4v1723959805941!5m2!1sen!2s" ></iframe>
            
            {data.map((e,index) => {
                return (
                    <div key={index} className='FM-contact-info-card'>
                        <img src={e.imgURL} />
                        <div>
                            <a href={e.link} target="_blank">{e.txt}</a>
                            <span>{e.span}</span>
                        </div>
                    </div>
                )
            })}
            
        </div>
        <form className='FM-contact-form'>
            {Form.map((e,index) => {
                return (
                    <div key={index}>
                        <label>{e.lable}</label>
                        {e.input}
                    </div>
                )
            })}
            <input className='FM-submit' type="submit" value="Send Message" />
        </form>
      
    </section>
  )
}
