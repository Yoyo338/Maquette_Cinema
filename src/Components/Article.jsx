import { Grid } from "@mui/material";
import React from "react";

export default function Article() {
  return (<>
  <Grid container  style={{ padding: "20px" }}>
    <Grid item  style={{ textAlign: "left", marginLeft: "3%", backgroundColor:"Black"}}>
      <p style={{margin:"1px"}}>16 février 2024</p>
    </Grid>
    <Grid container sm={12}  style={{ textAlign: "justify" }}>
      <Grid item sm={6}>
        <img src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/09/08/16941879568461.jpg" alt="PhotoArticle" style={{width:"100%"}}/>
      </Grid>
      <Grid item sm={6} style={{ textAlign: "justify", paddingLeft:"10px", backgroundColor:"#C9CBA3"}}>
        <h4>AVANT-PREMIERE : “Hors-saison” (1h55)</h4>
        <p>AVANT-PREMIÈRE :<br></br>"Hors-saison" de Stéphane Brizé (1h55) sera suivi d’une rencontre avec Stéphane Brizé et le comédien Guillaume Canet.<br></br>
          <br></br>
          Le 16 février 2024 @19h00 - 5 Place de la 5ème République, 33600 Pessac
        </p>
      </Grid>
    </Grid>
  </Grid>
  </>);
}
