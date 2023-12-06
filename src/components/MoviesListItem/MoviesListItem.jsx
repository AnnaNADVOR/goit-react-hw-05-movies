import { useLocation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import {
    MoviesItem,
    MoviesLink,

} from "./MoviesListItem.style"


function MoviesListItem ({ title, id }) {
    const location = useLocation();
    return (
        <MoviesItem>
            <IoIosArrowForward />
            <MoviesLink to={`/movies/${id}`} state={{ from: location }}>{title}</MoviesLink> 
        </MoviesItem>
    )
}

export default MoviesListItem; 