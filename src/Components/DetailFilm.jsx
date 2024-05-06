import React from "react";
import { Grid } from "@mui/material";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Horaire from "./Horaire";

export default function DetailFilm(props) {
    return (
        <Grid container xs={11} sm={11}  style={{ backgroundColor: "#7C98B3", aligcontents: "center", justifyContent: "center", padding:"10px", alignItems:"center", marginTop:"2%", borderRadius:"10px" }}>
            <Grid item xs={5}  sm={2} style={{ textAlign: "center", backgroundColor: "#7C98B3", margin: "10px", borderRadius: "10" }}>
                <img src={"https://image.tmdb.org/t/p/w500/"+props.imgFromAPI} alt={"Affiche "+props.original_title} style={{width:"80%"}}/>
            </Grid>
            <Grid item xs={5} sm={3} style={{ textAlign: "left", backgroundColor: "#7C98B3", margin: "10px", borderRadius: "10" }}>
                <h3>{props.original_title || props.name}</h3>
                <p>Sortie le {props.release_date || props.first_air_date}</p>
                <p>
                    {props.genres.map((genreId, index) => {
                        const genre = props.moviesGenres.find(item => item.id === genreId);
                        return genre ? genre.name + (index < props.genres.length - 1 ? ", " : "") : "";
                    })}
                </p>
                <div style={{display:"flex", alignItems:"center"}}>
                    <PlayCircleIcon />
                    <p> Bande annonce</p>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} style={{ textAlign: "left", backgroundColor: "#5B5353", paddingLeft: "10px", paddingRight:"10px", borderRadius: "10px" }}>
                <h3>Synopsis</h3>
                <p>{props.overview}</p>
            </Grid>
            <Grid container justifyContent="center" marginTop="10px" display={"flex"} gap={"10px"} >
                <Horaire heure="10h00" langue="VF" isAccessible="true" />
                <Horaire heure="14h00" langue="VO" isAccessible="true" />
                <Horaire heure="18h00" langue="VOSTFR"  />
                <Horaire heure="22h00" langue="VF" isAccessible="true" />
            </Grid>
        </Grid>
    );
    }