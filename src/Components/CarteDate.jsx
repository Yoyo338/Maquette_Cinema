import React from "react";
import { Grid } from "@mui/material";

export default function CarteDate(props) {
    return (
        <Grid item >
            <p>{props.jour}</p>
            <p>{props.date}</p>
        </Grid>
    );
}