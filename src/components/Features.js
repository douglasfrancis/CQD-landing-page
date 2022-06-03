import React from 'react'
import Navbar from './Navbar'
import './Features.css'

export default function Features() {
  return (
    <div id="features">
        <Navbar />

        <section id='section1'>
            <div className='desc-section'>
            <img id='lights-img' src={'https://care-quality-digital-resources.s3.eu-west-2.amazonaws.com/lights.png'} alt={"traffic lights"} />

            </div>

            <div className='coloured-section'>

                <h2>Quality & CQC Compliance</h2>
            </div>


        </section>

        
        <img id='desktop-img' src={'https://care-quality-digital-resources.s3.eu-west-2.amazonaws.com/dashboard.png'}/>
      

           


        
    </div>
  )
}
