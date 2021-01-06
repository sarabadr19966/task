import React from 'react'

import Button from '@material-ui/core/Button'

const controller = props => {
  const content = () =>{
    switch(props.activeStep) {
      case 0 :
        return 'Upload'
      case 1 :  
        return 'confirm'
      case 2 :
        return 'Send' 
      default : break;  
    }
  }
   
  return (
    <Button variant = "contained" color = "primary" 
    style = {{ width : '200px' }}
    onClick = {props.handleNext}
   
    >
      {content()}
    </Button>
  );
}

export default controller;