import React from 'react';

const Card = (movie) => {

  // console.log(movie.info);
  const imgUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie">
      <img className="poster" src={imgUrl+movie.info.poster_path} alt="movie poster!"></img>
      <div className="movieDetail">
        <div className="box">
          <h3 className="title">{movie.info.title}</h3>
          <p className="rating">{movie.info.vote_average}</p>
        </div>
        <div className="overview">
          <h1>Movie plot</h1>
          {movie.info.overview} 
        </div>
      </div>
    </div>
  )
}

export default Card;