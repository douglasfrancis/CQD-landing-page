import React from 'react'
import './Team.css'

export default function Team() {
  return (
    <div id='team-container'>
        <div className='staff-container'>
          <img className='staff-img' alt='Jason Sandywell' src='https://firebasestorage.googleapis.com/v0/b/care-quality-digital.appspot.com/o/Website%2Fjason.jpeg?alt=media&token=088cc1ba-225d-45e8-ab5a-633316383516' />
          <h3 className='names'>Jason Sandywell</h3>
          <p>Jason has been working in Care his entire adult life.</p>
          <p>Running his own home care company he noticed some major pitfalls in some of the home care apps available.</p>
          <p>Jason is constantly improving his own company and believes that through this app we can improve care on a national level.</p>


        </div>

        <div className='staff-container'>
          <img className='staff-img' src='https://firebasestorage.googleapis.com/v0/b/care-quality-digital.appspot.com/o/Website%2Fdoug.jpg?alt=media&token=d7b47821-91c2-44bd-9c51-b91f0edb458e' alt='Doug Francis' />
          <h3 className='names'>Doug Francis</h3>
          <p>Doug covers all things techy in Care Quality Digital. </p>
          <p>After Doug and Jason were introduced, it wasn't long before the two were cooking up the business we have today.</p>
          <p>It was a steep learning curve to understand the needs of the care sector, but working closely with Jason, we've been able to make a great system.</p>

        </div>

        <div className='staff-container'>
          <img className='staff-img' alt='Scott' src='https://firebasestorage.googleapis.com/v0/b/care-quality-digital.appspot.com/o/Website%2Fscott.jpeg?alt=media&token=0848d620-91f5-4f75-9fe6-966410b8285d'/>
          <h3 className='names'>Scott</h3>
          <p>After being born with Cerebral Palsy, Scott has been receiving care for a large part of his life.</p>
          <p>Regardless of this hurdel, Scott managed to study Law with much success.</p>
          <p>His insights and input have been highly valuable to Care Quality Digital and is definitely the sensible brains of the bunch!</p>

        </div>
    </div>
  )
}
