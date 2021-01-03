import './App.css';
import VerticalLinearStepper from './container/stepper'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));
function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Typography className={classes.root}>{"Create Your Bank Account"}</Typography>
      <VerticalLinearStepper/>
    </div>
  );
}

export default App;
