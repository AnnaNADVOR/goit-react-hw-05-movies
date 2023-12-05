import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getCast } from "services/api";
import STATUS from "constants/STATUS";
import Error from "components/Error/Eror";
import Loader from "components/Loader/Loader";
import CastListItem from "components/CastListItem/CastLiastItem";

function CastList() {
    const { movieId } = useParams(); 
    const [cast, setCast] = useState([]);
    const [status, setStatus] = useState(STATUS.IDLE); 
    const [error, setError] = useState('');

    useEffect(() => {
        setStatus(STATUS.PENDING)
        getCast(movieId).then(data => {
            setCast(data.cast);
            setStatus(STATUS.RESOLVED);
        }).catch(error => {
            setError('Oops! Something went wrong. Try again.');
            setStatus(STATUS.REJECTED);
        })
    }, [movieId])
    
    if (status === STATUS.RESOLVED) {
        return (
        <>
        {cast.length ?
            <ul>
                {cast.map(actor => 
                    <CastListItem 
                        key={actor.cast_id}
                        character={actor.character}
                        name={actor.name}
                        profile_path={actor.profile_path} />
                )}             
            </ul> 
    : <p>Sorry! We don't have cast information for this movie.</p> } 
        </>   )
    }
   
    if (status === STATUS.PENDING) {
        return <Loader/>
    }

    if (status === STATUS.REJECTED) {
        return <Error>{error}</Error>
    }
}

export default CastList; 