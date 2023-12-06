import { IoIosArrowBack } from "react-icons/io";
import {
    BackLink,
} from "./GoBackButton.styled";

function GoBackButton ({location}) {
    return (
        <BackLink to={location}>
            <IoIosArrowBack />
            Go Back
        </BackLink>
    )
}

export default GoBackButton; 