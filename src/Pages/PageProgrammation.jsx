import React from "react";
import SimpleMenu from "../Components/SimpleMenu";
import DetailFilm from "../Components/DetailFilm";
import DatesSeances from "../Components/DatesSeances";
import PiedDePage from "../Components/PiedDePage";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { KEY_API } from "../API";

export default function PageProgrammation() {
  const [moviesData, setMoviesData] = useState([]);
  const [moviesGenres, setMoviesGenres] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY_API}`
        );
        const genres = await fetch( `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY_API}`);
        const data = await response.json();
        const dataGenres = await genres.json();
        const dataMovies = data.results.slice(0, 5);
        setMoviesData(dataMovies);
        setMoviesGenres(dataGenres.genres);
        console.log(dataGenres);
        console.log(dataMovies);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadMovies();
  }, []); // Le tableau vide signifie que useEffect ne s'exécute qu'une seule fois au montage du composant

  return (
    <>
    <SimpleMenu />
    
    <Grid container justifyContent={"center"} >
      <DatesSeances />
      {moviesData.map((movie, index) => (
      <DetailFilm
            key={index}
            idMovie={movie.id}
            imgFromAPI={movie.poster_path}
            original_title={movie.original_title}
            name={movie.name}
            release_date={movie.release_date}
            first_air_date={movie.first_air_date}
            overview={movie.overview}
            genres={movie.genre_ids}
            moviesGenres={moviesGenres}
          />))}
    </Grid>
        <PiedDePage />
    </>
  );
}