// import { useSearchParams } from "react-router-dom";

function Searchbar({change, query}) {
    // const [searchParams, setSearchParams] = useSearchParams(); 
    // const query = searchParams.get('query');
   
    // function onInputChange(event) {
    //     setSearchParams({query:event.target.value});
    // }

    return (
        <form>
            <input type="text"
                onChange={change}
                value={query} />
            <button>Search</button>
        </form>
        
    )
}

export default Searchbar