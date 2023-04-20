import React from 'react'
import Icon from '@mui/material/Icon';
import './Features.css'

export default function FeatureContainer({icon, title, description}) {
  return (
    <div className='feature-container'>

        <Icon sx={{color:'#dfefed', fontSize: 40}}>{icon}</Icon>

        <h5 style={{fontFamily:'GothamBold', textAlign:'center', fontSize:18, color:'#fff'}}>
          {title}
        </h5>

      {/*<p style={{textAlign:'left', marginTop:5}}>
        {description}
      </p>*/}

    </div>
  )
}
