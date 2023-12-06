import defaultImg from 'not-found.jpg'; 
import Section from 'components/Section/Section';
import Container  from 'components/Container/Container';

function MovieDetailsCard({ details }) {
    const {
        poster_path = '',
        title = '',
        vote_average = 0,
        release_date = '',
        overview = '',
        genres = [],
    } = details;

    const average = Math.round(vote_average * 10); 
    const release = release_date.slice(0, 4);
    const movieGenres = genres.map(genre => genre.name).join(" ");
    const imgUrl = `https://image.tmdb.org/t/p/w300/${poster_path}`;

    return (
        <Section>
            <Container>
                {<img src={poster_path ? imgUrl : defaultImg} alt={title} />}
                <h1>{title} ({release}) </h1>
                <p>User Score: {average}%</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                {genres.length>0 && (<>
                    <h2>Genres</h2>
                    <p>{movieGenres}</p>
                </>)}            
            </Container>
        </Section>
    )
}

export default MovieDetailsCard; 