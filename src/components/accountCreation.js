import React from 'react'
import ScaleLoader from "react-spinners/ScaleLoader";
import ErrorComponent from './errorComponent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    paper : {
        
        [theme.breakpoints.up('md')] : {
            width :'80%',
            margin : '0 auto',
            marginTop : '40px',
        }
    },
    icon : {
        marginRight:10
    },
    loader : {
        margin : '0 auto',
        color : theme.palette.secondary.main,
        marginTop : 50,
        marginBottom : 50,
      }
}));



const AccountCreation = (props) => {
    const {loading ,similar ,error ,tryAgain} = props;
    const classes = useStyles();
    return (loading ? <>
        <Typography className = {classes.loader} variant ='h5'>Creating Your Account</Typography>
        <ScaleLoader loading = {loading} color = '#727272' />
        </> :
        <div>
            {similar ? 
                <Paper elevation = {2} className = {classes.paper} >
                    <Typography variant ='h5' className={classes.loader}><AccountCircleIcon color = 'secondary' className = {classes.icon} /> 
                        Your Account Created Successfully
                    </Typography>
                </Paper>
                : <ErrorComponent error = {error} tryAgain = {tryAgain} />
            }
        </div>
    )
}

export default AccountCreation;