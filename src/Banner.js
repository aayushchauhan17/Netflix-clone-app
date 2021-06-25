import axios from './axios'
import React, { useState, useEffect } from 'react';
import './banner.css';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Nav from './Nav'


const Banner = ({ fetchURL }) => {
    const [Movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchdata() {
            const resultdata = await axios.get(fetchURL);
            setMovie(resultdata.data.results[Math.round(Math.random() * resultdata.data.results.length)]);
        }
        fetchdata();
    }, [fetchURL])

    console.log(Movie);
    const base_URL = 'https://image.tmdb.org/t/p/original/';

    const aboutmovie = (str, n)=>{
        return str?.length > n? str.substr(0,n-1) +"..." : str;
    }


    return (
        <div className="banner_div"
            style={{
                backgroundImage: `url(${base_URL}${Movie.backdrop_path})`,
                backgroundPosition: "center",
                backgroundSize:"cover",
                backgroundRepeat:"no-repeat"
            }}>
                <Nav />
            <div className="banner_content">
                <h1>{Movie?.title || Movie?.original_name || Movie?.original_title}</h1>
                <p> {aboutmovie(Movie.overview, 150)} </p>
                <div className=".banner_button">
                    <Button
                        style={{ fontWeight: "bold", width:"120px" , marginRight:"10px"}}
                        variant="contained"
                        size="large"
                        className="banner_button1">
                        <PlayArrowIcon style={{ marginRight: "10px" }} />
                        Play
                    </Button>
                    <Button
                        style={{ fontWeight: "bold" ,width:"167px", color:"white", background:"rgba(51, 51, 51, 0.5)" }}
                        variant="contained"
                        size="large"
                        className="banner_button1">
                        <InfoOutlinedIcon style={{ marginRight: "10px" }} />
                        More Info
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default Banner
