import { Button, Card, Container, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Header from '../Header';
import '../../App.css';

const useStyles = makeStyles((theme) => ({
    cards: {
        backgroundColor: 'white',
        color: '#002984',
        textAlign: 'center'
    }
}));

export default function LandingPage(props) {
    const classes = useStyles();
    var dt = new Date("November 06, 2020 00:00:00");
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [displayDays, setDisplayDays] = useState();
    const [displayHours, setDisplayHours] = useState();
    const [displayMinutes, setDisplayMinutes] = useState();
    const [displaySeconds, setDisplaySeconds] = useState();
    useEffect(() => {
        let myInterval = setInterval(() => {
            var now = new Date().getTime();
            // Find the distance between now and the count down date
            var distance = dt - now;
            // Time calculations for days, hours, minutes and seconds
            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
            getTimer();
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });
    const getTimer = () => {
        setDisplayDays(`${days}d`);
        setDisplayHours(`${hours}h`);
        setDisplayMinutes(`${minutes}m`);
        setDisplaySeconds(`${seconds}s`);
    }
    return (
        <div style={{ backgroundColor: '#3f51b5', textAlign: 'center', overflow: 'hidden', height: '100vh' }}>
            <Header />
            <img src={require('../../public/tf-logo.png')} width='100%' />
            <div className="landing-text" >
                <Typography gutterBottom variant="h3" component="h2" style={{ color: 'white' }}>
                    Binge on Technology
            </Typography>
            </div>
            <div className="landing" >
                <Container maxWidth="md" style={{ color: 'white', textAlign: 'center' }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Starts In:
                </Typography>
                    <Grid container spacing={2} justify="center">
                        <Grid item xs={3} sm={3} md={1} stlye={{ textAlign: 'center' }}>
                            <Card className={classes.cards} >
                                <Typography gutterBottom variant="h5" component="h2">
                                    {displayDays}
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={3} sm={3} md={1} stlye={{ textAlign: 'center' }}>
                            <Card className={classes.cards} >
                                <Typography gutterBottom variant="h5" component="h2">
                                    {displayHours}
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={3} sm={3} md={1} stlye={{ textAlign: 'center' }}>
                            <Card className={classes.cards} >
                                <Typography gutterBottom variant="h5" component="h2">
                                    {displayMinutes}
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={3} sm={3} md={1} stlye={{ textAlign: 'center' }}>
                            <Card className={classes.cards} >
                                <Typography gutterBottom variant="h5" component="h2">
                                    {displaySeconds}
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Button variant="contained" style={{ marginTop: '1%', color: '#002984' }} onClick={() => props.history.push('/events')}>
                Register Now
            </Button>
            <br />
            <div>
                <Link href="https://www.facebook.com/ECEANITW">
                    <img src={require('../../public/fb-logo.png')} width="30px" />
                </Link>
                <Link href="https://www.linkedin.com/company/ecea-nit-warangal">
                    <img src={require('../../public/linkedin-logo.png')} width="40px" />
                </Link>
                <Link href="https://www.instagram.com/ecea.nitw">
                    <img src={require('../../public/insta-logo.png')} width="40px" />
                </Link>
            </div>
        </div>
    )
}