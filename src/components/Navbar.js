import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';


export default function Navbar() {
  return (
    <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap', backgroundColor: '#266867', display: 'flex', justifyContent: 'space-between' }}>
          <img style={{  height: '60px'}} src={'https://care-quality-digital-resources.s3.eu-west-2.amazonaws.com/CQD_Logo_White.png'} alt={'Care Quality Digital Logo'}/>
          <nav>
            <Link 
              variant="button"
              color="#fff"
              href="/"
              sx={{ my: 1, mx: 1.5 }}
            >
              Features
            </Link>
            <Link 
              variant="button"
              color="#fff"             
               href="/pricing"
              sx={{ my: 1, mx: 1.5 }}
            >
              Pricing
            </Link>
            <Link
              variant="button"
              color="#fff"
                href="/support"
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link>
          </nav>
          <div>
            <Link href="https://app.cqd.org.uk">
              <Button  variant="outlined" sx={{ my: 1, mx: 1.5, color: '#fff', borderColor: '#fff' }}>
                Log In
              </Button>
            </Link>
            <Link href="/support">
              <Button  variant="outlined" sx={{ my: 1, mx: 1.5, color: '#fff', borderColor: '#fff' }}>
                Book Demo
              </Button>
            </Link>
          </div>
          
        </Toolbar>
      </AppBar>
  )
}
