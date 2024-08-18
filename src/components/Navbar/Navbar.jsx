import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import { NavLinks } from '../../Data/NavLinks'
import ScheduleBtn from '../ScheduleBtn/ScheduleBtn'

export default function Navbar() {

    const [header, setHeader] = useState(false)
    const [navList, NavListShow] = useState(false)
    const [activeLink, setActiveLink] = useState(0)
    
    function ActiveLinks(index) {
        if (activeLink === index) {
            setActiveLink(0)
        } else {
            setActiveLink(index)
        }
    }

    function setNavListShow () {
        NavListShow(!navList)
    }

    function handleScroll () 
    {
        if (window.scrollY > 50) {
        setHeader(true)
        }
        else {
        setHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
        window.removeEventListener('scroll', handleScroll)
        }
    }, [header])

    return (
        <nav className={`FM-navbar FM-padding ${header? 'FM-navbar-scroll' : 'FM-navbar-normal'}`}>
            <h1 className={`FM-H1 ${header? 'FM-nav-dark-mood' : 'FM-nav-light-mood'}`}>VILLA</h1>
                <ul className={`${navList? 'FM-list-responsive' : 'FM-list'} ${header? 'FM-nav-list-dark-mood' : 'FM-nav-list-light-mood'}`}>
                    {NavLinks.map((e,index) => {
                        return (
                            <li key={index}>
                                <a className={`FM-list-item ${activeLink === index ? 'FM-active-link' : ''} ${header ? 'FM-nav-dark-mood' : 'FM-nav-light-mood'} `}
                                    href={e.href}
                                    onClick={() => ActiveLinks(index)}>
                                    {e.item}
                                </a>
                            </li>
                        )
                    })}
                    <li><ScheduleBtn mood={header? 'FM-schedule-link-dark' : 'FM-schedule-link-light'}/></li>
                </ul>
            <FontAwesomeIcon onClick={setNavListShow} className={`FM-nav-btn ${header? 'FM-nav-dark-mood' : 'FM-nav-light-mood'}`} icon={navList ? faXmark : faBarsStaggered} />
            
        
        </nav>
    )
}
