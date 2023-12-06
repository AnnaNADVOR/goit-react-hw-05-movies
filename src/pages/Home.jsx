import { useEffect, useState} from "react";

import TrendingMoviesList from "components/TrendingMoviesList/TrendingMoviesList";

import { getTrendingMovies } from "../services/api";
import STATUS from "../constants/STATUS";
import Error from "components/Error/Eror";
import Loader from "components/Loader/Loader";
import { useLocation } from "react-router-dom";

function  Home ()  {
    const [movies, setMovies] = useState([])
    const [status, setStatus] = useState(STATUS.IDLE);
    const [error, setError] = useState('');

    const location = useLocation();
    
       
    useEffect(() => {
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
    }, []);
    
    console.log(location)

    if (status === STATUS.RESOLVED) {
        return (
            <TrendingMoviesList
            trendingMovies={movies}/>   
        )
    }
    
    if (status === STATUS.PENDING) {
        return (
            <Loader/>  
        )
    }
       
    if (status === STATUS.REJECTED) {
        return <Error>{error}</Error>
    }
}

export default Home; 