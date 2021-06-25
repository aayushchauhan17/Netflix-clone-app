import React, { useState, useEffect } from 'react';
import './row.css'
import axios from './axios';

function Otherrow({title, fetchURL}) {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const resultdata = await axios.get(fetchURL);
            // console.log(resultdata.data.results);
            setMovie(resultdata.data.results);
        }
        fetchData();
    }, [fetchURL])

    // console.table(movie);

    const base_URL = 'https://image.tmdb.org/t/p/original/';
    return (
        <div className="NetflixOrignals">
            <h1>{title}</h1>

            <div className="netflixMovies_row">
                {movie.map((movie) => {
                    return (
                            <img 
                            className="other_row_img"
                            key={movie.id}
                            src={`${base_URL}${movie.backdrop_path}`} alt={movie.original_name} />
                    )
                })}
            </div>
        </div>
    )
}

export default Otherrow;

