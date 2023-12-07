import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BiSearchAlt } from "react-icons/bi";

import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import {
    SearchForm,
    SearchButton,
    SearchField,
} from './Searchbar.styled';


function Searchbar({ submit }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';
    const [searchQuery, setSearchQuery] = useState(query);
    
    const onFormSubmit =  (event) => {
        event.preventDefault();
        setSearchParams({ query: searchQuery});
        submit(searchQuery);    
      
    }

    const onInputChange = (event)=> {
        const normaliseQuery = event.currentTarget.value.toLocaleLowerCase().trim();
        setSearchQuery(normaliseQuery);
    }

    return (
        <Section>
            <Container>
            <SearchForm onSubmit={onFormSubmit}>
            <SearchField type="text"
                onChange={onInputChange}
                value={searchQuery}
                placeholder="Search movies"/>
            <SearchButton type="submit">
                <BiSearchAlt />
            </SearchButton>        
                </SearchForm>
        </Container>        
        </Section>
             
    )
}

export default Searchbar;