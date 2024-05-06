import { WidthFull } from "@mui/icons-material";
import React from "react";
import { Grid } from "@mui/material";
import AccessibleIcon from '@mui/icons-material/Accessible';

export default function Horaire(props) {
    return (
        <Grid item xs={2} sm={2} style={{backgroundColor:"#5B5353", textAlign:"center", justifyContent:"center",alignItems:"center", borderRadius:"10px", position:"relative"}}>
        <p style={{position:"absolute", top:"35px", left:"0px", fontSize:"0.5em", paddingLeft:"3%"}}>{props.langue}</p>
        <p>{props.heure}</p>
        {props.isAccessible ? <AccessibleIcon style={{position:"absolute", height:"0.5em", top:"40px", right:"0px"}}/> : null}
        </Grid>
    );
    }