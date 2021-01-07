import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  button:{
    width:200,
  }
}))

// controling upload / confirm /send /tryAgain buttons

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
    <Grid container justify='center'  alignContent='center' 
    {...((activeStep === 1) && {spacing : 4})}
    >
      <Grid item>
        <Button variant = "contained" 
        color = 'primary'
        className={classes.button}
        onClick = {tryAgain}
        {...((loading || error.err || activeStep === steps.length || activeStep === 0 ||
           activeStep === steps.length -1) && {style : {display: 'none'}})}
        >
          Try Again
        </Button>
      </Grid>
      <Grid item>
                
      <Button variant = "contained" 
        color = 'primary'
        className={classes.button}
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