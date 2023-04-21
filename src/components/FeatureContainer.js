import React from 'react'
import Icon from '@mui/material/Icon';
import './Features.css'

export default function FeatureContainer({icon, title, description}) {
  return (
    <div className='feature-container'>

        <Icon className='feature-icon'>{icon}</Icon>

        <h5 className='feature-title' >
          {title}
        </h5>

      {/*<p style={{textAlign:'left', marginTop:5}}>
        {description}
      </p>*/}

    </div>
  )
}
