import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from '../Header';
import Footer from '../Footer';
import { Link } from '@material-ui/core';

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
    paddingTop: '80%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const events = [
  // {
  // name: 'Inaugural',
  // description: 'Ideathon Problem statements to be released.',
  // date: 'November 6',
  // time: '4:30 PM Onwards',
  // link: 'https://nitwarangal.webex.com/nitwarangal/onstage/g.php?MTID=ee0a281ada964ce22a2f6378389782d32'
  // },
  {
    name: 'UI/UX Design Workshop',
    description: 'In collaboration with Monad',
    date: 'November 6',
    time: '6 PM Onwards',
    link: 'https://nitwarangal.webex.com/nitwarangal/onstage/g.php?MTID=ef5fca5fdb05b23c506654e55d0e25a92',
    active: 1,
    image: 'ui-event.jpeg'
  }, {
    name: 'Alumnicate - AI Webinar',
    description: 'Speaker: Manish Sinha (IBM)',
    date: 'November 7',
    time: '4:30 PM Onwards',
    link: 'https://nitwarangal.webex.com/nitwarangal/onstage/g.php?MTID=ec2fa9b93d60791995e7c05997ff93612',
    active: 1,
    image: 'webinar-event.jpeg'
  }, {
    name: 'Machine Learning Workshop',
    description: 'In collaboration with Nevronas NITW',
    date: 'November 8',
    time: '5 PM Onwards',
    link: 'https://nitwarangal.webex.com/nitwarangal/onstage/g.php?MTID=eca004372d8c56431fcd148082e12d517',
    active: 1,
    image: 'ml-event.jpeg'
  }, {
    name: 'Code-Quest',
    description: 'In collaboration with ACM NITW Chapter',
    prize: 'Cash Prizes worth 3k',
    date: 'November 6',
    time: '10-11:30 PM',
    link: '', //hackerearth
    active: 0,
    image: ''
  }, {
    name: 'Sci-Tech Quiz',
    description: 'In collaboration with Quiz Club NITW',
    prize: 'Cash Prizes worth 3k',
    date: 'November 7',
    time: '6:30-8:30 PM',
    link: '',
    active: 0,
    image: ''
  }, {
    name: 'Online Gaming',
    description: 'Registration fees: Rs 50 per player',
    prize: 'Amazing Cash Prizes to be won',
    date: 'November 7',
    time: '9:30 PM Onwards',
    link: '',
    active: 0,
    image: ''
  }, {
    name: 'Online Treasure Hunt',
    description: 'Cash prizes worth 1.8k',
    date: 'November 6',
    time: '12:30 AM-1:30 PM Onwards',
    link: '',
    active: 0,
    image: ''
  }, {
    name: 'Ideathon',
    description: 'Cash Prizes worth 5k',
    date: 'November 8',
    time: '2 PM Onwards',
    link: '', //google doc
    active: 0
  }];

export default function Events() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Events
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Register now and binge to these technical and fun events.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {events.map((event) => (
              <Grid item key={event.name} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  {event.active ? <CardMedia
                    className={classes.cardMedia}
                    image={require(`../../public/${event.image}`)}
                  /> : <Typography gutterBottom variant="h5" component="h2" align="center" stlye={{ marginTop: '100px' }}>
                      Coming Soon
                    </Typography>
                  }
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {event.name}
                    </Typography>
                    <Typography>
                      {event.description}
                    </Typography>
                    {event.prize ? <Typography>
                      {event.prize}
                    </Typography> : <></>}
                    <Typography>
                      Date: {event.date}
                    </Typography>
                    <Typography>
                      Time: {event.time}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link href={event.link}>
                      <Button disabled={!event.active} size="small" variant="contained" color="primary">
                        Register
                    </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}