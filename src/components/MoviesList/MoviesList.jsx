import MoviesListItem from "../MoviesListItem/MoviesListItem";

function MoviesList({movies}) {
    return (
        <ul>
            {movies.map(movie => <MoviesListItem
                key={movie.id}
                title={movie.title}
                id={movie.id}
                />)}
        </ul>
    )
}

export default MoviesList; 