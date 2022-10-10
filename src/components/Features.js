import React from 'react'
import Navbar from './Navbar'
import './Features.css'
import FeatureContainer from './FeatureContainer'
import Footer from './Footer'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Features() {


  return (
    <div >
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, p: 4, pb: 4 }}>
          <Typography
            component="h1"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Standard Features
          </Typography>

          <Typography
            variant="h5" align="center" color="text.secondary" component="p"
          >
            At Care Quality Digital, we believe that all features should come as standard to ensure even the smallest companies have the tools to support their compliance with CQC
          </Typography>
          </Container>

          <section id='staff-container'>
           
            <div className='width-40' id='first-carousel'>
              <Carousel autoPlay={true} showArrows={true} showStatus={false} infiniteLoop={true}  >
                <FeatureContainer title='Staff Rota' icon='event_available_icon' 
                description="Seamlesly manage all your care staff, anytime and anywhere."/>
                <FeatureContainer title='Staff Mobile App' icon='phone_iphone_icon'
                description="Access to shifts and visits for all carers. Available on both Android and Apple."/>
                <FeatureContainer title='Geographical Locator' icon='location_on_icon'
                description="Visually keep tabs on all your workers whilst on shift."/>
                <FeatureContainer title='Digital Policies' icon='post_add_icon'
                description="Keep all your company policies in one place with quick and easy access."/>
              </Carousel>
            </div>

            <div className='width-60'>
                <img className='feature-img' src='https://care-quality-digital-resources.s3.eu-west-2.amazonaws.com/pexels-picjumbocom-196650.jpg' alt=""/>
            </div>
            
          </section>

          <section id='staff-container'>
           
            <div className='width-60'>
              <img className='feature-img' src='https://care-quality-digital-resources.s3.eu-west-2.amazonaws.com/pexels-matthias-zomer-339620.jpg' alt=""/>

            </div>
            
            <div className='width-40'>
              <Carousel autoPlay={true} showArrows={true} showStatus={false} infiniteLoop={true}>
                <FeatureContainer title='Client Medication List - eMar included as standard' icon='medication_icon'
                description="Add all your clients medical requirements and visually manage their administering of medication using the eMAR."/>
                <FeatureContainer title='Client Specific Tasks' icon='task_alt_icon'
                description="Assign tasks to client visits and staff can easily view and complete them within the mobile app."/>
                <FeatureContainer title='Client Care Plans' icon='library_books_icon'
                description=""/>
                <FeatureContainer title='Risk Assessments' icon='report_problem_icon'
                description=""/>
                <FeatureContainer title='Electronic Client Notes' icon='note_add_icon'
                description="Quickly make notes for each visit using the mobile app."/>
              </Carousel>
            </div>
            
          </section>
    
        <Footer />
    </div>
  )
}
