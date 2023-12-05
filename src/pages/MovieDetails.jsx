import MovieDetailsCard from "components/MovieDetailsCard/MovieDetailsCard";
import { Link, useParams, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import { getDetails } from "../services/api"
import STATUS from "../constants/STATUS";
import Loader from "components/Loader/Loader";
import Error from "components/Error/Eror";

function MovieDetails  ()  {
    const { movieId } = useParams(); 
    const [details, setDetails] = useState([]);
    const [status, setStatus] = useState(STATUS.IDLE);
    const [error, setError] = useState('');

    useEffect(() => {
        setStatus(STATUS.PENDING);
        if (!movieId) return;
        
        getDetails(movieId).then(data => {
          
            setDetails(data);
            setStatus(STATUS.RESOLVED);
        }).catch(err => {
            setError('Oops! Something went wrong. Try again.');
            setStatus(STATUS.REJECTED);
        })         
    }, [movieId])
      
    if (status === STATUS.RESOLVED) {
        return (
            <>
                <MovieDetailsCard details={details} />
                <h2>Additional Info</h2>
                <ul>
                    <li>
                        <Link to="cast">Cast</Link>                        
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>                        
                    </li>
                </ul>
                <Outlet />
             </>      
            )
    } 

    if (status === STATUS.PENDING) {
        return <Loader/>
    }

    if (status === STATUS.REJECTED) {
        return <Error>{error}</Error>
    }
}

export default MovieDetails; 