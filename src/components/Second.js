import React, { useEffect } from 'react'
import './second.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Second() {
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
  return (
    <div className='cnt2'>
        {/* <div className='secondbox' data-aos='fade-right'> */}
        <div className='secondbox' >
            <>
            <div className='headline2' > Hi, I'm Barinder <br></br>Web Developer</div>
            </>
            <>
            <ul>
                <li>Problem Solver, Well organised person with high attention to detail</li>
                <li>Fan of automotive,Outdoor activities and coding ofcourse !</li>
                <li>Intrested in FrontEnd development and working on ambutious projects.</li>
                
                </ul></>
    </div>
             <div className='pgpg2'>Frontend Developer/ReactJs Developer/Javascript</div>
    </div>
  )
}
