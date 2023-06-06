import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';


function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="/">
          Care Quality Digital Ltd
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const footers = [
    {
      title: 'Company',
      description: [{name:'Team', link: '/team'}, {name:'Blog', link: '/blog'}, {name:'Contact Us', link: '/support'}],
    },
    {
      title: 'Features',
      description: [
        {name:'Client Management', link: '/features'},
        {name:'Staff Management', link: '/features'},
      ],
    },
  
    {
      title: 'Legal',
      description: [{name:'Privacy Policy', link: 'https://www.privacypolicies.com/live/4dc05d67-88a4-407f-8947-05677c1a2df2'}, 
      {name:'Terms of Use', link: '/terms'},
      {name:'Accessibility Statement', link: '/accessibility'}],
    },
  ];
export default function Footer() {
  return (
      <>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />

    <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href={item.link} variant="subtitle1" color="text.secondary">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      </>
  )
}
