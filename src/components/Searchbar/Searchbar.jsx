import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Searchbar({ submit }) {
  
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';
    const [searchQuery, setSearchQuery] = useState(query);
    
    function onFormSubmit (event) {
        event.preventDefault();
        if (searchQuery.trim() === "") {
             console.log("no")
        }
        setSearchParams({ query: searchQuery});
        submit(searchQuery);    
    }

    function onInputChange(event) {
        // if (event.target.value === "") {
        //     return setSearchParams({});
        // }        
        setSearchQuery(event.target.value.toLowerCase().trim())
    }
    
    return (
        <form onSubmit={onFormSubmit}>
            <input type="text"
                onChange={onInputChange}
                value={searchQuery} />
            <button type="submit">Search</button>
        </form>
        
    )
}

export default Searchbar