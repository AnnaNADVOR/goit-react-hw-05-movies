import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getCast } from "services/api";
import STATUS from "constants/STATUS";
import CastListItem from "components/CastListItem/CastLiastItem";

function CastList() {
    const { movieId } = useParams(); 
    const [cast, setCast] = useState([]);
    const [status, setStatus] = useState(STATUS.IDLE); 
    const [error, setError] = useState("");

    useEffect(() => {
        getCast(movieId).then(data=> setCast(data.cast)).catch(error=>error)
    }, [movieId])
    
console.log(cast)

    return (
        <ul>
            {cast.map(actor => {
                 
                return (
                    <CastListItem 
                        key={actor.cast_id}
                        character={actor.character}
                        name={actor.name}
                      
                        profile_path={actor.profile_path} /> 
                )
                
            }
               
           )} 
        </ul>
    )
}

export default CastList; 