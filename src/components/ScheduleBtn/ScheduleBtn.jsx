import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './ScheduleBtn.css'

export default function ScheduleBtn({mood}) {
    return (
        <div className='FM-schedule-btn'>
            <FontAwesomeIcon className='FM-schedule-icon' icon={faCalendar} />
            <a href='#' className={`FM-schedule-link ${mood}`} target="_blank">Schedule a visit</a>
        </div>
    )
}
