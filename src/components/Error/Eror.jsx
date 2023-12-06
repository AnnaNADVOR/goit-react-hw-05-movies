import { PiMaskSadDuotone } from "react-icons/pi";
import {ErrorContainer} from './Error.styled'

function Error({ children }) {
    return (
        <ErrorContainer>
            <PiMaskSadDuotone />
            {children}
        </ErrorContainer>
    )
}

export default Error;