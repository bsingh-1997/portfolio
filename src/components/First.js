import React, { useEffect } from 'react'
import './first.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import code from './code.png'
export default function First() {
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
    return (
        <div className='parent'>
    <div className='firstbox' data-aos='fade-right' data-aos-duration="3000">
        <div className='headline'>Front-End Software <br></br>Developer</div>
        <div className='pgpg'>Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences.</div>
        <div className='abt'>About Me  </div>
    </div>
    <img className='codepic' data-aos='fade-right' data-aos-duration="1000" src={code} alt="code"/>
        </div>
    
  )
}
