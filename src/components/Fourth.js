import React from 'react'
import './forth.css'
import bscustoms from './websitesnaps/Capture.JPG'
import cn from './websitesnaps/cn.JPG'
import pf from './websitesnaps/pf.JPG'
import tv from './websitesnaps/tv.JPG'
import tvv from './websitesnaps/Captureee.JPG'
import calc from './websitesnaps/Capturecc.JPG'
import oip from './websitesnaps/Capturewh.JPG'
export default function Fourth() {
  return (
    <div className='forthbox'>
    <div className='proje'>Portfolio and Previous Projects</div>
    <div className='lin44'>I have built various different projects using ReactJs. </div>
    <div className='projectsbox'>
        <div className='projects'> 
            <a href="https://bsingh-1997.github.io/bscustomz/#/" target="_blank" rel="noopener noreferrer">
            <img className='websnap' src={bscustoms}/>
            </a>
            <div>BsCustomz</div>
            {/* <div className='pdesc'>Technologies used: Html,Css,Javascript,ReactJs,Bootstrap,AOS,ReactRouter,EmailJs</div> */}
        {/* <ul>
            <li className='ptext'>technologies used:</li>
            <li>list1</li>
            <li>list1</li>
           
            </ul> */}
            </div>
            
        <div className='projects'>
        <a href="https://bsingh-1997.github.io/crypto/" target="_blank" rel="noopener noreferrer">
            <img className='websnap' src={cn}/>
        </a>
            <div>Crypto Nexus</div>
            </div>
        <div className='projects'> 
        <a href="https://bsingh-1997.github.io/Postal-Finder/" target="_blank" rel="noopener noreferrer">
            <img className='websnap' src={pf}/>
        </a>
            <div>Postal Finder</div>
            </div>
        <div className='projects'> 
        <a href="https://bsingh-1997.github.io/travel-website/" target="_blank" rel="noopener noreferrer">
            <img className='websnap' src={tv}/>
        </a>
            <div>Travel App</div>
            </div>
       
            
       
        <div className='projects'> 
        <a href="https://bsingh-1997.github.io/IPTRACKER/" target="_blank" rel="noopener noreferrer">
            <img className='websnap' src={tvv}/>
        </a>
            <div>IP Tracker</div>
            </div>
        <div className='projects'> 
        <a href="https://bsingh-1997.github.io/Calculator/" target="_blank" rel="noopener noreferrer">
            <img className='websnap' src={calc}/>
        </a>
            <div>Calculator</div>
            </div>
        <div className='projects'> 
        <a href="" target="_blank" rel="noopener noreferrer">
        </a>
            <img className='websnap' src={oip}/>
            <div>----</div>
            </div>
            <div className='projects'> 
        <a href="" target="_blank" rel="noopener noreferrer">
        </a>
            <img className='websnap' src={oip}/>
            <div>----</div>
            {/* <div className='pdesc'>Technologies used: Html,Css,Javascript,ReactJs,Bootstrap,AOS,ReactRouter,EmailJs</div> */}
        {/* <ul>
            <li className='ptext'>technologies used:</li>
            <li>list1</li>
            <li>list1</li>
           
            </ul> */}
            </div>
    </div>
    </div>
  )
}
