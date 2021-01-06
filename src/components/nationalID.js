import React ,{useRef } from 'react';
import Typography  from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  card: {
    maxWidth: 200,
  },
  icons : {
    fontSize : 60
  }
});
 const NationalId = props =>  {
    const classes = useStyles();
    const backImg = useRef(null); 
    const frontImg = useRef(null); 

    return ( 
        <Grid container justify='center' spacing={4} className={classes.root}>
            <Grid item>
                <input
                style={{display : 'none'}}
                onChange ={(e) => props.onchange(e ,'frontImg')}
                type = "file"
                ref={frontImg}
                />
                <Card className={classes.card}
                onClick={()=>frontImg.current.click()}>
                    <CardActionArea>
                        <CardContent>
                            {props.photoUploaded['frontImg'] ? <CloudDoneIcon className={classes.icons} color='primary' /> :
                            <AddPhotoAlternateIcon className={classes.icons} color='primary'/>}
                            <Typography variant="body2" color="textSecondary" component="p">
                                Add Front Image Of  your National ID
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item>
                <input
                style={{display : 'none'}}
                onChange ={(e) => props.onchange(e ,'backImg')}
                type = "file"
                ref={backImg}
                />
                <Card className={classes.card}
                onClick={()=>backImg.current.click()}>
                    <CardActionArea>
                        <CardContent>
                            {props.photoUploaded['backImg'] ? <CloudDoneIcon className={classes.icons} color='primary' /> :
                            <AddPhotoAlternateIcon className={classes.icons} color='primary'/>}
                            <Typography variant="body2" color="textSecondary" component="p">
                                Add Back Image Of  Your National ID
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
      </Grid>
    );
    
}






export default NationalId;