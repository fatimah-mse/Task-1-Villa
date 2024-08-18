import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import './VideoPlay.css'

export default function VideoPlay() {
    return (
        <div className='FM-video-play'>
            <a className='FM-video-link' href="https://youtube.com" target="_blank">
                <FontAwesomeIcon className='FM-video-icon' icon={faPlay} />
            </a>
        </div>
    )
}
