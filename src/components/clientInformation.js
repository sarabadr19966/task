import React from 'react'
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import ScaleLoader from "react-spinners/ScaleLoader";
import Paper from '@material-ui/core/Paper';
import ErrorComponent from './errorComponent';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    listItem: {
      textAlign:'center',
      [theme.breakpoints.up('md')]:{
        textAlign : 'left',
      }      
    },
    paper :{
      [theme.breakpoints.up('md')]:{
        width:'80%',
        margin : '0 auto',
      }
    }

  }));

const ClientInformation = props => {
  const classes = useStyles();
  return (props.loading ?<ScaleLoader loading={props.loading}  />
    : <> 
      {props.error['err'] ? <ErrorComponent error={props.error} tryAgain={props.tryAgain}/>
        : <Paper elevation={2} className={classes.paper}>
          <Grid container justify='space-around'> 
            <Grid item xs={12} sm={6} lg={4}>
              <List className={classes.root} >
                <ListItem className={classes.listItem}>  <ListItemText  primary = 'FirstName' secondary = {props.clientInfo['first_name']} /> </ListItem>
                <ListItem className={classes.listItem}>  <ListItemText  primary = 'FullName' secondary = {props.clientInfo['full_name']} /> </ListItem>
                <ListItem className={classes.listItem}>  <ListItemText  primary = 'Gender' secondary = {props.clientInfo['gender']} /> </ListItem>
                <ListItem className={classes.listItem}>  <ListItemText  primary = 'Religion' secondary = {props.clientInfo['religion']} /> </ListItem>
                <ListItem className={classes.listItem}>  <ListItemText  primary = 'Marital Status' secondary = {props.clientInfo['marital_status']} /> </ListItem>
                <ListItem className={classes.listItem}>  <ListItemText  primary = 'Husband Name' secondary = {props.clientInfo['husband_name'] ? props.clientInfo['husband_name'] : 'لا يوجد'} /> </ListItem>
                <ListItem className={classes.listItem}>  <ListItemText  primary = 'Profession' secondary = {props.clientInfo['profession']} /> </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <List className={classes.root} >
                <ListItem className={classes.listItem} >  <ListItemText  primary = 'Street' secondary = {props.clientInfo['street']} /> </ListItem>
                <ListItem className={classes.listItem} >  <ListItemText  primary = 'Area' secondary = {props.clientInfo['area']} /> </ListItem>
                <ListItem className={classes.listItem} >  <ListItemText  primary = 'Front NID' secondary = {props.clientInfo['front_nid']} /> </ListItem>
                <ListItem className={classes.listItem} >  <ListItemText  primary = 'Back NID' secondary = {props.clientInfo['back_nid']} /> </ListItem>
                <ListItem className={classes.listItem} >  <ListItemText  primary = 'Serial Number' secondary = {props.clientInfo['serial_number']} /> </ListItem>
                <ListItem className={classes.listItem} >  <ListItemText  primary = 'Release Date' secondary = {props.clientInfo['release_date']} /> </ListItem>
                <ListItem className={classes.listItem} >  <ListItemText  primary = 'Expiration' secondary = {props.clientInfo['expiration']} /> </ListItem>
              </List> 
            </Grid>
          </Grid>
        </Paper>
      }
      </>

  )
}

export default ClientInformation;
