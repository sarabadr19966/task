import React from 'react'
import ScaleLoader from "react-spinners/ScaleLoader";
import ErrorComponent from './errorComponent';

const accountCreation = (props) => {
    return (props.loading ?<ScaleLoader loading={props.loading}  /> :
        <div>
            {props.similar ? <h1>your Account created sucessfully</h1>
                : <ErrorComponent error = {props.error} tryAgain = {props.tryAgain}/>
            }
       

        </div>
    )
}

export default accountCreation;