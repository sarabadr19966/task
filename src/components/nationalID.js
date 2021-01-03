import React from 'react';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';




const NationalId = props =>  {
    
    return ( 
        <React.Fragment>
            <Typography>
                Front Picture
            </Typography>
            <TextField
                onChange ={(e) => props.onchange(e ,'frontImg')}
                id="margin-normal"
                type = "file"
                margin="normal"
            />
           
            <Typography>
                back Picture
            </Typography>

            <TextField
                onChange ={(e) => props.onchange(e ,'backImg')}
                id="margin-normal"
                type = "file"
                margin="normal"
            />
        </React.Fragment> 
    );
    
}






export default NationalId;