import './App.css';
import { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
// import Searching from './components/Searching';


  const App = () =>{
    //setting up useState
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    //fetching data from upi
    const movieSearch = async (SetsearchValue) =>{
     const url = `http://www.omdbapi.com/?apikey=e47a5175&s=${searchValue}`;
     const res = await fetch(url);
     const responseJson = await res.json(); 

     if(responseJson.Search){
     setMovies(responseJson.Search)
     console.log(responseJson);
    };
  };
  //handlechange for input
   const handleChange = (e) =>{
   setSearchValue(e.target.value)
   }

   //useeffect with searchValue as par
  useEffect(() =>{
    movieSearch(searchValue);
  },[searchValue]);

  
  return <div>
    <h2>Movies App </h2>
    <hr></hr>
    <h3>Search for movies by their title</h3>
    <input onChange={(e)=>handleChange(e)} ></input>
    <br></br>
    <button>Search Now!</button>
    <div id='reply'></div>
    <div className='movieList'>
      <MovieList movies = {movies.slice(0,3)}/> 
    </div>
    
  </div>;
};

export default App;
