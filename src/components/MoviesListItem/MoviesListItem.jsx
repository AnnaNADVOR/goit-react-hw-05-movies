import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function MoviesListItem ({ title, id }) {
    const location = useLocation();
    
    // const nextPath = location.pathname === '/' ? 'movies/' : '';
    return (
        <li>
            <Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link> 
        </li>
    )
}

export default MoviesListItem; 