import { useEffect, useState } from "react";
import { getTrendingMovies } from "../services/api"
import TrendingMoviesList from "components/TrendingMoviesList/TrendingMoviesList";
import { RotatingLines } from 'react-loader-spinner';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
}

function  Home ()  {
   console.log("test")
    const [movies, setMovies] = useState([])
    const [status, setStatus] = useState(STATUS.IDLE);


    
    useEffect(() => {
           console.log("effect")
        setStatus(STATUS.PENDING);
        getTrendingMovies()
            .then(data => {
                setMovies(data.results);
                setStatus(STATUS.RESOLVED);
            })
            .catch(err => console.error(err));
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
       


}

export default Home; 