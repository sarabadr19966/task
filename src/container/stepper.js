import React ,{useState ,useEffect} from "react";

import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";

import NationalID from '../components/nationalID';
import TakePicture from '../components/TakePicture';
import ClientInformation from '../components/clientInformation';

import AccountCreation from '../components/accountCreation';


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

const getSteps = () => {
  return [
    "Adding picture of your national id",
    "Confirming the correctense of your information",
    "Please Take picture of you"
  ];
}



export default function HorizontalLabelPositionBelowStepper() {
  useEffect(()=>{
    getAccessToken();
  },[])
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [photoUploaded ,setPhotoUploaded] = useState({frontImg : '' ,backImg : ''});
  const [clientInfo ,setClientInfo] = useState({})
  const [loading ,setLoading] = useState(false);
  const [accountCreated ,setAccountCreated] = useState(false);
  const [err ,setError] = useState({err:false ,msg:''});
  const [captured ,setCaptured] = useState(false);
  const photoUploadedHandler = (e ,label) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = () =>{
      var imgBase64 = reader.result.replace(/^data:.+;base64,/,'');
      setPhotoUploaded(prevState => ({...prevState ,[label] : imgBase64}));
    };
    reader.readAsDataURL(file)
  }

  const getStepContent = (stepIndex) =>{
    switch (stepIndex) {
      case 0:
        return <NationalID onchange = {photoUploadedHandler}/>;
      case 1:
        return <ClientInformation clientInfo = {clientInfo} loading={loading}  error={err} tryAgain={handleTryAgin}/>;
      case 2:
        return <TakePicture capture = {getCapture} />;
      default:
        return "Unknown stepIndex";
    }
  }
  

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    switch(activeStep){
      case 0:
        SendNationalIdPhotos();
        break;
      case 2:
        handleDoneClick ();
        break;
      default:
        return "Unknown stepIndex";  

    }

  };


  const getAccessToken = () => {
    var params = new URLSearchParams();
    var parametersToAdd = {
      username: "task_sara_badr",
      password: "rMrO7xY%Uc2iO5z",
      client_id: "SO8wowNXXtluOMglTq20gUaDWMOmMSxJ5uKWueSD",
      client_secret: "HA9bg5kZBlGgjNa4eD6t0ZGK8KNLIbh4oqtmJ1qPFNDQjPMSyEftmcWWaQ4p2vPrrC81opLE2oBrWKYlKWEcnKG0zZg4ajuc7LlX4QepgxEp4zjyOr6sEd0coMJ9y6ze",
      grant_type : "password"
    } ;

    for(let key in parametersToAdd){
      params.append(key, parametersToAdd[key]);

    }
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params,
    }
    fetch('https://www.valifystage.com/api/o/token/',requestOptions)
    .then(res => res.json())
    .then(data =>localStorage.setItem('token' ,data['access_token']))
    .catch(err=>console.log(err))
  }

  const SendNationalIdPhotos =()=>{
    setLoading(true)
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + localStorage.getItem('token')
        },
      body: JSON.stringify({
        "front_img": photoUploaded.frontImg,
        "back_img": photoUploaded.backImg,
        "is_back_cropped": "0",
        "is_front_cropped": "0",
        "front_label": "EGP_NID_FRONT",
        "back_label": "EGP_NID_BACK",
        "bundle_key": "6bee263097c64a0788538e051300573f"
      }),
    } 

    fetch('https://www.valifystage.com/api/v1/ocr/egp_nid_ocr/',requestOptions)
  .then(res =>{ 
    if(res.ok){
    res.json()
    .then(data=>{
      setLoading(false);
      setClientInfo(data['result']);
    })
  } else{
  res.json().then(message => {
    setLoading(false);
    setError({
      err:true,
      msg:message['message']
    })
  })

  }

}) 
}
  const handleDoneClick = () =>{
    setLoading(true);
    let liveImg = document.querySelector('#dowload-photo');
    let liveImgUrl = liveImg.getAttribute('href');
    liveImgUrl = liveImgUrl.replace(/^data:.+;base64,/,"");
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + localStorage.getItem('token')
        },
      body: JSON.stringify(
      {
        "first_img": liveImgUrl,
        "second_img": photoUploaded.frontImg,
        "bundle_key": "6bee263097c64a0788538e051300573f"
      }),
    } 

    fetch('https://www.valifystage.com/api/v1/recognition/facial_recognition/',requestOptions)
    .then(res =>{ if(res.ok){
      res.json()
      .then(data=>{
        setLoading(false);
        setAccountCreated(data["is_similar"])
      })
    } else{
    res.json().then(message => {
      setLoading(false);
      setError({
        err:true,
        msg:message['message']
      })
    })
  
    }

  })
    

  }

  const handleTryAgin = () => {
    if(activeStep === 1){
      setPhotoUploaded('')
    }
    setActiveStep(activeStep-1);
    setError({
      err:false
    })
  
  }; 

  const getCapture =(capture)=>{
    setCaptured(capture)
  }


  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <AccountCreation loading={loading} similar={accountCreated} tryAgain={handleTryAgin} error = {err}/>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div>
             
              <Button variant="contained" color="primary" onClick={handleNext}
               disabled = { loading || !(photoUploaded.frontImg && photoUploaded.backImg) || captured } 
               {...((loading || err.err) && {style: {display: 'none'}})}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}