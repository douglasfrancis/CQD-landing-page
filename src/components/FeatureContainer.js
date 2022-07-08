import React from 'react'
import Icon from '@mui/material/Icon';
import './Features.css'
import Typography from '@mui/material/Typography';

export default function FeatureContainer({icon, title}) {
  return (
    <div className='feature-container'>

       <Icon sx={{color:'#288', fontSize: 60}}>{icon}</Icon>

       <Typography
          component="h1"
          variant="h5"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {title}
        </Typography>

    </div>
  )
}
