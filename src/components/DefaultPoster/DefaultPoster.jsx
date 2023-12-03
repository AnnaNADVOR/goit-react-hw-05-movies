
import { Poster, DefaultText } from "./DefaultPoster.styled";
import { PiFilmSlateLight } from "react-icons/pi";

function DefaultPoster() {
    return (
        <Poster>
            <PiFilmSlateLight />
            <DefaultText>No image available</DefaultText>
        </Poster>
    )    
}

export default DefaultPoster; 
