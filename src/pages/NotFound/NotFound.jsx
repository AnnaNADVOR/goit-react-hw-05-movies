import { PiMaskSadDuotone } from "react-icons/pi";

import {
    InfoContainer,
    InfoTitle,
    InfoCode,
} from "./NotFound.styled";

function NotFound() {
    return (
        <InfoContainer>
            <InfoTitle><InfoCode>4<PiMaskSadDuotone />4</InfoCode>error</InfoTitle>
            <p>Page not found</p>
        </InfoContainer>
    )
}

export default NotFound