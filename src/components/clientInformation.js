import React from 'react'
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import ScaleLoader from "react-spinners/ScaleLoader";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

const ClientInformation = props => {
    const classes = useStyles();
    return (props.loading ?<ScaleLoader loading={props.loading}  />
        : <div> 
            {props.error['err'] ? <>
                <Typography>{props.error['msg']}</Typography>
                <h1>please try again later</h1>
                <Button onClick={props.tryAgain}>
                    Try Again
                </Button>
                </> 
              : <>
              <List className={classes.root}>
                <ListItem>  <ListItemText  primary = 'FirstName' secondary = {props.clientInfo['first_name']} /> </ListItem>
                <ListItem>  <ListItemText  primary = 'FullName' secondary = {props.clientInfo['full_name']} /> </ListItem>
                <ListItem>  <ListItemText  primary = 'Gender' secondary = {props.clientInfo['gender']} /> </ListItem>
                <ListItem>  <ListItemText  primary = 'Religion' secondary = {props.clientInfo['religion']} /> </ListItem>
                <ListItem>  <ListItemText  primary = 'Marital Status' secondary = {props.clientInfo['marital_status']} /> </ListItem>
                <ListItem>  <ListItemText  primary = 'Husband Name' secondary = {props.clientInfo['husband_name']} /> </ListItem>
                <ListItem>  <ListItemText  primary = 'Profession' secondary = {props.clientInfo['profession']} /> </ListItem>
                <ListItem>  <ListItemText  primary = 'Street' secondary = {props.clientInfo['street']} /> </ListItem>
                <ListItem>  <ListItemText  primary = 'Area' secondary = {props.clientInfo['area']} /> </ListItem>
                <ListItem>  <ListItemText  primary = 'Front NID' secondary = {props.clientInfo['front_nid']} /> </ListItem>
                <ListItem>  <ListItemText  primary = 'Back NID' secondary = {props.clientInfo['back_nid']} /> </ListItem>
                <ListItem>  <ListItemText  primary = 'Serial Number' secondary = {props.clientInfo['serial_number']} /> </ListItem>
                <ListItem>  <ListItemText  primary = 'Release Date' secondary = {props.clientInfo['release_date']} /> </ListItem>
                <ListItem>  <ListItemText  primary = 'Expiration' secondary = {props.clientInfo['expiration']} /> </ListItem>
            </List>
            <Typography>Please if your information is correct press continue if not go back and reupload your photos</Typography>
              </>
            }
                
        </div>
    )
}

export default ClientInformation;
