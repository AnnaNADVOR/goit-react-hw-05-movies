import { useEffect, useState } from "react";
import { RotatingLines } from 'react-loader-spinner';

import TrendingMoviesList from "components/TrendingMoviesList/TrendingMoviesList";

import { getTrendingMovies } from "../services/api"
import STATUS from "../constants/STATUS";
import Error from "components/Error/Eror";

function  Home ()  {
   console.log("test")
    const [movies, setMovies] = useState([])
    const [status, setStatus] = useState(STATUS.IDLE);
    const [error, setError] = useState('');
       
    useEffect(() => {
           console.log("effect")
        setStatus(STATUS.PENDING);
        getTrendingMovies()
            .then(data => {
                // throw "error"
                setMovies(data.results);
                setStatus(STATUS.RESOLVED);               
            })
            .catch(error => {
                setError('Oops! Something went wrong. Try again.');
                setStatus(STATUS.REJECTED); 
            });
    },[]) 

          if (status === STATUS.RESOLVED) {
            return (
                <TrendingMoviesList
        trendingMovies={movies}/>
   
            )
    }
    
              if (status === STATUS.PENDING) {
            return (
                <>
                    <RotatingLines />
                    <div>Please wait...</div>
                </>   
            )
        }
       
    if (status === STATUS.REJECTED) {
        return <Error>{error}</Error>
    }


}

export default Home; 