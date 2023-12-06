import { Link } from "react-router-dom";

function MoviesListItem({ id, title }) {
    return (
        <li>
            <Link>{title}</Link>
        </li>
    )
}

export default MoviesListItem; 