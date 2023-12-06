import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

function GoBackButton ({location}) {
    return (
        <Link to={location}>
            <IoIosArrowBack />
            Go Back
        </Link>
)
}
export default GoBackButton; 