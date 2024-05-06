import React from "react";
import { Grid } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CarteDate from "./CarteDate";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function DatesSeances() {
  return (
    <Grid container justifyContent={"center"} marginTop={"2%"} display={"flex"} gap={"2%"} alignItems={"center"} style={{background:"#7C98B3", borderRadius:"10px"}}>
      <ArrowBackIosIcon />
      
      <CarteDate jour="Lun." date="12/12" />
      <CarteDate jour="Mar." date="13/12" />
      <CarteDate jour="Mer." date="14/12" />
      <CarteDate jour="Jeu." date="15/12" />
      <CarteDate jour="Ven." date="16/12" />
      <CarteDate jour="Sam." date="17/12" />
      <CarteDate jour="Dim." date="18/12" />

      <ArrowForwardIosIcon />
      <CalendarMonthIcon />
    </Grid>
  );
}