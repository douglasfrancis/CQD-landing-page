import React from 'react'
import Navbar from './Navbar'
import './Features.css'
import FeatureContainer from './FeatureContainer'
import Footer from './Footer'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

export default function Features() {

  const features = [
    {
      title: 'Staff Rota',
      icon: 'event_available_icon'
    },
    {
      title: 'Staff Mobile App',
      icon:'phone_iphone_icon'
    },
    {
      title: 'Geographical Locator',
      icon: 'location_on_icon'
  },
    {
      title: 'Digital Policies',
      icon: 'post_add_icon'
    },
    {
      title: 'Client Medication List',
      icon: 'medication_icon'
  },
    {
      title: 'Client Specific Tasks',
      icon: 'task_alt_icon'
    },
    {
      title: 'Client Care Plans',
      icon: 'library_books_icon'
    },
    {
      title: 'Risk Assessments',
      icon: 'report_problem_icon'
    },
    {
      title: 'Electronic Client Notes',
      icon: 'note_add_icon'
    }
  ]
  return (
    <div >
        <Navbar />
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, p: 4, pb: 0 }}>
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
            Our standard features are great for small or start up care comapnies looking to improve the way they work
          </Typography>
          </Container>
          <div id="features">
          {features.map((feature, i)=>
          <FeatureContainer key={i} title={feature.title} icon={feature.icon}/>

        )}
          </div>
       
    
        <Footer />
    </div>
  )
}
