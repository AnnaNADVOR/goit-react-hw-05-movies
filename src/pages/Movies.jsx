import Searchbar from "components/Searchbar/Searchbar";
import { getMoviesByKeyword } from "services/api";
import { useSearchParams } from "react-router-dom";

function Movies() {

    // // const [searchParams, setSearchParams] = useSearchParams();
    // // const query = searchParams.get('query') ?? '';
    
    // // function onInputChange(event) {
    // //     setSearchParams({query:event.target.value});
    // // }

    // getMoviesByKeyword(query).then(data=>console.log(data))

    const getQuery = (value) => {
console.log(value)
    }

    return (
        <Searchbar submit={getQuery} />
    )
    
}

export default Movies; 