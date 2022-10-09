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
           
            <div className='width-40' >
              <Carousel autoPlay={true} showArrows={true} showStatus={false} infiniteLoop={true} >
                <FeatureContainer title='Staff Rota' icon='event_available_icon'/>
                <FeatureContainer title='Staff Mobile App' icon='phone_iphone_icon'/>
                <FeatureContainer title='Geographical Locator' icon='location_on_icon'/>
                <FeatureContainer title='Digital Policies' icon='post_add_icon'/>
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
                <FeatureContainer title='Client Medication List - eMar included as standard' icon='medication_icon'/>
                <FeatureContainer title='Client Specific Tasks' icon='task_alt_icon'/>
                <FeatureContainer title='Client Care Plans' icon='library_books_icon'/>
                <FeatureContainer title='Risk Assessments' icon='report_problem_icon'/>
                <FeatureContainer title='Electronic Client Notes' icon='note_add_icon'/>
              </Carousel>
            </div>
            
          </section>
    
        <Footer />
    </div>
  )
}
