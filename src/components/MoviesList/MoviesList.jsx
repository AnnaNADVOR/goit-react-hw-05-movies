import MoviesListItem from "../MoviesListItem/MoviesListItem";

function MoviesList({movies}) {
    return (
        <ul>
            {movies.map(({id, title}) => <MoviesListItem
                key={id}
                title={title}
                id={id}
                />)}
        </ul>
    )
}

export default MoviesList; 