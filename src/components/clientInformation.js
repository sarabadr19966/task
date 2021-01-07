import React from 'react'
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import ScaleLoader from "react-spinners/ScaleLoader";
import ErrorComponent from './errorComponent';

const useStyles = makeStyles((theme) => ({
  listItem: {
    textAlign:'center',
    [theme.breakpoints.up('sm')]:{
      textAlign : 'left',
    }      
  },
  lists :{
    
    [theme.breakpoints.up('sm')]:{ 
      width:'70%',
      margin : '0 auto',
    }
  },
  loader:{
    margin : '0 auto',
    marginTop : 50,
    marginBottom: 50,
    color : theme.palette.secondary.main,
  }

}));


// display the user informations
const ClientInformation = props => {
  const {loading ,error ,tryAgain , clientInfo} = props;
  const classes = useStyles();
  return (loading  ? <>
    <Typography className = {classes.loader} variant='h5'>Loading You Information</Typography>
    <ScaleLoader loading = {loading} color='#727272' />
    </>
    : <> 
      {error.err ? <ErrorComponent error = {error} tryAgain = {tryAgain}/>
        : 
          <Grid container justify ='space-between' className = {classes.lists}> 
            <Grid item xs={12}  sm={4}>
              <List  >
                <ListItem className = {classes.listItem}>  <ListItemText primaryTypographyProps = {{color:'primary'}} 
                primary = 'FirstName' secondary = {clientInfo['first_name']} /> </ListItem>
                <ListItem className = {classes.listItem}>  <ListItemText primaryTypographyProps = {{color:'primary'}} 
                primary = 'FullName' secondary = {clientInfo['full_name']} /> </ListItem>
                <ListItem className = {classes.listItem}>  <ListItemText primaryTypographyProps = {{color:'primary'}} 
                primary = 'Gender' secondary = {clientInfo['gender']} /> </ListItem>
                <ListItem className = {classes.listItem}>  <ListItemText primaryTypographyProps = {{color:'primary'}} 
                primary = 'Religion' secondary = {clientInfo['religion']} /> </ListItem>
                <ListItem className = {classes.listItem}>  <ListItemText primaryTypographyProps = {{color:'primary'}} 
                primary = 'Marital Status' secondary = {clientInfo['marital_status']} /> </ListItem>
                <ListItem className = {classes.listItem}>  <ListItemText primaryTypographyProps = {{color:'primary'}} 
                primary = 'Husband Name' secondary = {clientInfo['husband_name'] ? clientInfo['husband_name'] : 'لا يوجد'} /> </ListItem>
                <ListItem className = {classes.listItem}>  <ListItemText primaryTypographyProps = {{color:'primary'}} 
                primary = 'Profession' secondary = {clientInfo['profession']} /> </ListItem>
              </List>
            </Grid>
            <Grid item xs={12}  sm={4}>
              <List  >
                <ListItem className = {classes.listItem} >  <ListItemText primaryTypographyProps = {{color:'primary'}} 
                primary = 'Street' secondary = {clientInfo['street']} /> </ListItem>
                <ListItem className = {classes.listItem} >  <ListItemText primaryTypographyProps = {{color:'primary'}} 
                primary = 'Area' secondary = {clientInfo['area']} /> </ListItem>
                <ListItem className = {classes.listItem} >  <ListItemText primaryTypographyProps = {{color:'primary'}} 
                primary = 'Front NID' secondary = {clientInfo['front_nid']} /> </ListItem>
                <ListItem className = {classes.listItem} >  <ListItemText primaryTypographyProps = {{color:'primary'}} 
                primary = 'Back NID' secondary = {clientInfo['back_nid']} /> </ListItem>
                <ListItem className = {classes.listItem} >  <ListItemText primaryTypographyProps = {{color:'primary'}} 
                primary = 'Serial Number' secondary = {clientInfo['serial_number']} /> </ListItem>
                <ListItem className = {classes.listItem} >  <ListItemText primaryTypographyProps = {{color:'primary'}} 
                primary = 'Release Date' secondary = {clientInfo['release_date']} /> </ListItem>
                <ListItem className = {classes.listItem} >  <ListItemText primaryTypographyProps = {{color:'primary'}} 
                primary = 'Expiration' secondary = {clientInfo['expiration']} /> </ListItem>
              </List> 
            </Grid>
            
            <Typography variant = 'h5' className = {classes.loader}>Please Confirm Your Information</Typography>
          </Grid>
      }
    </>

  )
}

export default ClientInformation;
