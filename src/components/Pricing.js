import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import Navbar from './Navbar';
import Footer from './Footer';
import Link from '@mui/material/Link';


const tiers = [
  {
    title: 'Basic',
    price: '80',
    description: [
      'Free for 3 months',
      'All standard features',
      
      'Email support',
    ],
    buttonText: 'Sign up',
    buttonVariant: 'outlined',
  },
  {
    title: 'Standard',
    subheader: 'Coming Soon',
    price: '149',
    description: [
        'Free Manager Training',
      'eMar',
      'Automatic Mileage Tracking',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '499',
    description: [
      'All standard features plus',
      
      'Unlimited Hours',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];



function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Navbar/>
      {/* Hero unit */}
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
          Choose the best package to suit your business no matter how big or small. With a huge number of features as standard we're confident running your care business will never be easier!
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
                  title={"Core Package"}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor:'#32948c', color: '#fff'
                  }}
                />
                <CardContent sx={{backgroundColor: '#dfefed'}}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                      <Typography>
                          from 
                      </Typography>
                    <Typography component="h2" variant="h3" color="text.primary">
                      £80
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box >
                  <ul>
                    
                      
                      <Link href='/'>
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                          sx={{color:'#288'}}
                        >
                        All standard features
                        </Typography>
                      </Link>
                 
                  </ul>
                </CardContent>
                <CardActions sx={{backgroundColor: '#dfefed'}}>
                  <Link href="/support" sx={{textDecoration: 'none', margin: '0 auto'}}>
                    <Button  variant="outlined" sx={{borderColor: '#32948c', color: '#32948c' }}>
                      Book Demo
                    </Button>
                  </Link>
                  
                </CardActions>
              </Card>
            </Grid>
            
            <Grid
              item
              
              xs={12}
              sm={12}
              md={12}
            >
              <Card>
                <CardHeader
                  title={"Add-ons"}
                  titleTypographyProps={{ align: 'center' }}
                  subheader={'Coming Soon'}

                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor:'#32948c', color: '#fff'
                  }}
                />
                <CardContent sx={{backgroundColor: '#dfefed'}}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                      <Typography>
                          from 
                      </Typography>
                    <Typography component="h2" variant="h3" color="text.primary">
                      £5
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /add-on
                    </Typography>
                  </Box >
                  <ul>
                    
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        
                      >
                       eMar
                      </Typography>
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        
                      >
                       Mileage tracker
                      </Typography>
                 
                  </ul>
                </CardContent>
                <CardActions sx={{backgroundColor: '#dfefed'}}>
                  <Button  variant="outlined" sx={{borderColor: '#32948c', margin: '0 auto',  color: '#32948c'}}>
                    Find Out More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
         
        </Grid>
      </Container>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}