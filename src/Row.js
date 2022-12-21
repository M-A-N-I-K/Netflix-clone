import React, { useEffect, useState } from 'react'
import axios from "./axios"

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request);
        }
        fetchData();
    }, [])
    return (
        <div>
            {/* Title */}
            <h1>{title}</h1>
            {/* Container -> Posters */}
        </div>
    )
}

export default Row;
