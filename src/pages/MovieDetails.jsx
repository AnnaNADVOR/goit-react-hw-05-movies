import MovieDetailsCard from "components/MovieDetailsCard/MovieDetailsCard";
import { useParams } from "react-router-dom";

const MovieDetails = () => {

    const { movieId } = useParams(); 
    

    return (
        <MovieDetailsCard id={ movieId} />
    )
}

export default MovieDetails; 