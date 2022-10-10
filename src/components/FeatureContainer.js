import React from 'react'
import Icon from '@mui/material/Icon';
import './Features.css'
import Typography from '@mui/material/Typography';

export default function FeatureContainer({icon, title, description}) {
  return (
    <div className='feature-container'>

       <Icon sx={{color:'#288', fontSize: 60}}>{icon}</Icon>

       <Typography
          component="h1"
          variant="h5"
          align="center"
          sx={{color: '#266'}}
          gutterBottom
        >
          {title}
        </Typography>

        <Typography
          component="p"
          variant="p"
          align="center"
          sx={{color: '#266'}}
          gutterBottom
        >
          {description}
        </Typography>

    </div>
  )
}
