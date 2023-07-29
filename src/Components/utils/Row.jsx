import React, { useEffect, useState } from 'react';
import axios from "../Api/axios";
import "../styles/Row.css";
import ReactPlayer from 'react-player/youtube';
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        }
        fetchData();
    }, [fetchUrl])
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        }
        else {
            movieTrailer(movie?.name || "").then((url) => {
                const urlParams = new URLSearchParams(new URL(url)?.search);
                console.log(urlParams.get('v'));
                setTrailerUrl(urlParams.get('v'));
            }).catch((error) => { console.log(error); })
            console.log(trailerUrl);
        }
    }

    return (
        <div className='row'>
            <h1>{title}</h1>
            <div className="row__posters">
                {movies.map(movie => (
                    <img key={movie.id} onClick={() => handleClick(movie)} className={`row__poster ${isLargeRow && "row__posterLarge"} `} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.title} />
                ))}
            </div>
            {trailerUrl && <ReactPlayer
                url={`https://www.youtube.com/watch?v=${trailerUrl}`}
                width='100%'
                height='450px' playing={false} />}
        </div>
    )
}

export default Row;
