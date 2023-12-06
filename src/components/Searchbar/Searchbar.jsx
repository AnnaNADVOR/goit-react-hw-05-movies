import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BiSearchAlt } from "react-icons/bi";
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
        <form onSubmit={onFormSubmit}>
            <input type="text"
                onChange={onInputChange}
                value={searchQuery}
                placeholder="Search movies"/>
            <button type="submit">
                <BiSearchAlt />
            </button>        
        </form>        
    )
}

export default Searchbar;