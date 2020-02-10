import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import cheque from '../../assets/cheque.jpg';
import Image from 'react-bootstrap/Image'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '42vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(1, 2),
    marginTop: 'auto',
    
    backgroundColor:
      theme.palette.primary === 'light' ? theme.palette.primary['light'] : theme.palette.primary['light'],
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Image src={cheque} style={{width: 50}} roundedCircle/>
          <Typography variant="body1">Electronic Cheque</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}