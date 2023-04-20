import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import TextField from '@mui/material/TextField'
import './Pricing.css'

export default function Pricing() {

  const [number, setNumber] = useState("")
  const [price, setPrice] = useState(0)


  useEffect(()=>{
    if(number){
      calculatePrice()
    }
  },[number])

  const calculatePrice = () =>{
    setPrice((number * 7) + 80)

  }


  return (
    <main>
     
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, p: 4, textAlign:'center' }}>
        <h1 className='gotham-black'>Pricing</h1>
        <p className='gotham-bold'>We believe all features should come as standard, ensuring your business is supported no matter how big or small.</p>   
      </Container>
      
      <div id='pricing-box' >
          
           <div id='pricing-header'>
             <h2 style={{color:'#fff', fontFamily: 'GothamBold'}}>Pricing Calculator</h2>
           </div>
          
          <div id='pricing-info'>
              <TextField type='number' sx={{width: 130, backgroundColor:'#fff'}} label="No. of Clients" value={number} onChange={(e)=>setNumber(e.target.value)}/>
              <div>  
                <h3 className='gotham-bold' style={{margin: 20, fontSize: 30}}>
                          £{price}
                </h3>
                <h6  style={{ fontSize: 20}}>
                          /mo +VAT
                </h6>
              </div>  
              <Link to='/features'>
                <p style={{color:'#266'}}>All features included</p>
              </Link>
                   
              <i style={{maxWidth: '90%'}}>1 month free trial, no credit card required</i>
                   
                
              <Link to="/book-demo" >
                <Button  variant="contained" sx={{backgroundColor: '#266867', color: '#fff' }}>
                    Book Demo
                </Button>
              </Link>
          </div>
      </div>
     
    </main>
  );
}
