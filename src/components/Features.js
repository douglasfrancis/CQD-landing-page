import React from 'react'
import './Features.css'
import FeatureContainer from './FeatureContainer'
import Container from '@mui/material/Container'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Clients from '../Assets/clients.png'
import screenshot from '../Assets/screenshot.png'
import arms from '../Assets/BICEPS.png'
import legs from '../Assets/SHINS.png'

export default function Features() {


  return (
    <main >
        <Container disableGutters maxWidth="md" component="main" sx={{ pt: 8, p: 4, pb: 4, my:3 }}>
          <h2 className='gotham-black' style={{textAlign:'center'}}>
            Standard Features
          </h2>

          <p className='gotham-bold' style={{textAlign:'center', fontSize: 20, color: '#919191'}}>
            At Care Quality Digital, we believe that all features should come as standard to ensure even the smallest care providers have the tools to support their compliance with CQC
          </p>
          </Container>

          <section id='client-container'>

           
            <div id='client-features'>
              <h2 className='gotham-black' style={{fontSize:30}}>Clients</h2>
              <p className='gotham-bold' style={{ fontSize: 20, color: '#919191'}}>Client management is a critical function for any home care provider.<br/><br/> Our client management system helps home care providers improve efficiency, reduce costs, and improve the quality of care they provide.</p>

              <div>
                <img className='body-map' src={arms}/>
                <img className='body-map' src={legs}/>
              </div>
              <div className='feature-list'>
                <FeatureContainer title='Medication and eMar' icon='medication_icon'
                  description="Add all your clients medical requirements and visually manage their administering of medication using the eMAR."/>
                  <FeatureContainer title='Client Tasks' icon='task_alt_icon'
                  description="Assign tasks to client visits and staff can easily view and complete them within the mobile app."/>
                  <FeatureContainer title='Care Plans' icon='library_books_icon'
                  description=""/>
                  <FeatureContainer title='Risk Assessments' icon='report_problem_icon'
                  description=""/>
                  <FeatureContainer title='Electronic Notes' icon='note_add_icon'
                  description="Quickly make notes for each visit using the mobile app."/>
              </div>

            </div>

            <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                <img className='screenshot'  src={Clients} alt="Domiciliary Home care app - Care Quality Digital client screen "/>
                <i style={{color:'#266', marginTop: 20}}>Client list overview - Snapshot of clients name, image, DOB and address</i>

            </div>
            
          </section>

          <section id='staff-container'>

            <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', marginRight: 20}}>

              <img className='screenshot' src={screenshot} alt=""/>
              <i style={{color:'#266', marginTop: 20}}>Staff rota view - Quickly create custom rotas for all your staff</i>

            </div>
            
            <div id='staff-features'>
            <h2 className='gotham-black'>Staff</h2>
            <p className='gotham-bold' style={{ fontSize: 20, color: '#919191'}}>Our home care app makes it easy to create and manage staff schedules, request and manage holidays and absence, communicate with staff, access important documents, and generate reports.</p>
            <div className='feature-list'>
              <FeatureContainer title='Staff Rota' icon='event_available_icon' 
                description="Seamlesly manage all your care staff, anytime and anywhere."/>
                <FeatureContainer title='Staff Mobile App' icon='phone_iphone_icon'
                description="Access to shifts and visits for all carers. Available on both Android and Apple."/>
                <FeatureContainer title='Geographical Locator' icon='location_on_icon'
                description="Visually keep tabs on all your workers whilst on shift."/>
                <FeatureContainer title='Digital Policies' icon='post_add_icon'
                description="Keep all your company policies in one place with quick and easy access."/>
           </div>
            </div>
            
          </section>
    
    </main>
  )
}
