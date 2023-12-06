import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getReviews } from "services/api";
import STATUS from "constants/STATUS";
import Loader from "components/Loader/Loader";
import Error from "components/Error/Eror";
import Notification from "components/Notification/Notification";

function Reviews() {

    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [status, setStatus] = useState(STATUS.IDLE); 
    const [error, setError] = useState("");

    useEffect(() => {
        setStatus(STATUS.PENDING)
        getReviews(movieId).then(data => { 
            setReviews(data.results);
            setStatus(STATUS.RESOLVED);
        }).catch(error => {
            setError('Oops! Something went wrong. Try again.');
            setStatus(STATUS.REJECTED);
        })
    }, [movieId])

    if (status === STATUS.RESOLVED) {
        return (
            <>
                {reviews.length ? (
                    <ul>
                        {reviews.map(({id, author, content}) =>
                            <li key={id}>
                                <p>Author: {author}</p>
                                <p>{content}</p>
                            </li>
                        )}
                    </ul>
                )
                : <Notification>Sorry! We don't have any reviews for this movie.</Notification>}
            </>
        )  
    }

    if (status === STATUS.PENDING) {
        return <Loader/>
    }
           
    if (status === STATUS.REJECTED) {
        return <Error>{error}</Error>
    }   
}

export default Reviews; 