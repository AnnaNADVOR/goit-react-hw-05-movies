import TrendingMoviesItem from "../TrendingMoviesItem/TrendingMoviesItem";

function TrendingMoviesList({trendingMovies}) {
    return (
        <ul>
            {trendingMovies.map(movie => <TrendingMoviesItem
                key={movie.id}
                title={movie.title}
                id={movie.id}
                />)}
        </ul>
    )
}

export default TrendingMoviesList; 