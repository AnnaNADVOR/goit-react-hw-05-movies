import { useSearchParams } from "react-router-dom";

function Searchbar({submit}) {
    const [searchParams, setSearchParams] = useSearchParams(); 
    const query = searchParams.get('query') ?? "";

    function onFormSubmit (event) {
        event.preventDefault();
        if (query === "") {
             console.log("no")
        }
        submit(query);    
    }

    function onInputChange(event) {
        if (event.target.value === "") {
            return setSearchParams({});
        }
        setSearchParams({query:event.target.value.toLocaleLowerCase().trim()});
    }

    
    return (
        <form onSubmit={onFormSubmit}>
            <input type="text"
                onChange={onInputChange}
                value={query} />
            <button>Search</button>
        </form>
        
    )
}

export default Searchbar