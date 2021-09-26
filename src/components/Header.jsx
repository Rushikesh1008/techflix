import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Header() {
    return (
        <AppBar position="relative" variant="regular">
            <Toolbar style={{ justifyContent: "space-between" }}>
                <img src={require('../public/tf-logo.png')} width="20%" />
                <Grid container spacing={1} justify="center">
                    <Grid item xs={3} sm={3} md={1}>
                        <Typography variant="p" color="inherit" noWrap>
                            <Link color="inherit" href="/">
                                Home
                        </Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sm={3} md={1}>
                        <Typography variant="p" color="inherit" noWrap>
                            <Link color="inherit" href="/events">
                                Events
                        </Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sm={3} md={1}>
                        <Typography variant="p" color="inherit" noWrap>
                            <Link color="inherit" href="/aboutus">
                                About us
                        </Link>
                        </Typography>
                    </Grid>
                </Grid>
                <img src={require('../public/ecea-logo.png')} width="15%" />
            </Toolbar>
        </AppBar>
    )
}