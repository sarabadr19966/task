import React, { useState, useEffect, useRef } from 'react';
import Webcam from 'webcam-easy';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import RedoIcon from '@material-ui/icons/Redo';
import DoneIcon from '@material-ui/icons/Done';
const TakePicture = (props) => {
    const [isWebCamOn ,setisWebCamOn] = useState(false);
    const [notCaptured ,setNotCaptured] = useState(true);
    const [done ,setDone] = useState(false)
    const webCamRef = useRef(null);
    const imageSnapShot = useRef(null)

    useEffect(() => {
        const webcamElement = document.getElementById('webcam');
        const canvasElement = document.getElementById('canvas');
        webCamRef.current = new Webcam(webcamElement, 'user', canvasElement);
        props.capture(true);

    }, []);

    const handleOnButtonClick = () => {
        setisWebCamOn(!isWebCamOn);
    }

    useEffect(() => {
        if (webCamRef.current && isWebCamOn) {
            webCamRef.current.start()
        } else if (webCamRef.current && !isWebCamOn) {
            webCamRef.current.stop()
        }
    }, [isWebCamOn]);

    const handleOnCaptureClick = () => {
        let picture = webCamRef.current.snap();
        imageSnapShot.current.href = picture ? picture : '';
        setNotCaptured(!notCaptured);
    }
    
   

    const handleTakeAnotherClick = () => {
        setNotCaptured(!notCaptured)
        setisWebCamOn(true)
        props.capture(!notCaptured);
        setDone(done=>false)


    }
    const handleOnDoneClick = () =>{
        setisWebCamOn(false);
        props.capture(notCaptured);
        setDone(done=>true)

    }

    return (
        <>
            <FormControlLabel
            control={ <Switch
            checked={isWebCamOn}
            onChange={handleOnButtonClick}
            name="Camera"
            inputProps={{ 'aria-label': 'Camera On checkbox' }}
            /> }
            label="Camera"
            disabled={done}
            />
            
            <div>
                <video id="webcam" autoPlay playsInline width="400" height="300" {...((!isWebCamOn || !notCaptured) && {style: {display: 'none'}})}></video>
                <canvas id="canvas" {...(notCaptured  && {style: {display: 'none'}})}></canvas>
            </div>
                {
                    isWebCamOn  || !notCaptured ? (
                        <>
                        <IconButton {...(notCaptured  && {style: {display: 'none'}})} onClick={handleTakeAnotherClick} color="primary" aria-label="upload picture" component="span">
                            <RedoIcon />
                        </IconButton>
                        <IconButton {...(!notCaptured  && {style: {display: 'none'}})} onClick={handleOnCaptureClick} color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                        </IconButton>
                        <IconButton {...(notCaptured  && {style: {display: 'none'}})} onClick={handleOnDoneClick} color="primary" aria-label="upload picture" component="span">
                            <DoneIcon />
                        </IconButton>
                        
                        </>
                    ) : null
                }
                <a id="dowload-photo" href='' ref={imageSnapShot}></a>
        </>
    );
};

export default TakePicture;