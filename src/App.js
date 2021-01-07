import BankAccount from './container/BankAccount'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    color : '#727272',
    fontSize : '30px',
    fontWeight : 'bolder',
    paddingTop:'100px',
    marginBottom : '80px',
    textAlign:'center',
  },
  container :{
    textAlign : 'center',
    maxWidth : '900px',
  },
  paper: {
    minHeight:'90vh',
    width:'100%',
    paddingBottom:'40px',
    [theme.breakpoints.down('md')]:{

    boxShadow:'none'}
  },
  body:{
    [theme.breakpoints.up('md')]:{
      background: '#a18e96',
      width:'100%',
      height:'100%',
      paddingBottom:'50px',
      paddingTop:'50px',
    }
  
  }

}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.body}>
    <Container className={classes.container}>
      <Paper className={classes.paper}>
      <div><Typography className={classes.root} variant='h1'>Create Your Bank Account</Typography></div>
      <BankAccount/>
      </Paper>
    </Container> 
   </div>   
  );
}

export default App;
