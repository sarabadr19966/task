import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import WarningIcon from '@material-ui/icons/Warning';
const useStyles = makeStyles((theme) => ({
    paper :{
        padding:'20px',

        [theme.breakpoints.up('md')]:{
            width:'80%',
            margin : '0 auto',
        }
    }
  }));
const ErrorComponent = props => {
    const classes = useStyles();
    return (
        <Paper elevation={2} className= {classes.paper}>
        <Typography variant='h6'><WarningIcon color='secondary' style={{marginRight:10}}/> {props.error['msg']}</Typography>
          <Button onClick={props.tryAgain} variant='outlined' color='secondary' style={{marginTop:20}}>
              Try Again
          </Button>
        </Paper>
    );
}

export default ErrorComponent;