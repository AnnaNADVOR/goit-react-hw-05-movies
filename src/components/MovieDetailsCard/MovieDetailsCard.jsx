import defaultImg from 'not-found.jpg'; 

import {
    Card,
    CardInfo,
    MainTitle,
    Title,
    Text,
    TextAccent,
} from './MoviDetailsCard.styled';

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
        <Card>
            {<img src={poster_path ? imgUrl : defaultImg} alt={title} />}
            <CardInfo>
                <MainTitle>{title} ({release}) </MainTitle>
                <Text><TextAccent>User Score:</TextAccent>{average}%</Text>
                <Title>Overview</Title>
                <Text>{overview}</Text>
                {genres.length > 0 && (
                    <>
                    <Title>Genres</Title>
                    <Text>{movieGenres}</Text>
                    </>
                )}  
            </CardInfo>
        </Card>
    )
}

export default MovieDetailsCard; 