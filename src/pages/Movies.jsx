import Searchbar from "components/Searchbar/Searchbar";
import { getMoviesByKeyword } from "services/api";
import { useSearchParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Error from "components/Error/Eror";
import STATUS from "constants/STATUS";
import MoviesList from "components/MoviesList/MoviesList";

function Movies() {

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');
    const [status, setStatus] = useState(STATUS.IDLE);
    
    useEffect(() => {
        if (query === '') {
            return;
        }
        setStatus(STATUS.PENDING);
        getMoviesByKeyword(query).then(data => {
            if (data.results.length === 0) {
                console.log('No items found! Enter other serch therm.')
                return;
            }              
            setMovies(data.results);
            setStatus(STATUS.RESOLVED);            
        }).catch(error => { 
            setError('Oops! Something went wrong. Try again.');
            setStatus(STATUS.REJECTED); 
        })}, [query]);

    const getQuery = (value) => {
        setSearchParams({ query: value });
    }

    return (
        <>
        <Searchbar submit={getQuery} />
            {status === STATUS.RESOLVED && <MoviesList movies={movies} />} 
        </>   
    )    
}

export default Movies; 