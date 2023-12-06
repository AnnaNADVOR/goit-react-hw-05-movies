import MovieDetailsCard from "components/MovieDetailsCard/MovieDetailsCard";
import { Link, useParams, Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { getDetails } from "../services/api"
import STATUS from "../constants/STATUS";
import Loader from "components/Loader/Loader";
import Error from "components/Error/Eror";
import GoBackButton from "components/GoBackButton/GoBackButton";


function MovieDetails  ()  {
    const location = useLocation();
    const prevLocationRef = useRef(location.state?.from ?? '/movies');

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
      
//     console.log("location>>",location);
//  console.log("prevlocation>>",prevLocationRef);
    if (status === STATUS.RESOLVED) {
        return (
            <>
                <GoBackButton location={prevLocationRef.current}/>
                <MovieDetailsCard details={details}/>
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