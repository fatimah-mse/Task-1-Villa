import React from 'react'
import './TopNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons'
import { links } from '../../Data/TopNavLinks'


export default function TopNav() {
    return (
        <div className='FM-padding FM-top-nav'>
            <div>
                <a target="_blank" href='mailto: fatimahmse83@gmail.com'><FontAwesomeIcon className='FM-top-nav-icon' icon={faEnvelope} />fatimahmse83@gmail.com </a>
                <span> | </span>
                <a target="_blank" href='https://maps.app.goo.gl/V227vjXTL8kNKgLv7'> <FontAwesomeIcon className='FM-top-nav-icon' icon={faMap} />Jableh Latakia Syria</a>
            </div>
            <div>
                {links.map((e,index) => {
                    return (
                        <a key={index} href={e.href} target="_blank"><FontAwesomeIcon className='FM-top-nav-icon' icon={e.icon} /></a>
                    )
                })}
            </div>
        </div>
    )
}
