import React, { useState, useEffect, useRef } from 'react';
import Webcam from 'webcam-easy';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import CameraIcon from '@material-ui/icons/Camera';
import RedoIcon from '@material-ui/icons/Redo';
import DoneIcon from '@material-ui/icons/Done';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    videoCanvas :{
        width:400,
        height:300,
        marginTop:'30px',
        border : '4px solid',
        borderRadius : '5px',
        borderColor : theme.palette.secondary.light,
        [theme.breakpoints.down('xs')]:{
            width:350,
            height : 262.5
        }
    },
    switch : {}

}));

 //accessing webcam

const TakePicture = (props) => {
    const classes = useStyles();
    const [isWebCamOn ,setisWebCamOn] = useState(false);
    const [notCaptured ,setNotCaptured] = useState(true);
    const webCamRef = useRef(null);
    const imageSnapShot = useRef(null);
    
    useEffect(() => {
        // if photo captured to remove disable from send button
        props.capture(true);
        const webcamElement = document.getElementById('webcam');
        const canvasElement = document.getElementById('canvas');
        webCamRef.current = new Webcam(webcamElement, 'user', canvasElement);
    }, []);
    
    useEffect(() => {
        if (webCamRef.current && isWebCamOn) {
            webCamRef.current.start()
        } else if (webCamRef.current && !isWebCamOn) {
            webCamRef.current.stop()
        }
    }, [isWebCamOn]);

    //switch camera on and off
    const handleOnOffCamera = () => {
        setisWebCamOn(!isWebCamOn);
    }

    // check if image captured
    const handleOnCaptureClick = () => {
        let picture = webCamRef.current.snap();
        imageSnapShot.current.href = picture ? picture : '';
        setNotCaptured(!notCaptured);
    }
    
   
    // take another photo
    const handleTakeAnotherClick = () => {
        setNotCaptured(true)
        setisWebCamOn(true)
        props.capture(true);
    }

    // done click
    const handleOnDoneClick = () =>{
        setisWebCamOn(false);
        props.capture(false);

    }

    return (
        <>
            <FormControlLabel color = 'primary'
                control = {<Switch checked = {isWebCamOn} onChange = {handleOnOffCamera} name = "turnCameraOnOff" color = 'primary' />}
                label = "Camera"
            />

            <div>
                <video id = "webcam" autoPlay playsInline className = {classes.videoCanvas}  
                    {...((!isWebCamOn || !notCaptured) && {style: {display: 'none'}})}>
                
                </video>
                <canvas id = "canvas" className = {classes.videoCanvas}  
                    {...(notCaptured  && {style: {display: 'none'}})}>
                </canvas>
            </div>
            {
                isWebCamOn  || !notCaptured ? (
                    <div>
                    <IconButton disabled = {notCaptured} onClick = {handleTakeAnotherClick} color = "primary" 
                    aria-label = "upload picture" component = "span">
                        <RedoIcon />
                    </IconButton>
                    <IconButton disabled = {!notCaptured} onClick = {handleOnCaptureClick} color = "primary"
                     aria-label = "upload picture" component = "span">
                        <CameraIcon />
                    </IconButton>
                    <IconButton disabled = {notCaptured} onClick = {handleOnDoneClick} color = "primary" 
                    aria-label = "upload picture" component="span">
                        <DoneIcon />
                    </IconButton>
                    
                    </div>
                ) : null
            }
            <a id = "dowload-photo" href = '' ref = {imageSnapShot}/>
        </>
    );
};

export default TakePicture;