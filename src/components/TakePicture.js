import React, { useState, useEffect, useRef } from 'react';
import Webcam from 'webcam-easy';
import Button from '@material-ui/core/Button'

import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import RedoIcon from '@material-ui/icons/Redo';
import DoneIcon from '@material-ui/icons/Done';


const TakePicture = (props) => {
    const [isWebCamOn ,setisWebCamOn] = useState(false);
    const [notCaptured ,setNotCaptured] = useState(true);
    const webCamRef = useRef(null);
    const imageSnapShot = useRef(null)

    useEffect(() => {
        const webcamElement = document.getElementById('webcam');
        const canvasElement = document.getElementById('canvas');
        webCamRef.current = new Webcam(webcamElement, 'user', canvasElement);
        props.capture(true);

    }, []);

    const handleOnOffButtonClick = (onOff) => {
        setisWebCamOn(onOff);
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


    }
    const handleOnDoneClick = () =>{
        setisWebCamOn(false);
        props.capture(notCaptured);

    }

    return (
        <>

            
            <div>
                <video id="webcam" autoPlay playsInline width='400 ' height="300" {...((!isWebCamOn || !notCaptured) && {style: {display: 'none'}})}></video>
                <canvas id="canvas"  {...(notCaptured  && {style: {display: 'none'}})}></canvas>
            </div>
            {
                isWebCamOn  || !notCaptured ? (
                    <div>
                    <IconButton disabled = {notCaptured} onClick={handleTakeAnotherClick} color="primary" aria-label="upload picture" component="span">
                        <RedoIcon />
                    </IconButton>
                    <IconButton disabled = {!notCaptured} onClick={handleOnCaptureClick} color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                    </IconButton>
                    <IconButton disabled = {notCaptured} onClick={handleOnDoneClick} color="primary" aria-label="upload picture" component="span">
                        <DoneIcon />
                    </IconButton>
                    
                    </div>
                ) : null
            }
            <a id="dowload-photo" href='' ref={imageSnapShot}></a>
            <div>
            <Button onClick = {() => handleOnOffButtonClick(true)} > Open Camera</Button>
            <Button onClick = {() => handleOnOffButtonClick(false)} > Close Camera</Button>
            </div>
        </>
    );
};

export default TakePicture;