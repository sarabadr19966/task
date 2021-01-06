import BankAccount from './container/BankAccount'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
  container :{
    textAlign : 'center',
    margin:'0 auto',
    paddingTop:'100px',
    paddingBottom:'100px',
    minHeight:'100vh',

  }
}));
function App() {
  const classes = useStyles();

  return (
    <Container maxWidth={'md'} className={classes.container}>
      <Typography className={classes.root}>{"Create Your Bank Account"}</Typography>
      <BankAccount/>
    </Container>
      
  );
}

export default App;
