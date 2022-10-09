import React from 'react'
import Link from '@mui/material/Link';
import './Navbar.css'

export default function Navbar() {
  return (
    
        <header >
          <img style={{  height: '60px'}} src={'https://care-quality-digital-resources.s3.eu-west-2.amazonaws.com/CQD_Logo_Colour.png'} alt={'Care Quality Digital Logo'}/>
          <nav>
            <Link 
              variant="button"
              color="#1e1e1e"
              href="/"
              sx={{ my: 1, mx: 1.5 }}
            >
              Features
            </Link>
            <Link 
              variant="button"
              color="#1e1e1e"             
               href="/pricing"
              sx={{ my: 1, mx: 1.5 }}
            >
              Pricing
            </Link>
            <Link
              variant="button"
              color="#1e1e1e"
                href="/support"
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link>
          </nav>
          <div>
            <Link href="https://app.cqd.org.uk">
              <button id='log-in'>
                Log In
              </button>
            </Link>
            <Link href="/support">
              <button id='book-demo'>
                Book Demo
              </button>
            </Link>
          </div>
          
        </header>
   
  )
}
