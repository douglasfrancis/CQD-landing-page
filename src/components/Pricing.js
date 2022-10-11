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
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField'

function PricingContent() {

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
     
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, p: 4 }}>
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
        We believe all features should come as standard, ensuring your business is supported no matter how big or small.        
      </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main" >
        <Grid container spacing={5} sx={{justifyContent:'center'}}>
          
           
            <Grid
              item
              
              xs={12}
              sm={12}
              md={4}
            >
              <Card>
                <CardHeader
                  title={"Pricing Calculator"}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor:'#32948c', color: '#fff'
                  }}
                />
                <CardContent sx={{backgroundColor: '#f2f9f8'}}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      mb: 2,
                    }}
                  >
                  

                    <TextField type='number' fullWidth label="Number of Clients" value={number} onChange={(e)=>setNumber(e.target.value)}/>
                      
                    <Typography component="h2" variant="h3" color="text.primary">
                      £{price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo +VAT
                    </Typography>
                  </Box >
                  
                    
                      
                      <Link href='/'>
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                          sx={{color:'#266867'}}
                        >
                        All features included
                        </Typography>
                      </Link>
                 
                 
                </CardContent>
                <CardActions sx={{backgroundColor: '#f2f9f8'}}>
                  <Link href="/support" sx={{textDecoration: 'none', margin: '0 auto'}}>
                    <Button  variant="contained" sx={{backgroundColor: '#266867', color: '#fff' }}>
                      Book Demo
                    </Button>
                  </Link>
                  
                </CardActions>
              </Card>
            </Grid>
         
        </Grid>
      </Container>
     
    </main>
  );
}

export default function Pricing() {
  return <PricingContent />;
}