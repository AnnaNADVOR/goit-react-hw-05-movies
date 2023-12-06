import MoviesListItem from "../MoviesListItem/MoviesListItem";

import {
    List,
    Section,
} from "./MoviesList.styled";

function MoviesList({movies}) {
    return (
        <Section>       
            <List>
                {movies.map(({id, title}) => <MoviesListItem
                    key={id}
                    title={title}
                    id={id}
                />)}
            </List>
        </Section>
    )
}

export default MoviesList; 