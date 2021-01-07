import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => ({
  button:{
    width:200,
  },
  tryAgain : {
    display : 'none',
    width:200,
  }
}))

// handle upload / confirm / send buttons
const Controller = props => {
  const classes = useStyles();
  const content = () =>{
    switch(activeStep) {
      case 0 :
        return 'Upload'
      case 1 :  
        return 'confirm'
      case 2 :
        return 'Send' 
      default : break;  
    }
  }
  const {tryAgain ,loading ,error ,activeStep ,steps ,photoUploaded ,captured ,handleNext} = props;

  return (
    <Grid container justify='center'  alignContent='center' spacing = {4}>
      <Grid item>
        <Button variant = "contained" 
        color = 'primary'
        className = {classes.tryAgain}
        onClick = {tryAgain}
        {...( activeStep === 1 && !loading && !error && {style : {display: 'block'}})}
        >
          Try Again
        </Button>
      </Grid>
      <Grid item>
                
      <Button variant = "contained" 
        color = 'primary'
        className = {classes.button}
        onClick = {handleNext}
        disabled = {loading || !(photoUploaded.frontImg && photoUploaded.backImg) || captured} 
        {...((loading || error.err || activeStep === steps.length) && {style : {display: 'none'}})}
        >
          {content()}
        </Button>
      </Grid>
    </Grid>
  );
}

export default Controller;