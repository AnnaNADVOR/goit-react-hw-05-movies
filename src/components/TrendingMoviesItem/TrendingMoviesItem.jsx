import { Link } from "react-router-dom";

function TrendingMoviesItem({ title, id }) {
    return (
        <li>
           <Link to={`/movies/${id}`}>{title}</Link> 
        </li>
    )
}

export default TrendingMoviesItem; 