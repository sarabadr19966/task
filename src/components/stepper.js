import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import PersonIcon from '@material-ui/icons/Person';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import StepConnector from '@material-ui/core/StepConnector';


// customizing stepper icons
const ColorlibConnector = withStyles({
  alternativeLabel : {
    top: 22,
  },
  active : {
    '& $line' : {
      backgroundImage :
      'linear-gradient( 136deg, rgba(163,92,123,1) 0%, rgba(212,157,183,1) 50%, rgba(136,187,247,1) 100%)',
    },
  },
  completed : {
    '& $line' : {
      backgroundImage :
      'linear-gradient( 136deg, rgba(163,92,123,1) 0%, rgba(212,157,183,1) 50%, rgba(136,187,247,1) 100%)',
    },
  },
  line : {
    height : 3,
    border : 0,
    backgroundColor : '#eaeaf0',
    borderRadius : 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor : '#727272',
    zIndex : 1,
    color : '#fff',
    width : 50,
    height : 50,
    display : 'flex',
    borderRadius : '50%',
    justifyContent : 'center',
    alignItems : 'center',
  },
  active : {
    backgroundImage :
      'linear-gradient( 136deg, rgba(163,92,123,1) 0%, rgba(212,157,183,1) 50%, rgba(136,187,247,1) 100%)',
    boxShadow : '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed : {
    backgroundImage :
    'linear-gradient( 136deg, rgba(163,92,123,1) 0%, rgba(212,157,183,1) 50%, rgba(136,187,247,1) 100%)',
  },

});

const ColorlibStepIcon = (props)=> {
  const classes = useColorlibStepIconStyles();
  const { active ,completed } = props;

  const icons = {
    1: <PersonIcon />,
    2: <CheckCircleIcon />,
    3: <CameraAltIcon />,
  };

  return (
    <div
      className = {clsx(classes.root, {
        [classes.active] : active,
        [classes.completed] : completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

 const  CustomizedSteppers = (props) => {
  return (
      <Stepper alternativeLabel activeStep = {props.activeStep} connector = {<ColorlibConnector  />}>
        {props.steps.map((label ,index) => (
          <Step key = {index}>
            <StepLabel StepIconComponent = {ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
  );
}
export default CustomizedSteppers;
