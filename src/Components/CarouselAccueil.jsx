import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import {Grid} from '@mui/material';
import './CarouselAccueil.css'; // Importation du fichier de style CSS
import { useState, useEffect } from 'react';
import { KEY_API } from '../API';

export default function CarouselAccueil(props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY_API}`
                );
                const data = await response.json();
                const dataMovies = data.results.slice(0, 5);
                const newItems = dataMovies.map((movie) => ({
                    name: movie.original_title,
                    description: movie.overview,
                    image: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                }));
                setItems(newItems);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        loadMovies();
    }, []);

    return (
        <Grid container marginTop={"20px"}  justifyContent="center">
            <Grid item xs={12} sm={8}>
                <Carousel animation="slide">
                    {items.map((item, index) => (
                        <Item key={index} item={item} />
                    ))}
                </Carousel>
            </Grid>
        </Grid>
    );
}

function Item(props) {

    console.log(props);

    return (
        <Paper className="carousel-item">
            <img src={props.item.image} alt={props.item.name} className="carousel-image" />
            <div className="carousel-overlay">
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>
                <Button variant="contained" color="primary">Bande Annonce</Button>
            </div>
        </Paper>
    );
}