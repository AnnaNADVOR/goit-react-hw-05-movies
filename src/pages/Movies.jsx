import Searchbar from "components/Searchbar/Searchbar";
import { getMoviesByKeyword } from "services/api";
import { useSearchParams } from "react-router-dom";

function Movies() {

    const [searchParams, setSearchParams] = useSearchParams(); 
    const query = searchParams.get('query') ?? '';
    
    function onInputChange(event) {
        setSearchParams({query:event.target.value});
    }

    return (
        <Searchbar
            change={onInputChange}
            query={query} />
    )
    
}

export default Movies; 