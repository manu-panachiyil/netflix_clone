
import React, { useEffect, useState } from 'react'
import './Banner.css'
import instance from '../instance'

function Banner({fetchUrl}) {

    const [movie, setMovie] = useState();
    const base_url = "https://image.tmdb.org/t/p/original/";

    const fetchData = async () => {
        const {data} = await instance.get(fetchUrl);
        //console.log(data.results);
        setMovie(data.results[Math.floor(Math.random()*data.results.length)]);
    }
    console.log(movie);

    useEffect(() => {
        fetchData();
    },[])

  return (
    <div style={{height:'470px',backgroundImage:`url(${base_url}${movie?.backdrop_path})`,backgroundSize:'cover',backgroundAttachment:'fixed',backgroundPosition:'center'}}>
        <div className='banner-content'>
            <h1>{movie?.name}</h1>
            <button className='btn btn-danger'>Play <i className="fa-solid fa-play bg-transparent"></i></button> <button className='btn  border-white ms-3 more'>More info <i className="fa-solid fa-play fa-rotate-90 bg-transparent"></i></button>
            <h2> {movie?.overview?.slice(0.200)}... </h2>
        </div>
    </div>
  )
}

export default Banner