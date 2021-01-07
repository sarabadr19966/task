import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import WarningIcon from '@material-ui/icons/Warning';
const useStyles = makeStyles((theme) => ({
    paper : {
        padding : '20px',
        marginTop : '80px',
        [theme.breakpoints.up('md')]:{
            width : '80%',
            margin : '80px auto',
        },
    },
    
    tryAgain : {
        color : theme.palette.secondary.main,
        marginBottom:'20px'
    },
    icon : {
        marginRight : '10px'
    } 
  }));

// handling errors 
const ErrorComponent = props => {
    const {error ,tryAgain} = props;
    const classes = useStyles();
    return (
        <Paper elevation = {2} className = {classes.paper}>
        <Typography className = {classes.tryAgain} variant = 'h5'> 
            <WarningIcon color = 'secondary' className = {classes.icon} /> 
            {error.msg}
        </Typography>
          <Button onClick = {tryAgain} variant = 'contained' color = 'primary' >
              Try Again
          </Button>
        </Paper>
    );
}

export default ErrorComponent;