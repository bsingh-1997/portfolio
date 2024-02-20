import React from 'react'
import './third.css'
import boot from './logos/boot.JPG'
import capture from './logos/Capture.JPG'
import css from './logos/css.JPG'
import git from './logos/git.JPG'
import html from './logos/html.JPG'
import node from './logos/node.JPG'
import react from './logos/react.JPG'
import vs from './logos/vs.JPG'
export default function Third() {
  return (
    <div className='thrdbox'>
        <p className='lin1'>A problem is a chance for u to do ur best</p>
        <div className='lin2'>Skills and Experience</div>
        <p className='lin1'>The main area of expertise is front end development (client side of the web)</p>
        <div className='lin4'>HTML, CSS, JS, building small and medium web applications with Html, Css, Javascript, ReactJS, Bootstrap, and Github.</div>
        <a href='https://www.linkedin.com/in/barinder-singh-99a179203/' target='_blank'>

        <div className='lin11'>Visit my linkedin for more details.</div>
        </a>
        <div className='logobox'>
            <img className='logos' src={html}/>
            <img className='logos' src={css}/>
            <img className='logos' src={capture}/>
            <img className='logos' src={react}/>
            <img className='logos' src={node}/>
            <img className='logos' src={vs}/>
            <img className='logos' src={boot}/>
            <img className='logos' src={git}/>
        </div>
    </div>
  )
}
