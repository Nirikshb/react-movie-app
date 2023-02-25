import React from "react";

//using a function for printing values as desired ui
const MovieList = (props) =>{
   
    return(
        <>
        {props.movies.map((movie, index) => 
        <div id="pro">
            <img src={movie.Poster} alt='movie'></img>
            <ul>
            <li id="Movie">
            Title : {movie.Title}
            </li>
            <li id="Movie">
            Type : {movie.Type}
            </li>
            <li id="Movie">
            Year : {movie.Year}
            </li>
            </ul>
      
            <button id="more">Know More</button> 
            
        </div>
        )}
        </>
    )
}

export default MovieList;