import { Grid } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

export default function PiedDePage() {
  return (<>
    <Grid container style={{ backgroundColor: "darkgrey", aligcontents: "center", justifyContent: "center"  }}>
      <Grid item xs={12} sm={3} style={{ textAlign: "center", backgroundColor:"grey", margin:"10px", borderRadius:"10" }}>
        <h3>Restez informé</h3>
        <TextField id="outlined-basic" label="Mail" variant="outlined" />
        <br />
        <Button variant="contained" style={{margin: "3%"}}>Je m'abonne</Button>
      </Grid>
      <Grid item sm={4} style={{textAlign: "center", alignItems:"center", backgroundColor:"grey", margin:"10px", borderRadius:"10", padding:"10px"}}>
          <Grid item  style={{display:"flex", alignItems:"center"}}>
            <img src="https://www.webeustache.com/display/afcae_logo2014.png" alt="logo_afcae" style={{height:"30%"}} />
            <p>Le cinéma Jean Eustache est membre de l’AFCAE depuis 1990</p>
          </Grid>
          <Grid item xs={12} style={{display:"flex", alignItems:"center"}}>
            <img src="https://www.webeustache.com/display/europa.jpg" alt="logo_europa" style={{height:"3em"}}/>
           <p>Le cinéma Jean Eustache est membre de l’AFCAE depuis 1990</p>
          </Grid>
          <Grid item  style={{display:"flex", alignContent:"center"}}>
          <p>"{">Tous nos labels"}</p>
          </Grid>          
      </Grid>
      <Grid item xs={12} sm={4} style={{ textAlign: "justify", backgroundColor:"grey", margin:"10px", borderRadius:"10", paddingLeft:"10px" }}>
        <Grid item style={{ textAlign: "justify", backgroundColor:"grey", margin:"10px", borderRadius:"10", paddingLeft:"10px" }}>
          <h3>Cinéma Jean Eustache</h3>
          <p>7bis rue des Poilus, 33600 Pessac</p>
          <p>Nous Contacter - Tel : 05 56 46 00 96</p>
          <p>VENIR AU JEAN EUSTACHE</p>
          <p>LES TARIFS</p>
        </Grid>
        <Grid item style={{ textAlign: "justify", backgroundColor:"grey", margin:"10px", borderRadius:"10", paddingLeft:"10px" }}>

        </Grid>
      </Grid>
      
    </Grid>
  </>
  );
}