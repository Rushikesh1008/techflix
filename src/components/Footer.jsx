import React from 'react';
import { AppBar, Container, Grid, Link, Toolbar, Typography } from '@material-ui/core';

export default function Events() {
  return (
    <footer style={{ marginTop: '14%' }}>
      <AppBar position="sticky" variant="regular">
        <Toolbar style={{ justifyContent: "space-between" }}>
          <div>
            <Grid spacing={3}>
              <Link href="https://www.facebook.com/ECEANITW">
                <img src={require('../public/fb-logo.png')} width="20px" />
              </Link>
              <Link href="https://www.linkedin.com/company/ecea-nit-warangal">
                <img src={require('../public/linkedin-logo.png')} width="30px" />
              </Link>
              <Link href="https://www.instagram.com/ecea.nitw">
                <img src={require('../public/insta-logo.png')} width="30px" />
              </Link>
            </Grid>
          </div>
          <Typography variant="body2" color="textSecondary" align="center" style={{ color: 'white' }}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.facebook.com/ECEANITW">
              ECE ASSOCIATION
            </Link>{' '}
            {new Date().getFullYear()}
    -
    {new Date().getFullYear() + 1}
            {'.'}
          </Typography>
        </Toolbar>
      </AppBar>
    </footer>
  )
}