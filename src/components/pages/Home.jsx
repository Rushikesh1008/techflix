import React from 'react';
import { Container, CssBaseline, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import Header from '../Header';
import Footer from '../Footer';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

export default function Home() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Header />
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="md">
                        <Typography variant="h4" color="textPrimary" gutterBottom>
                            About TECHFLIX
                        </Typography>
                        <Typography variant="h6" color="textSecondary" paragraph>
                            TechFlix is a flagship three-day technical event series organised by the ECE Association NITW.
                            It aims to propagate technical knowledge through various webinars, workshops and events.
                        </Typography>
                        <Typography variant="h4" color="textPrimary" gutterBottom>
                            About ECEA NITW
                        </Typography>
                        <Typography variant="h6" color="textSecondary" paragraph>
                            We, at ECE Association, solely concentrate on giving the students of NIT Warangal ample opportunities
                            so that they can work on their knowledge, competencies and widen their field of excellence and grade.
                            Students from both B.Tech and M.Tech join hands and work together towards learning new stuff and
                            helping other students enlarge their parameters of merit and knowledge by the organisation of wide
                            variety of events, workshops, lectures, competitions, online quizzes and more.
                        </Typography>
                    </Container>
                </div>
                <Container maxWidth="md">
                    <Typography variant="h4" color="textPrimary" gutterBottom>
                        Our collaborators
                    </Typography>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={6} md={2}>
                            <div style={{ textAlign: 'center' }}>
                                <Link href="https://www.facebook.com/acm.nitw">
                                    <img src={require('../../public/acm-logo.png')} width="80%" />
                                </Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2}>
                            <div style={{ textAlign: 'center' }}>
                                <Link href="https://www.facebook.com/qcnitw">
                                    <img src={require('../../public/qc-logo.png')} width="100%" />
                                </Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2}>
                            <div style={{ textAlign: 'center', marginTop: '10%' }}>
                                <Link>
                                    <img src={require('../../public/ui-logo.png')} width="100%" />
                                </Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2}>
                            <div style={{ textAlign: 'center', marginTop: '15%' }}>
                                <Link>
                                    <img src={require('../../public/nevronas-logo.png')} width="100%" />
                                </Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2}>
                            <div style={{ textAlign: 'center' }}>
                                <Link href="https://www.facebook.com/TheInnovationGarage">
                                    <img src={require('../../public/ig-logo.png')} width="80%" />
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </main>
            <Footer />
        </React.Fragment>
    )
}