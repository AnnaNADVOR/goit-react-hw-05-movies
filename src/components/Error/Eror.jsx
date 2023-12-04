import { PiMaskSadLight } from "react-icons/pi";
import {ErrorContainer} from './Error.styled'

function Error({ children }) {
    return (
        <ErrorContainer>
            <PiMaskSadLight />
            {children}
        </ErrorContainer>
    )
}

export default Error;