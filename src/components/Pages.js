import React from 'react'
import Navbar from './Navbar'
import First from './First'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'
import Fifth from './Fifth'
export default function () {
  return (
    <div className='container'>
        <div className='nvb'><Navbar/></div>
        <div className='page'><First/></div>
        <div className='page'><Second/></div>
        <div className='page'><Third/></div>
        <div className='page'><Fourth/></div>
        <div className='page'><Fifth/></div>
    </div>
  )
}
