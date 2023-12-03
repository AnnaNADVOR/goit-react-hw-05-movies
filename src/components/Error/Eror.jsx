import { ImFilm } from "react-icons/im";
import {ErrorContainer} from './Error.styled'

function Error({ children }) {
    return (
        <ErrorContainer>
            <ImFilm />
            {children}
        </ErrorContainer>
    )
}

export default Error;