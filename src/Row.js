import React, { useEffect, useState } from 'react'
import axios from "./axios"
import "./Row.css"

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])

    return (
        <div className='row'>
            {/* Title */}
            <h1>{title}</h1>
            {/* Container -> Posters */}
            <div className="row__posters">
                {/* Several Row Posters */}
                {movies.map(movie => (
                    <img key={movie.id} className={`row__poster ${isLargeRow && "row__posterLarge"} `} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.title} />
                ))}
            </div>
        </div>
    )
}

export default Row;
