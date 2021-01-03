import React from 'react'
import ScaleLoader from "react-spinners/ScaleLoader";
import Button from '@material-ui/core/Button';

const accountCreation = (props) => {
    return (props.loading ?<ScaleLoader loading={props.loading}  /> :
        <div>
            {props.similar ? <h1>your Account created sucessfully</h1>
                : <>
                <h1>please try again later</h1>
                <h4>{props.error['msg']}</h4>
                <Button onClick={props.tryAgain}>
                    Try Again
                </Button>
                </>
            }
       

        </div>
    )
}

export default accountCreation;